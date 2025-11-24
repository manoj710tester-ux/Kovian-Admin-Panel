import "./InvitedMeetings.scss";

interface InvitedMeetingsProps {
  title?: string;
  onComposeEmail?: () => void;
}

const InvitedMeetings = ({
  title = "Invited Meetings",
  onComposeEmail,
}: InvitedMeetingsProps) => {
  return (
    <div className="invited-meetings">
      <h3 className="invited-meetings__title">{title}</h3>
      <button
        className="invited-meetings__compose"
        onClick={onComposeEmail}
      >
        Compose Email
      </button>
    </div>
  );
};

export default InvitedMeetings;




