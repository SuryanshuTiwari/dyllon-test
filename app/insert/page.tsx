"use client";

import React, { FormEvent, useEffect, useState } from "react";
import {
  deleteFileAction,
  getFilesForHost,
  writeFileAction,
} from "../actions/serverAction";

const Insert = () => {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    async function fetchFiles() {
      const host = window.location.host;

      const fixedHost = host.replace(":", "_");
      console.log("fixed host??", fixedHost);
      const fetchedFiles = await getFilesForHost(fixedHost);
      console.log("what is fetchedFiles", fetchedFiles);
      setFiles(fetchedFiles);
    }
    fetchFiles();
  }, []);

  const deleteFile = async (file: string) => {
    deleteFileAction(file);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const host = window.location.host;
    console.log("what is host??", host);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const inputValue = formData.get("myInput") as string;
    if (inputValue) {
      await writeFileAction(inputValue, host); // Call the server action
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
        <div className="flex justify-center items-center space-x-4">
          <label htmlFor="" className="text-black text-2xl">
            Insert Script url
          </label>
          <input
            name="myInput"
            className="text-black w-[500px] border border-black p-3 rounded-lg"
            type="url"
          />
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Test button
          </button>
        </div>
        <div className="text-black">
          <h2>Files</h2>
          <ul>
            {files.map((file) => (
              <li key={file}>
                {file}
                <button onClick={() => deleteFile(file)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default Insert;
