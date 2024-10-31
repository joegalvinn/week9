import { paramsType } from "@/app/lib/types";

export default async function IdPage({ params }: paramsType) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await result.json();
  return (
    <>
      <h1>Post number {params.id}</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
}
