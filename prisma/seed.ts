import { PrismaClient } from "@prisma/client";

const seedData = [
 {
   title: "Hello",
   description: "john@gmail.com",
   publishedNote: "2023-05-19T23:11:11.321Z",
   author: "ayman"
 }
];

async function seed() {
 const prisma = new PrismaClient();

 try {
   for (const post of seedData) {
     await prisma.post.create({
       data: post,
     });
   }

   console.log("Seed data has been inserted successfully.");
 } catch (error) {
   console.error("Error seeding data:", error);
 } finally {
   await prisma.$disconnect();
 }
}

seed();