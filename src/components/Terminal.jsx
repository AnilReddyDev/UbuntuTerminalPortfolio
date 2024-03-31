import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";
import Output from "./Output";

export default function Terminal({ showTerminal, setShowTerminal }) {
  const [queryData, setQueryData] = useState("");
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [terminalSize, setTerminalSize] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (output.length > 0) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
      inputRef.current.focus();
    }
  }, [output]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  // A function that handles form submission.
  const handleSubmit = () => {
    processCommand(queryData);
    setQueryData("");
  };

  const processCommand = (command) => {
    const newHistory = [...history, command];
    setHistory(newHistory);

    let newOutput;
    switch (command) {
      case "bio":
        newOutput = {
          img: "https://avatars.githubusercontent.com/u/91647551?v=4",
          name: "Konyala Anil Reddy",
          age: "20years",
          linkedin: "https://www.linkedin.com/in/anil-reddy-513866227",
          github: "https://github.com/anilreddydev",
          x: "http://www.x.com/i_am_anilreddy",
          bio:
            "Hi Guys! I am a React web developer, I craft dynamic user interfaces with React and transform ideas into exceptional web experiences using React, HTML, CSS, and JavaScript. With strong problem-solving skills and a dedication to clean, maintainable code.",
          cmd: command,
        };
        break;
      case "help":
        newOutput = {
          output: ["bio", "skills", "resume", "projects", "help", "clear"],
          heading: "List of available commands...",
          cmd: command,
        };
        break;
      case "projects":
        newOutput = {
          projectinfo: [
            {
              name: "Mruspace",
              desc:
                "MruSpace is a web application that allows MRUH students find resources to help them. The application is built with React and TailwindCSS.",
              live: "https://mruspace.in",
              code: "https://github.com/anilreddydev/mruspace",
            },
            {
              name: "SaveUrNotes",
              desc:
                "Save your Notes is a web application that allows users to save notes and tasks. The application is built with React and TailwindCSS.",
              live: "https://saveurnotes.netlify.app",
              code: "https://github.com/AnilReddyDev/MyNotes",
            },
          ],
          cmd: "projects",
        };
        break;
      case "clear":
        return setOutput([]);
      case "resume":
        newOutput = {
          resume: "",
          cmd: command,
        };
        break;
      case "skills":
        newOutput = {
          skillsList: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
          cmd: command,
        };
        break;
      default:
        newOutput = {
          output: 'Command not found. Type "help" for available commands.',
          cmd: command,
        };
        break;
    }

    setOutput([...output, newOutput]);
  };

  return (
    <>
      <div
        className={`${
          terminalSize ? "w-full" : "w-7/12"
        }  transition-all duration-200 ease-in-out  ${
          terminalSize ? "pt-12" : "pt-0"
        } ${
          terminalSize ? "h-full" : "h-auto"
        } ${showTerminal ? "block" : "hidden"}  font-mono h-auto rounded-t-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`}
      >
        <div
          className={`terminalHeader w-full flex justify-between px-3 items-center ${
            terminalSize ? "h-10per" : "h-16"
          } bg-t-head-bg ${
            terminalSize ? "rounded-none" : "rounded-t-xl"
          }  `}
        >
          <button className="bg-t-head-btn p-2 rounded-lg border-2 border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 font-extrabold text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <p className="text-xl font-medium text-white">
            anil@anil-H81M-STX :~${" "}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowTerminal(false)}
              className="bg-t-head-btn w-10 h-10 flex justify-center items-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <button
              onClick={() => setTerminalSize(!terminalSize)}
              className="bg-t-head-btn w-10 h-10 flex justify-center items-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="19"
                height="19"
              >
                <rect
                  width="15"
                  height="17"
                  x="2"
                  y="2"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
            <button
              onClick={() => setShowTerminal(false)}
              className="bg-t-head-btn w-10 h-10 flex justify-center items-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`terminalBodyw-full bg-t-bgc  ${
            terminalSize ? "h-90per" : "h-[480px]"
          } overflow-scroll pl-2 py-2`}
        >
          <p className="text-white  font-extrabold workbench-font text-5xl  py-1">
            WELCOME
          </p>
          <p className="text-xl text-green-400 font-medium pt-1">
            anil@anil-H81M-STX{" "}
            <span className=" text-blue-500">:~$</span>{" "}
            <span className="text-white">help</span>
          </p>
          <p className="text-xl text-white break-words font-mono">
            List of available commands...
          </p>
          <div className="text-xl text-white flex  gap-5 break-words font-mono">
            <p>bio</p>
            <p className=" text-blue-500">skill</p>
            <p>resume</p>
            <p className=" text-blue-500">projects</p>
            <p>clear</p>
            <p className=" text-blue-500">help</p>
          </div>
          {output.map((line, index) => (
            <div key={index}>
              <p className="text-xl text-green-400 font-medium pt-2">
                anil@anil-H81M-STX{" "}
                <span className=" text-blue-500">:~$</span>{" "}
                <span className="text-white">{line.cmd}</span>
              </p>
              <Output line={line} />
            </div>
          ))}
          <div ref={inputRef}></div> {/* Empty div to scroll into */}
          <Input
            queryData={queryData}
            setQueryData={setQueryData}
            handleKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </>
  );
}
