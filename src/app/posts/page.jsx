// "use client";
import React from "react";
import Todo from "../components/Todo";
import Link from "next/link";

const page = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 120,
      },
    }
  );

  const posts = await response.json();

  const PostJsx = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <div className="p-4 bg-teal-900 my-10">
          <h1 className="text-xl font-bold my-2">
            {" "}
            {post.title}{" "}
          </h1>
          <p className="text-gray-300 "> {post.body} </p>
        </div>
      </Link>
    );
  });

  console.log(posts);
  return (
    <div>
      <h1>POSTS PAGE</h1>
      <div className="flex justify-center items-center flex-col">
        {PostJsx}
      </div>
    </div>
  );
};

export default page;
