import React from "react";

const Card1 = ({ firsttext, secondtext }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <div className="text-navtext text-center text-2xl font-semibold">
        {firsttext}
      </div>
      <div className="text-center text-xl mt-2">{secondtext}</div>
    </div>
  );
};

export default Card1;
