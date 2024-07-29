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
  description:
    "Développez votre présence en ligne avec DevReact Creations, spécialiste en creation de sites web personnalisés utilisant ReactJS et NodeJS.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.devreactcreations.com/",
    site_name: "DevReact Creations",
    title: "DevReact Creations",
    image: "https://zupimages.net/up/24/31/kceq.png",
    description:
      "Développez votre présence en ligne avec DevReact Creations, spécialiste en creation de sites web personnalisés utilisant ReactJS et NodeJS.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="DevReact Creations" />
        <meta
          name="description"
          content="Développez votre présence en ligne avec DevReact Creations, spécialiste en creation de sites web personnalisés utilisant ReactJS et NodeJS."
        />
        <meta
          name="keywords"
          content="ReactJS, NodeJS, Développement Web, Portfolio, DevReact Creations, DevReact Creation, DevReact, site web react, react website"
        />

        <meta property="og:url" content="https://www.devreactcreations.com" />
        <meta
          property="og:image"
          content="https://zupimages.net/viewer.php?id=24/31/kceq.png"
        />
        <meta property="og:type" content="website" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DevReact Creations",
            "url": "https://www.devreactcreations.com",
            "description": "Obtenez un site web qui vous ressemble !",
            "author": {
              "@type": "Person",
              "name": "Samya Hussain"
            }
          }
          `,
          }}
        />
      </head>
      <body className={`${robotoMono.className} ${leagueSpartan.className}`}>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
