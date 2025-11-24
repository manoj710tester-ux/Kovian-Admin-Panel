import { useState } from "react";
import "./Attachments.scss";

interface AttachmentsProps {
  title?: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
}

const Attachments = ({
  title = "Attachments",
  children,
  defaultExpanded = true,
}: AttachmentsProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="attachments">
      <div className="attachments__header" onClick={toggleExpanded}>
        <h3 className="attachments__title">{title}</h3>
        <button className="attachments__toggle" aria-label="Toggle attachments">
          <span
            className={`attachments__icon ${
              isExpanded ? "attachments__icon--expanded" : ""
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
        <div className="attachments__content">
          {children || (
            <div className="attachments__placeholder">
              <p>No attachments available.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Attachments;
