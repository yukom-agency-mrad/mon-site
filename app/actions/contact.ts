"use server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "maud_mrad@hotmail.fr";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Yukom <onboarding@resend.dev>";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("company") ?? "");
  if (honeypot) {
    return { status: "success", message: "Merci, message reçu !" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Indiquez votre prénom et nom.";
  if (!EMAIL_REGEX.test(email)) fieldErrors.email = "Adresse email invalide.";
  if (message.length < 10) fieldErrors.message = "Décrivez un peu votre projet (10 caractères min).";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Quelques informations à vérifier avant l'envoi.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY absent — message non envoyé. Payload:",
      { name, email, phone, projectType, message },
    );
    return {
      status: "success",
      message:
        "Message bien reçu ! (Mode test — l'envoi email sera activé une fois la clé Resend configurée.)",
    };
  }

  const subject = `Nouveau message Yukom — ${projectType || "Sans sujet"} — ${name}`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; color: #18221c;">
      <h2 style="font-family: Georgia, serif; font-size: 22px; margin: 0 0 16px;">Nouveau contact Yukom</h2>
      <p style="margin: 0 0 8px;"><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email :</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${phone ? `<p style="margin: 0 0 8px;"><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ""}
      ${projectType ? `<p style="margin: 0 0 8px;"><strong>Type de projet :</strong> ${escapeHtml(projectType)}</p>` : ""}
      <hr style="border: 0; border-top: 1px solid #e5e5e0; margin: 20px 0;" />
      <p style="margin: 0 0 8px;"><strong>Message :</strong></p>
      <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error:", res.status, detail);
      return {
        status: "error",
        message: "L'envoi a échoué. Réessayez ou contactez-nous directement par email.",
      };
    }

    return {
      status: "success",
      message: "Message envoyé ! On vous recontacte dans la foulée.",
    };
  } catch (err) {
    console.error("[contact] fetch error:", err);
    return {
      status: "error",
      message: "Erreur réseau. Réessayez dans un instant.",
    };
  }
}
