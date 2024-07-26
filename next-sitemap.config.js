/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.devreactcreations.com", // Remplacez par votre URL de site
  generateRobotsTxt: true, // Génère également un robots.txt
  sitemapSize: 5000, // Taille maximale de votre sitemap
  outDir: "./public", // Dossier de sortie pour les fichiers générés
};
