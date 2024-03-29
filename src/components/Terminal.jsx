import React, { useState } from "react";
import Input from "./Input";

export default function Terminal() {
  return (
    <div className="w-7/12 font-mono h-auto rounded-t-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <div className="terminalHeader w-full flex justify-center items-center h-16 bg-t-head-bg rounded-t-xl  ">
        <p className="text-xl font-medium text-white">anil@anil-H81M-STX :~$ </p>
      </div>
      <div className="terminalBodyw-full bg-t-bgc h-[450px] overflow-scroll pl-2 py-1">
        <p className="text-white  font-extrabold workbench-font text-5xl  py-1">
          WELCOME
        </p>
        <p className="text-xl text-green-400 font-medium">
          anil@anil-H81M-STX <span className=" text-blue-500">:~$</span>{" "}
          <span className="text-white">help</span>
        </p>
        <div className="text-xl text-white flex gap-5 break-words font-mono">
          <p>bio</p>
          <p className=" text-blue-500">skill</p>
          <p>Resume</p>
          <p className=" text-blue-500">Project</p>
          <p>Contact</p>
        </div>
        <Input />
      </div>
    </div>
  );
}
