import { postType } from "../lib/types";
//import type from my types page

export default async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <>
      <h1>Posts Page</h1>
      {data.map((post: postType) => (
        <div key={post.id}>
          <h1 className="text-sky-600">{post.title}</h1>
          <h2 className="text-emerald-300">{post.body}</h2>
        </div>
      ))}
    </>
  );
}
