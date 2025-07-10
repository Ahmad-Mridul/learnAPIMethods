import Link from "next/link";

export default async function SSRPosts() {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=20"
	);
	const posts = await res.json();
	return (
		<div className="p-6 text-center space-y-5">
			<h2>All posts</h2>
		</div>
	);
}
