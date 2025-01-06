import React from "react";

const PostDeatisl = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );

  const post = await response.json();

  return (
    <div className="p-4 bg-teal-900 my-10">
      <h1 className="text-xl font-bold my-2"> {post.title} </h1>
      <hr className="w-full py-2" />
      <p className="text-gray-300 "> {post.body} </p>
    </div>
  );
};
export default PostDeatisl;
