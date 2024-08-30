import React, { useEffect } from "react";
import { markdownContent } from "./initial";

const TextArea = ({ text, setText }) => {
  useEffect(() => {
    setText(markdownContent);
  }, []);
  return (
    <div className="editor">
      <h4 className="pl-3 text-xl font-bold py-2 bg-violet-300  w-full">
        Editor
      </h4>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        id="editor"
        className="w-full  px-1 py-2 sm:px-3 border-2 min-h-72 outline-none"
        value={text}
      ></textarea>
    </div>
  );
};

export default TextArea;
