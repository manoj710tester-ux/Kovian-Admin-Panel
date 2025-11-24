import InvitedMeetings from "../UI/InvitedMeetings/InvitedMeetings";
import Email from "../UI/Email/Email";

const Meeting = () => {
  const handleComposeEmail = () => {
    console.log("Compose Email clicked");
    // Add your compose email logic here
  };

  return (
    <div className="page-container">
      <div className="mt-4">
        <InvitedMeetings />
        <Email title="Emails" onComposeEmail={handleComposeEmail} />
      </div>
    </div>
  );
};

export default Meeting;
