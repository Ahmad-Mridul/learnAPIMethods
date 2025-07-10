// export async function GET(request, { params }) {

// 	const { id } = params;

// 	// 👇 Fetch all notes from your existing API
// 	const res = await fetch("http://localhost:3000/api/notes", {
// 		cache: "no-store", // prevent stale cache in dev
// 	});

// 	const notes = await res.json();

// 	const note = notes.find((note) => note.id === (id));

// 	if (!note) {
// 		return new Response("Note not found", { status: 404 });
// 	}

// 	return Response.json(note);
// }

// // export async function PUT(request,{params}) {
// // 	const {id} = params;
// // 	const updatedData = await request.json();
// // 	console.log(updatedData);
// // 	const res = (await fetch('http://localhost:3000/api/notes'));
// // 	const notes = await res.json();
// // 	const existingNote = notes.map(note=>note.id===id);
// // 	// console.log(existingNote);
// // 	// const index = notes.findIndex((note) => note.id === id);
// // 	// notes[index] = {...notes[index],...updatedData};
// // 	return Response("OK");
// // }
// export async function PUT(request,{params}) {
// 	const {id} = await params;
// 	const updatedData = await request.json();
// 	const res = await fetch(`http://localhost:3000/api/notes/${id}`);
// 	const allNotesRes = await fetch("http://localhost:3000/api/notes");
// 	let allNotes = await allNotesRes.json();
// 	let existingNote = await res.json();
// 	existingNote.name = updatedData.name;
// 	existingNote.age = updatedData.age;
// 	console.log("previous:",existingNote);
// 	console.log("updated:",updatedData);
// 	allNotes.push(existingNote);
// 	return Response.json(allNotes);
// }


// // export async function PUT(request, { params }) {
// // 	const { id } = params;
// // 	const updatedData = await request.json();

// // 	// fetching all notes
// // 	const res = await fetch('http://localhost:3000/api/notes',{
// // 		cache:"no-store"
// // 	});
// // 	const notes = await res.json();
// // 	// Find the index of the note
// // 	const index = notes.findIndex((note) => note.id === id);

// // 	if (index === -1) {
// // 		return new Response(JSON.stringify({ error: "Note not found" }), { status: 404 });
// // 	}

// // 	// Update the note
// // 	notes[index] = { ...notes[index], ...updatedData };

// // 	console.log("Updated Note:", notes[index]);

// // 	return Response.json(notes[index]);
// // }