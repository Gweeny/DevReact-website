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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.devreactcreations.com/",
    site_name: "DevReact Creations",
    title: "DevReact Creations",
    description: "Obtenez un site web qui vous ressemble !",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Obtenez un site web qui vous ressemble !"
        />
        <meta
          name="keywords"
          content="ReactJS, NodeJS, Développement Web, Portfolio, DevReact Creations"
        />
        <meta property="og:title" content="DevReact Creations" />
        <meta
          property="og:description"
          content="Obtenez un site web qui vous ressemble !"
        />
        <meta property="og:url" content="https://www.devreactcreations.com" />
        <meta
          property="og:image"
          content="https://www.devreactcreations.com/images/preview.jpg"
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
