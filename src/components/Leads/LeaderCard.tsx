import "./LeaderCard.scss";
import Button from "../../UI/Button/Button";

interface LeaderCardProps {
  profileImage?: string;
  title?: string;
  company?: string;
  onSendEmail?: () => void;
  onConvert?: () => void;
}

const LeaderCard = ({
  profileImage,
  title = "Total Leads",
  company = "Oh My Goodknits Inc",
  onSendEmail,
  onConvert,
}: LeaderCardProps) => {
  return (
    <div className="leader-card">
      <div className="leader-card__content">
        <div className="leader-card__profile">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="leader-card__profile-image"
            />
          ) : (
            <div className="leader-card__profile-placeholder">
              <span>JD</span>
            </div>
          )}
        </div>
        <div className="leader-card__info">
          <h3 className="leader-card__title">{title}</h3>
          <p className="leader-card__company">{company}</p>
        </div>
      </div>
      <div className="leader-card__actions">
        <Button variant="secondary" onClick={onSendEmail}>
          Send Email
        </Button>
        <Button variant="secondary" onClick={onConvert}>
          Convert
        </Button>
      </div>
    </div>
  );
};

export default LeaderCard;
