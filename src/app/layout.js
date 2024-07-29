// Imports
import { Roboto_Mono, League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Variables
const robotoMono = Roboto_Mono({ weight: ["400", "700"], subsets: ["latin"] });
const leagueSpartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Metadata
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
    image: "https://zupimages.net/up/24/31/kceq.png", // URL de l'image à utiliser pour les aperçus
    description:
      "Développez votre présence en ligne avec DevReact Creations, spécialiste en creation de sites web personnalisés utilisant ReactJS et NodeJS.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="ReactJS, NodeJS, Développement Web, Portfolio, DevReact Creations, DevReact Creation, DevReact, site web react, react website"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.image} />

        {/* Structured Data with JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DevReact Creations",
              url: "https://www.devreactcreations.com",
              description:
                "Développez votre présence en ligne avec DevReact Creations, spécialiste en creation de sites web personnalisés utilisant ReactJS et NodeJS.",
              author: {
                "@type": "Person",
                name: "Samya Hussain",
              },
            }),
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
