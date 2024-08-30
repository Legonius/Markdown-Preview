import React, { useMemo } from "react";
import { marked } from "marked";
import hljs from "highlight.js";

marked.setOptions({
  breaks: true,
  gfm: true,
  mangle: false,
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

const Previewer = ({ text }) => {
  const renderer = useMemo(() => new marked.Renderer(), []);
  return (
    <div className="preview">
      <h4 className="">Previewer</h4>
      <div
        id="preview"
        className=""
        dangerouslySetInnerHTML={{
          __html: marked(text, { renderer: renderer }),
        }}
      />
    </div>
  );
};

export default Previewer;
