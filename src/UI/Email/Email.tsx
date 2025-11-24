import { useState } from "react";
import "./Email.scss";
import Button from "../Button/Button";

interface EmailProps {
  title?: string;
  onComposeEmail?: () => void;
}

type TabType = "Mail" | "Draft" | "Scheduled";

const Email = ({ title = "Emails", onComposeEmail }: EmailProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("Mail");

  const tabs: TabType[] = ["Mail", "Draft", "Scheduled"];

  return (
    <div className="email">
      <div className="email__header">
        <h2 className="email__title">{title}</h2>
        <div className="max-[768px]:hidden">
          <Button
            variant="secondary"
            size="sm"
            onClick={onComposeEmail}
            className="email__compose-btn "
          >
            Compose Email
          </Button>
        </div>
      </div>
      <div className="email__tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`email__tab ${
              activeTab === tab ? "email__tab--active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="email__content">
        <div className="email__empty">
          <p className="email__empty-text">No records found</p>
        </div>
      </div>
      <div className="min-[768px]:hidden max-[768px]:flex max-[768px]:justify-end max-[768px]:items-end mt-4">
        <Button
          variant="secondary"
          size="sm"
          onClick={onComposeEmail}
          className="email__compose-btn "
        >
          Compose Email
        </Button>
      </div>
    </div>
  );
};

export default Email;

