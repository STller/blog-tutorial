import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { getPosts,getTest,getTestC } from "../../models/post.server";

type LoaderData = {
    // this is a handy way to say: "posts is whatever type getPosts resolves to"
    posts: Awaited<ReturnType<typeof getPosts>>;
    test: { name:string,age:string }[],
    testc: { name:string,age:string }[],
  };

  export const loader = async () => {
    return json<LoaderData>({
      posts: await getPosts(),
      test: await getTest(),
      testc: await getTestC(),
    });
  };

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;

  return (
    <main>
      <h1>Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
