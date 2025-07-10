import React from 'react';
export const dynamic = "force-dynamic"; 
async function SSRPosts () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20",{
        cache:"no-cache"
    });
    const posts = await res.json();
    return (
        <div className="p-10 space-y-5">
            <h1>SERVER SIDE RENDERING</h1>
			{posts.map((post, idx) => (
				<div className="border rounded" key={idx}>
					<h1 className="font-bold">{post.title}</h1>
					<p>{post.body}</p>
				</div>
			))}
		</div>
    );
};

export default SSRPosts;