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
  userRatingCount: 22,
  reviews: [
    {
      authorName: "Les Maisons Cocoon",
      rating: 5,
      relativeTime: "Cliente",
      text: "Nous avons eu la chance de travailler avec Maud pour la création de notre site internet ainsi que toute notre charte graphique (cartes de visite, signature digitales, pages à en-tête, etc.), et le résultat est tout simplement I-N-C-R-O-Y-A-B-L-E ! Grâce à elle, nous disposons aujourd'hui d'une identité visuelle forte, professionnelle et moderne, dont nous sommes extrêmement fiers.",
      publishTime: new Date().toISOString(),
    },
    {
      authorName: "Filipa Texeira",
      rating: 5,
      relativeTime: "Sorec Immobilier",
      text: "Nous avons fait appel à Maud pour la création complète de notre flyer, et nous sommes ravis du résultat ! Elle a été à l'écoute, très réactive, professionnelle et pleine de bons conseils. En plus, elle est vraiment sympathique ! Un grand merci pour ton excellent travail, Maud !",
      publishTime: new Date().toISOString(),
    },
    {
      authorName: "Lucie Di Giovanni",
      rating: 5,
      relativeTime: "Aimiya",
      text: "Une agence de communication qui se démarque. Merci infiniment d'avoir remis de l'ordre, merci pour la créativité, merci pour la persévérance dans les obstacles à dépasser ! Je crois en mon développement sur mes réseaux grâce à Maud, une femme incroyable !!! Merci de mettre en lumière l'authenticité de mon âme ✨",
      publishTime: new Date().toISOString(),
    },
    {
      authorName: "Clément Thonon",
      rating: 5,
      relativeTime: "Client",
      text: "J'ai fait appel à Maud pour l'élaboration d'une charte graphique. Elle a su saisir mes besoins et proposer un branding cohérent avec ce que je souhaitais. Accompagnement au top 👌🏻",
      publishTime: new Date().toISOString(),
    },
    {
      authorName: "Céline Vachon",
      rating: 5,
      relativeTime: "Cap Expé Occitanie",
      text: "Maud a très vite compris l'esprit de nos demandes de visuels et a su rebondir et s'adapter à nos changements d'avis ;) Très réactive, le résultat très pro correspond parfaitement à nos attentes ! Merci et à très vite :)",
      publishTime: new Date().toISOString(),
    },
    {
      authorName: "Émilie Wild",
      rating: 5,
      relativeTime: "Aniodys",
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
