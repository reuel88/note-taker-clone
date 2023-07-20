import { type FC, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

type NoteEditorProps = {
  onSave: (note: { title: string, content: string }) => void
}

const NoteEditor: FC<NoteEditorProps> = ({ onSave }) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleClick = () => {
    onSave({title, content: code});
    setCode("");
    setTitle("");
  }

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            placeholder="Note title"
            className="input-primary input input-lg w-full font-bold"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
        <CodeMirror
          value={code}
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages })
          ]}
          onChange={value => setCode(value)}
          className="border border-gray-300"
        />
        <div className="card-actions flex justify-end">
          <button
            onClick={handleClick}
            className="btn btn-primary px-5"
            disabled={title.trim().length === 0 || code.trim().length === 0}
          >
            Save
          </button>

        </div>
      </div>

    </div>
  );

};

export default NoteEditor;