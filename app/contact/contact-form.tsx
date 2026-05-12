"use client";

import { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Stratégie de communication",
  "Identité visuelle / Graphisme",
  "Réseaux sociaux",
  "Site web",
  "Autre / Je ne sais pas encore",
];

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-foreground focus:ring-2 focus:ring-foreground/10";

const labelClass = "block text-sm font-medium text-foreground";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-sunset/30 bg-sunset/5 p-8 text-foreground">
        <CheckCircle2 className="size-7 text-sunset" />
        <div>
          <p className="font-display text-2xl leading-tight">L'aventure commence.</p>
          <p className="mt-2 text-base text-foreground/75">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] size-0 opacity-0"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClass}>
            Nom complet <span className="text-sunset">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Camille Dupont"
            className={cn(inputClass, state.fieldErrors?.name && "border-destructive")}
          />
          {state.fieldErrors?.name ? (
            <p className="text-xs text-destructive">{state.fieldErrors.name}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-sunset">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@entreprise.fr"
            className={cn(inputClass, state.fieldErrors?.email && "border-destructive")}
          />
          {state.fieldErrors?.email ? (
            <p className="text-xs text-destructive">{state.fieldErrors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className={labelClass}>
            Téléphone <span className="text-foreground/40">(optionnel)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="projectType" className={labelClass}>
            Type de projet
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={cn(inputClass, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.5%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem] pr-12")}
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          Votre projet en quelques mots <span className="text-sunset">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Parlez-nous de votre marque, de votre cap, et de ce qui vous freine aujourd'hui…"
          className={cn(inputClass, "resize-y", state.fieldErrors?.message && "border-destructive")}
        />
        {state.fieldErrors?.message ? (
          <p className="text-xs text-destructive">{state.fieldErrors.message}</p>
        ) : null}
      </div>

      {state.status === "error" && state.message ? (
        <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <p>{state.message}</p>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-foreground/55">
          Réponse sous 48&nbsp;h ouvrées.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="group h-12 rounded-full bg-foreground px-6 text-base text-background hover:bg-foreground/90 disabled:opacity-60"
        >
          {pending ? "Envoi en cours…" : "Envoyer le message"}
          {!pending && <Send className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />}
        </Button>
      </div>
    </form>
  );
}
