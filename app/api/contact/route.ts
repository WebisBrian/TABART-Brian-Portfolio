import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = body.name?.trim()
    const email = body.email?.trim()
    const message = body.message?.trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires." },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "La clé API Resend est manquante." },
        { status: 500 }
      )
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      return NextResponse.json(
        { message: "Les variables email du formulaire sont manquantes." },
        { status: 500 }
      )
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
    })

    if (error) {
      return NextResponse.json(
        { message: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès." },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { message: "Erreur serveur lors du traitement du formulaire." },
      { status: 500 }
    )
  }
}