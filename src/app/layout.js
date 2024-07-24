//Imports :
import { Roboto_Mono, League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

//variables :
const robotoMono = Roboto_Mono({ weight: ["400", "700"], subsets: ["latin"] });
const leagueSpartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DevReact Creations",
  description: "Obtenez un site web qui vous ressemble !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${robotoMono.className} ${leagueSpartan.className}`}>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
