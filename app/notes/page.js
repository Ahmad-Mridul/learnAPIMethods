"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
const Notes = () => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/api/notes")
			.then((res) => res.json())
			.then((data) => setNotes(data));
	}, []);
	console.log(notes);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const age = form.age.value;
		const newNote = {
			name,
			age,
		};
		fetch("http://localhost:3000/api/notes", {
			method: "POST",
			headers: {
				"Content-Type": "application.json",
			},
			body: JSON.stringify(newNote),
		});
		setNotes([...notes, newNote]);
		form.reset();
	};
	return (
		<div className="">
			<div className="text-center mx-auto min-h-screen flex justify-center items-center">
				<div className="w-2/4">
					<h2>Add Note</h2>
					<form className="space-y-3" onSubmit={handleSubmit}>
						<div className="flex items-center gap-4">
							<label className="w-20">Name:</label>
							<input
								required
								type="text"
								name="name"
								placeholder="Name"
								className="border border-gray-500 px-2 py-1 rounded flex-1"
							/>
						</div>
						<div className="flex items-center gap-4">
							<label className="w-20">Age:</label>
							<input
								required
								type="number"
								name="age"
								placeholder="Age"
								className="border border-gray-500 px-2 py-1 rounded flex-1"
							/>
						</div>
						<button className="btn btn-outline btn-primary w-50">
							Add
						</button>
					</form>
				</div>
			</div>
			<div className="border border-red-500 text-center h-100">
				<div className="flex items-center justify-center">
					{notes?.map((note, idx) => (
						<div key={idx} className=" flex gap-5 items-center">
							<p>{note?.name}</p>
							<Link href={`/notes/${note?.id}`} className="btn"><FaEdit /></Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Notes;
