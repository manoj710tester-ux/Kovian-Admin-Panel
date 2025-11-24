import "./InvitedMeetings.scss";

type InvitedMeetingsProps = {
  title?: string;
};

const InvitedMeetings = ({
  title = "Invited Meetings",
}: InvitedMeetingsProps) => {
  return (
    <div className="invited-meetings">
      <h3 className="invited-meetings__title">{title}</h3>
    </div>
  );
};

export default InvitedMeetings;
