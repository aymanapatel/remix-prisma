import { PrismaClient } from "@prisma/client";
// import type { ContactListInterface } from "~/routes/contacts.enum";

const db = new PrismaClient();

export const getAllPost = async () => {
 return await db.post.findMany();
};                                                    
