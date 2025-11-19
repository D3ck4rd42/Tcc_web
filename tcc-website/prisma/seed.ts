import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seeding...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@tennisclubclairefontaine.fr" },
    update: {},
    create: {
      email: "admin@tennisclubclairefontaine.fr",
      password: hashedPassword,
      name: "Administrateur TCC",
      role: "ADMIN",
    },
  });

  console.log("Created admin user:", admin.email);

  // Create default pages
  const pages = [
    {
      slug: "home",
      title: "Accueil",
      content: "Bienvenue au Tennis Club Clairefontaine!",
      metaTitle: "Tennis Club Clairefontaine - Accueil",
      metaDescription:
        "Bienvenue au Tennis Club Clairefontaine à Villeneuve-sur-Yonne",
      published: true,
      order: 1,
    },
    {
      slug: "about",
      title: "À propos",
      content: "Le Tennis Club Clairefontaine est un club convivial...",
      metaTitle: "À propos - Tennis Club Clairefontaine",
      metaDescription: "Découvrez l'histoire du Tennis Club Clairefontaine",
      published: true,
      order: 2,
    },
    {
      slug: "facilities",
      title: "Installations",
      content:
        "Notre club dispose d'un court couvert et de courts extérieurs...",
      metaTitle: "Nos installations - Tennis Club Clairefontaine",
      metaDescription:
        "Découvrez les installations du Tennis Club Clairefontaine",
      published: true,
      order: 3,
    },
    {
      slug: "coaching",
      title: "Cours de tennis",
      content:
        "Profitez de cours de tennis avec notre entraîneur jeune diplômé 4/6...",
      metaTitle: "Cours de tennis - Tennis Club Clairefontaine",
      metaDescription: "Cours de tennis pour tous niveaux",
      published: true,
      order: 4,
    },
    {
      slug: "pricing",
      title: "Tarifs",
      content: "Découvrez nos tarifs d'adhésion et de cours...",
      metaTitle: "Tarifs - Tennis Club Clairefontaine",
      metaDescription: "Tarifs d'adhésion et de cours du club",
      published: true,
      order: 5,
    },
  ];

  for (const page of pages) {
    const created = await prisma.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: page,
    });
    console.log("Created page:", created.slug);
  }

  console.log("Database seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
