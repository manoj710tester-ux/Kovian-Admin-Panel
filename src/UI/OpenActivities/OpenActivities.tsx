import { useState } from "react";
import "./OpenActivities.scss";

interface Activity {
  id: string;
  text: string;
}

interface OpenActivitiesProps {
  title?: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  onAddNew?: () => void;
  initialActivities?: Activity[];
}

const OpenActivities = ({
  title = "Open Activities",
  children,
  defaultExpanded = true,
  initialActivities = [],
}: OpenActivitiesProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [inputValue, setInputValue] = useState("");

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddActivity = () => {
    if (inputValue.trim()) {
      const newActivity: Activity = {
        id: Date.now().toString(),
        text: inputValue.trim(),
      };
      setActivities([...activities, newActivity]);
      setInputValue("");
    }
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddActivity();
    }
  };

  return (
    <div className="open-activities">
      <div className="open-activities__header" onClick={toggleExpanded}>
        <h3 className="open-activities__title">{title}</h3>

        <button
          className="open-activities__toggle"
          aria-label="Toggle activities"
        >
          <span
            className={`open-activities__icon ${
              isExpanded ? "open-activities__icon--expanded" : ""
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
        <div className="open-activities__content">
          {children || (
            <>
              <div className="open-activities__input-container">
                <input
                  type="text"
                  className="open-activities__input"
                  placeholder="Add a Activity"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="open-activities__add-btn"
                  onClick={handleAddActivity}
                >
                  Add
                </button>
              </div>
              <div className="open-activities__list">
                {activities.length === 0 ? (
                  <div className="open-activities__placeholder">
                    <p>No activities available.</p>
                  </div>
                ) : (
                  activities.map((activity) => (
                    <div key={activity.id} className="open-activities__item">
                      <span className="open-activities__item-text">
                        {activity.text}
                      </span>
                      <button
                        className="open-activities__delete-btn"
                        onClick={() => handleDeleteActivity(activity.id)}
                        aria-label="Delete activity"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 4L12 12M12 4L4 12"
                            stroke="#ef4444"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OpenActivities;
