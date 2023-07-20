import { type FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import { RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

type NoteCardProps = {
  note: Note;
  onDelete: () => void
}

const NoteCard: FC<NoteCardProps> = ({note, onDelete}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body px-2">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions px-4 flex justify-end">
          <button className="btn-warning btn px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;