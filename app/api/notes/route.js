import { notes } from "@/data/notes";

// fetch all notes api
export async function GET() {
    return Response.json(notes);
}
export async function POST(request) {
    const {name,age} = await request.json();
    const newNote = {id:crypto.randomUUID(),name,age};
    notes.push(newNote);
    return Response.json(newNote);
}
