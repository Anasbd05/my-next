import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Articles</h1>
      

      <Link href="/articles/featured">
        <button className="text-xl bg-teal-400 py-1 px-5 rounded-lg">
          Go to Featured
        </button>
      </Link>
    </div>
  );
};

export default page;
