import React from "react";

const TabIndexError = () => {
  return (
    <>
      <div>
        <span className="text-red-800 font-bold">
          Errors which will be fixed: Ensures tabindex attribute values are not
          greater than 0
        </span>
      </div>
      <hr className="bg-black w-full border border-black mb-[-20px] mt-[-20px]" />
      <h1>Tabindex Example with Incorrect Values</h1>
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        tabIndex={2}
      >
        Button 1
      </button>
      <input
        type="text"
        tabIndex={2}
        placeholder="Text input with tab index 2"
      />
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        tabIndex={2}
      >
        Button 2
      </button>
    </>
  );
};

export default TabIndexError;
