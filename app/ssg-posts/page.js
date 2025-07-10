import Link from "next/link";

export const revalidate = 60;
export default async function SSGPosts() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
	const posts = await res.json();
	return (
		<div className="p-10 space-y-5">
            <h1>SERVER SIDE GENERATION</h1>
			{posts.map((post, idx) => (
				<Link href={`/ssg-posts/${post.id}`} className="border rounded" key={idx}>
					<h1 className="font-bold">{post.title}</h1>
					<p>{post.body}</p>
				</Link>
			))}
		</div>
	);
}
