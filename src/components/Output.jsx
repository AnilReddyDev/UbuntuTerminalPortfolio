import React from "react";
import Delay from "./Delay";

export default function Output({ line }) {
  return (
    <>
      {line.cmd === "bio" && (
        <div className="text-xl px-1 gap-1 py-1 text-white flex flex-col break-words font-mono">
          <div className="flex justify-start gap-3 items-center">
            <img src={line.img} alt="img" className="w-20 h-20 rounded-full" />
            <div>
              <p>{line.name}</p>
              <p>{line.age}</p>
            </div>
          </div>
          <p>{line.bio}</p>
          <div>
            <p className="text-blue-500">
              LinkedIn:
              <a
                href={line.linkedin}
                target="_blank"
                className="text-orange-500"
              >
                @i_am_anilreddy
              </a>
            </p>
            <p className="text-blue-500">
              Github:
              <a href={line.github} target="_blank" className="text-orange-500">
                @anilreddydev
              </a>
            </p>
            <p className="text-blue-500">
              X:
              <a href={line.x} target="_blank" className="text-orange-500">
                @i_am_anilreddy
              </a>
            </p>
          </div>
        </div>
      )}
      {line.cmd !== "help" &&
        line.cmd !== "clear" &&
        line.cmd !== "bio" &&
        line.cmd !== "project" &&
        line.cmd !== "resume" &&
        line.cmd !== "skills" && (
          <p className="text-xl text-white break-words font-mono">
            {line.output}
          </p>
        )}
      {line.cmd === "help" && (
        <div className="text-xl text-white flex flex-col  gap-1 break-words font-mono">
          <p>{line.heading}</p>
          <div className="flex gap-4">
            {line.output.map((item, index) => (
              <p
                key={index}
                className={index % 2 === 0 ? "text-blue-500" : "text-white"}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
      {line.cmd === "projects" && (
        <div className="text-xl text-white flex flex-col  break-words font-mono">
          {line.projectinfo.map((item, index) => (
            <div className="py-2">
              <p className="text-blue-500 text-2xl">{item.name}</p>
              <p>{item.desc}</p>
              <div className="flex gap-4">
                <a
                  href={item.live}
                  target="_blank"
                  className="text-orange-500 flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Live
                </a>
                <a
                  href={item.code}
                  target="_blank"
                  className="text-orange-500 flex gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                  Code
                </a>
              </div>
            </div>
          ))}
          <p>
            For more projects visit :{" "}
            <a
              href="http://github.com/anilreddydev"
              target="_blank"
              className="text-orange-500"
            >
              @anilreddydev
            </a>
          </p>
        </div>
      )}
      {line.cmd === "resume" && (
        <div className="text-xl text-white flex flex-col  break-words font-mono">
          <div className="output min-h-16 ">
            <p>Downloading resume.pdf [-------------------]</p>
            <Delay delay={1000}>
              <p className="text-red-500">Download compeleted!</p>
            </Delay>
          </div>
        </div>
      )}
      {line.cmd === "skills" && (
        <div className="text-xl text-white flex flex-col  break-words font-mono">
          {line.skillsList.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              {item} <p className="text-orange-500 animate-skillProgressBar bg-yellow-400 max-w-20 h-5  rounded-lg border-2"></p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
