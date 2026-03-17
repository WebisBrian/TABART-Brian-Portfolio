"use client";

import { FormEvent, useRef, useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Spotlight } from "@/components/ui/spotlight-new";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};


const socialLinks = [
  {
    href: "mailto:brian.tabart@example.com", // TODO: update email address
    label: "brian.tabart@example.com",
    icon: Mail,
    external: false,
  },
  {
    href: "https://github.com/WebisBrian",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://linkedin.com/in/brian-tabart",
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      <Spotlight />
      {/* Top fade — smooth transition from previous section */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-background to-transparent"
        aria-hidden="true"
      />
      <SiteContainer className="relative z-10">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

            {/* Left column */}
            <motion.div variants={fadeUp} className="space-y-6">

              {/* Availability indicator */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Disponible pour de nouvelles opportunités
              </div>

              <SectionHeading
                eyebrow="Contact"
                title="Entrons en contact"
                description="Si vous souhaitez échanger à propos d'un projet, d'une opportunité ou simplement discuter développement, vous pouvez m'écrire ici."
              />

              <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                Je m&apos;intéresse particulièrement au développement backend, à la
                qualité logicielle, à l&apos;architecture et aux projets ayant une
                vraie utilité concrète.
              </p>

              {/* Social links as pill buttons */}
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ href, label, icon: Icon, external }) => (
                  <a
                    key={href}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex w-fit items-center gap-3 rounded-full border px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:border-foreground/30 hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right column — form or success state */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center gap-5 rounded-2xl border bg-card p-12 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle className="h-7 w-7 text-green-500" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Message envoyé !</p>
                    <p className="text-sm text-muted-foreground">
                      Merci pour votre message. Je vous répondrai dans les meilleurs délais.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setStatus("idle")}
                  >
                    Envoyer un autre message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-2xl border border-border/50 bg-card p-6 sm:p-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nom <span className="text-muted-foreground">*</span>
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
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email <span className="text-muted-foreground">*</span>
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

                  {/* Honeypot — hidden from real users, catches bots */}
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
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message <span className="text-muted-foreground">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre message..."
                      value={form.message}
                      onChange={handleChange}
                      className="min-h-40 max-h-75 w-full resize-y overflow-y-auto break-words whitespace-pre-wrap"
                    />
                  </div>

                  {feedbackMessage && (
                    <p className={status === "error" ? "text-sm text-red-500" : "text-sm text-green-600"}>
                      {feedbackMessage}
                    </p>
                  )}

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-flex"
                        >
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </motion.span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}
