"use client";

import { FormEvent, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";
import { Separator } from "../ui/separator";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("idle");
    setFeedbackMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      setStatus("success");
      setFeedbackMessage("Votre message a bien été envoyé.");
      setForm({
        name: "",
        email: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Separator />

      <Section id="contact" className="py-20">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Entrons en contact"
                description="Si vous souhaitez échanger à propos d’un projet, d’une opportunité ou simplement discuter développement, vous pouvez m’écrire ici."
              />

              <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                Je m’intéresse particulièrement au développement backend, à la
                qualité logicielle, à l’architecture et aux projets ayant une
                vraie utilité concrète.
              </p>

              <div className="space-y-3 text-sm text-muted-foreground">
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>your-email@example.com</span>
                </a>

                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <Input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre message..."
                  value={form.message}
                  onChange={handleChange}
                  className="min-h-[160px] max-h-[300px] w-full resize-y overflow-y-auto break-all whitespace-pre-wrap"
                />
              </div>

              {feedbackMessage ? (
                <p
                  className={
                    status === "success"
                      ? "text-sm text-green-600"
                      : "text-sm text-red-500"
                  }
                >
                  {feedbackMessage}
                </p>
              ) : null}

              <Button
                type="submit"
                className="cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </SiteContainer>
      </Section>
    </>
  );
}
