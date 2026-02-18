import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create test admin user
  const hashedPassword = await bcrypt.hash("johndoe123", 10);
  await prisma.user.upsert({
    where: { email: "john@doe.com" },
    update: {},
    create: {
      email: "john@doe.com",
      password: hashedPassword,
      name: "Admin",
      role: "admin",
    },
  });

  // Create secondary admin user
  const adminPassword = await bcrypt.hash("admin123", 10);
  await prisma.user.upsert({
    where: { email: "admin@lastprompt.com" },
    update: { password: adminPassword },
    create: {
      email: "admin@lastprompt.com",
      password: adminPassword,
      name: "Admin",
      role: "admin",
    },
  });
  console.log("Admin users created");

  // Create default tags
  const defaultTags = [
    { name: "Demo Request", color: "#f97316" },
    { name: "Playtest", color: "#22c55e" },
    { name: "Newsletter", color: "#6366f1" },
    { name: "High Priority", color: "#ef4444" },
    { name: "Lead Magnet", color: "#8b5cf6" },
  ];

  for (const tag of defaultTags) {
    await prisma.tag.upsert({
      where: { name: tag.name },
      update: {},
      create: tag,
    });
  }
  console.log("Default tags created");

  // Create default lead scoring rules
  const scoringRules = [
    { ruleName: "B2B Segment", condition: JSON.stringify({ field: "segment", value: "b2b" }), points: 30 },
    { ruleName: "Has Company", condition: JSON.stringify({ field: "companyName", value: "*" }), points: 20 },
    { ruleName: "C-Level Title", condition: JSON.stringify({ field: "jobTitle", value: "ceo" }), points: 25 },
    { ruleName: "LinkedIn Source", condition: JSON.stringify({ field: "source", value: "linkedin" }), points: 10 },
  ];

  for (const rule of scoringRules) {
    await prisma.leadScore.upsert({
      where: { ruleName: rule.ruleName },
      update: {},
      create: rule,
    });
  }
  console.log("Lead scoring rules created");

  // Create default settings
  const existingSettings = await prisma.settings.findFirst();
  if (!existingSettings) {
    await prisma.settings.create({
      data: {
        dataRetentionDays: 365,
        enableAnalytics: true,
        enableDrip: true,
      },
    });
    console.log("Default settings created");
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });