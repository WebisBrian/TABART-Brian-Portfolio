import { ratelimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const ip =
      request.headers.get("x-forwarded-for") ??
      request.headers.get("x-real-ip") ??
      "anonymous";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { message: "Trop de messages envoyés. Veuillez réessayer plus tard." },
        { status: 429 },
      );
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    const website = body.website?.trim();

    if (website) {
      return NextResponse.json(
        { message: "Requête invalide." },
        { status: 400 },
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires." },
        { status: 400 },
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { message: "Le nom doit contenir entre 2 et 100 caractères." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "L'adresse email est invalide." },
        { status: 400 },
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { message: "Le message doit contenir entre 10 et 5000 caractères." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "La clé API Resend est manquante." },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      return NextResponse.json(
        { message: "Les variables email du formulaire sont manquantes." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nouveau message portfolio - ${name}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        "",
        "Message :",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { message: "Erreur lors de l'envoi de l'email." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Erreur serveur lors du traitement du formulaire." },
      { status: 500 },
    );
  }
}
