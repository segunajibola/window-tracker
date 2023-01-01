import React from "react";
import collapsibleData from "./collapsibleData";

const Collapsible = () => {
  return collapsibleData.map((collapsible) => (
    <div className="bg-slate-100 text-gray-600">
      <div className="container mx-auto py-4 px-4">
        <details className="bg-white shadow rounded group mb-2">
          <summary
            className="list-none flex flex-wrap items-center cursor-pointer
    focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
    rounded group-open:rounded-b-none group-open:z-[1] relative
    "
          >
            <h3 className="flex flex-1 p-3 font-semibold">{collapsible.name}</h3>
            <div className="flex w-10 items-center justify-center">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
            </div>
          </summary>
          <div className="p-4 border-t-2 w-[90%] mx-auto">
            <p>{collapsible.paragraph}</p>
          </div>
        </details>
      </div>
    </div>
  ));
};

export default Collapsible;
