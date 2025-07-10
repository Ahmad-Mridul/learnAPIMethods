"use client";
import { useEffect, useState } from "react";

export default function ClientPosts() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<div className="p-10 space-y-5">
            <h1>CLIENT SIDE RENDERING</h1>
			{posts.map((post, idx) => (
				<div className="border rounded" key={idx}>
					<h1 className="font-bold">{post.title}</h1>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}
