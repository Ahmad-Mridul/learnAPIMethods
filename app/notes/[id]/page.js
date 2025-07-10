"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function SingleNote() {
	const { id } = useParams();
	const [note, setNote] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:3000/api/notes/${id}`)
			.then((res) => res.json())
			.then((data) => setNote(data));
	},[id]);
	const handleEdit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const age = form.age.value;
		const updatedNote = {
			name,
			age
		}
		fetch(`http://localhost:3000/api/notes/${id}`,{
			method:"PUT",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(updatedNote)
		})
		// setNote(updatedNote);
	}
	return (
		<div className="">
			<div className="text-center mx-auto min-h-screen flex justify-center items-center">
				<div className="w-2/4">
					<h2>Edit: {note.name}</h2>
					<form className="space-y-3" onSubmit={handleEdit}>
						<div className="flex items-center gap-4">
							<label className="w-20">Name:</label>
							<input
								required
								type="text"
								name="name"
								placeholder={note.name}
								className="border border-gray-500 px-2 py-1 rounded flex-1"
							/>
						</div>
						<div className="flex items-center gap-4">
							<label className="w-20">Age:</label>
							<input
								required
								type="number"
								name="age"
								placeholder={note.age}
								className="border border-gray-500 px-2 py-1 rounded flex-1"
							/>
						</div>
						<button className="btn btn-outline btn-primary w-50">
							Update
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SingleNote;
