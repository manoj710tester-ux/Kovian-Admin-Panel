import { useState } from "react";
import "./LeadsInformation.scss";

interface LeadInfo {
  label: string;
  value: string;
  isStatus?: boolean;
}

interface LeadsInformationProps {
  title?: string;
  basicFields?: LeadInfo[];
  additionalFields?: LeadInfo[];
}

const LeadsInformation = ({
  title = "Lead Information",
  basicFields = [
    { label: "Lead Owner", value: "Nandha Kumar" },
    { label: "Email", value: "rohan.metha@innovix.com" },
    { label: "Phone", value: "+91 12345 67890" },
    { label: "Mobile Owner", value: "+91 12345 67890" },
    { label: "Lead Status", value: "Completed", isStatus: true },
  ],
  additionalFields = [
    { label: "Company", value: "Innovix Solutions" },
    { label: "Industry", value: "Technology" },
    { label: "Lead Source", value: "Website" },
    { label: "Created Date", value: "Aug 12, 2025" },
    { label: "Last Contact", value: "Aug 15, 2025" },
  ],
}: LeadsInformationProps) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const toggleDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  const displayFields = showMoreDetails
    ? [...basicFields, ...additionalFields]
    : basicFields;

  return (
    <div className="leads-information">
      <div className="leads-information__content">
        <div className="leads-information__fields">
          {displayFields.map((field, index) => (
            <div key={index} className="leads-information__field">
              <span className="leads-information__label">{field.label}:</span>
              <span
                className={`leads-information__value ${
                  field.isStatus ? "leads-information__value--status" : ""
                }`}
              >
                {field.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="leads-information__details-btn"
        onClick={toggleDetails}
      >
        {showMoreDetails ? "Hide Details" : "Details"}
      </button>
    </div>
  );
};

export default LeadsInformation;
