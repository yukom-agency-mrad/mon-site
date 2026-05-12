export type GoogleReview = {
  authorName: string;
  authorPhotoUrl?: string;
  authorUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
  publishTime: string;
};

export type PlaceData = {
  rating?: number;
  userRatingCount?: number;
  reviews: GoogleReview[];
};

const FALLBACK: PlaceData = {
  rating: 5,
  userRatingCount: 1,
  reviews: [
    {
      authorName: "Émilie Wild",
      rating: 5,
      relativeTime: "Cliente Aniodys",
      text: "J'ai fait appel à Maud pour refaire tout mon site internet et mettre un coup de boost à ma communication, elle me conseille sur de nombreux points et sait être à l'écoute de mes besoins. Grâce à elle j'ai gagné en visibilité — c'est exactement ce que je souhaitais !",
      publishTime: new Date().toISOString(),
    },
  ],
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    rating?: number;
    relativePublishTimeDescription?: string;
    publishTime?: string;
    text?: { text?: string; languageCode?: string };
    originalText?: { text?: string; languageCode?: string };
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
};

export async function getGoogleReviews(): Promise<PlaceData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return FALLBACK;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 60 * 60 * 12 },
      },
    );

    if (!res.ok) {
      return FALLBACK;
    }

    const data = (await res.json()) as PlacesApiResponse;

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .filter((r) => r.text?.text || r.originalText?.text)
      .map((r) => ({
        authorName: r.authorAttribution?.displayName ?? "Client",
        authorPhotoUrl: r.authorAttribution?.photoUri,
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating ?? 5,
        relativeTime: r.relativePublishTimeDescription ?? "",
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        publishTime: r.publishTime ?? new Date().toISOString(),
      }))
      .filter((r) => r.text.length > 0);

    if (reviews.length === 0) {
      return FALLBACK;
    }

    return {
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      reviews,
    };
  } catch {
    return FALLBACK;
  }
}
