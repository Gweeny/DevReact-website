import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nom, email, message, prenom } = await req.json();

    // Log received data
    console.log("Received data:", { nom, email, message, prenom });

    if (!nom || !email || !message || !prenom) {
      console.log("Validation failed: Missing fields");
      return NextResponse.json(
        { message: "Tous les champs doivent être remplis" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      console.log("Validation failed: Invalid email");
      return NextResponse.json(
        { message: "Adresse e-mail invalide" },
        { status: 400 }
      );
    }

    let transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `Nouveau message de : ${prenom} ${nom} depuis le site web DevReact Creation`,
      html: `    
        <html>
          <body>
            <h1 style="color:#e48162; background-color:#4d243d;display: flex;justify-content: center;">Nouveau message de : ${nom}</h1>
            <p style="font-size: 14px;">Email de l'expéditeur : ${email}</p>
            <p style="font-size: 14px;">Nom de famille de l'expéditeur : ${nom}</p>
            <p style="font-size: 14px;">Prénom de l'expéditeur : ${prenom}</p>
            <p style="font-size: 12px;">Message : </p>
            <p style="font-size: 10px;">${message}</p>
          </body>
        </html>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { message: "Échec de l'envoi de l'email", error: error.message },
      { status: 500 }
    );
  }
}

function validateEmail(email) {
  return /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/.test(email);
}
