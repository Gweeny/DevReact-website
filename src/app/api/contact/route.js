import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { nom, email, message, prenom } = await req.json();

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

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
