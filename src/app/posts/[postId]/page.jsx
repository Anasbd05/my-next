import PostDeatisl from "@/app/components/PostDeatisl";
import React, { Suspense } from "react";

const page = async ({ params }) => {
  const postId = params.postId;
  return (
    <div>
      <h1>Post details</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <PostDeatisl postId={postId} />
      </Suspense>
    </div>
  );
};

export default page;
