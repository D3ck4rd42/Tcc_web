import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tennis Club Clairefontaine - Villeneuve-sur-Yonne",
  description:
    "Tennis Club Clairefontaine à Villeneuve-sur-Yonne. Découvrez nos installations, cours de tennis, tarifs et rejoignez notre club convivial.",
  keywords: [
    "tennis",
    "club",
    "clairefontaine",
    "villeneuve-sur-yonne",
    "cours de tennis",
    "club de tennis",
  ],
  authors: [{ name: "Tennis Club Clairefontaine" }],
  openGraph: {
    title: "Tennis Club Clairefontaine",
    description:
      "Tennis Club Clairefontaine à Villeneuve-sur-Yonne. Rejoignez notre club!",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
