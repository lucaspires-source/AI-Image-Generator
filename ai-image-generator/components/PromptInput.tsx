'use client'

import { useState } from "react";

function PromptInput() {

  const [input, setInput] = useState('')

  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 rounded-md  lg:divide-x">
        <textarea placeholder="Enter a propmpt" className="flex-1 p-4 outline-none rounded-md" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit" disabled={!input} className={`p-4 ${input ? 'bg-violet-500 text-white transtion-colors duration-200' : 'text-gray-300 cursor-not-allowed'}`}>Generate</button>
        <button
          type="button"
          className="p-4 bg-violet-400 text-white transtion-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-violet-500  border-none transtion-colors duration-200 rounded-b-md font-bold md:rounded-r-md md:rounded-bl-none"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;
