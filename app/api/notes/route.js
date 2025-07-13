import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
	const notes = await prisma.note.findMany();
	return Response.json(notes);
}
    