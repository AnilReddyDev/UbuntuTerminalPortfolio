import React, { useState } from "react";

export default function Input() {
  const [queryData, setQueryData] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // A function that handles form submission.
  const handleSubmit = () => {
    console.log("Entered value:", queryData);
    
    setQueryData("");
  };

  return (
    <label htmlFor="query" className="text-xl flex text-green-400 font-medium">
      anil@anil-H81M-STX <span className=" text-blue-500">&nbsp;:~$</span>
      <div className="relative">
        <input
          type="text"
          name="query"
          placeholder="Try bio, skill, Resume, Project, Contact"
          value={queryData}
          onChange={(e) => setQueryData(e.target.value)}
          onKeyDown={handleKeyDown}
          className=" rounded-md outline-none bg-transparent text-white pl-2 placeholder:text-slate-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <div className=" w-[20px] h-full  animate-ping anima"></div>
        </div>
      </div>
    </label>
  );
}
