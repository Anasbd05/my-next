import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Sapiente, consequatur.
      </h1>
      <h1 className="text-4xl"> {params.title} </h1>
    </div>
  );
};

export default page;
