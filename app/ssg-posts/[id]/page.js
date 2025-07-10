export const revalidate = 60;
export async function generateStaticParams(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
    const posts = await res.json();

    return posts.map(post=>({
        id:post.id.toString()
    }));
}
async function PostDetail ({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;