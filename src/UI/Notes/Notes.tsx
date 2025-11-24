import { useState } from "react";
import "./Notes.scss";

interface NotesProps {
  title?: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
}

const Notes = ({
  title = "Notes",
  children,
  defaultExpanded = true,
}: NotesProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="notes">
      <div className="notes__header" onClick={toggleExpanded}>
        <h3 className="notes__title">{title}</h3>
        <button className="notes__toggle" aria-label="Toggle notes">
          <span
            className={`notes__icon ${
              isExpanded ? "notes__icon--expanded" : ""
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="8"
                x2="14"
                y2="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {!isExpanded && (
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </span>
        </button>
      </div>
      {isExpanded && (
        <div className="notes__content">
          {children || (
            <div className="notes__placeholder">
              <p>No notes available.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notes;
