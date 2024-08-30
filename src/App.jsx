import { useState } from "react";
import Previewer from "./components/Previewer";
import TextArea from "./components/TextArea";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <h1>Markdown Previewer Project</h1>
      <TextArea text={text} setText={setText} />
      <Previewer text={text} />
    </div>
  );
}

export default App;
