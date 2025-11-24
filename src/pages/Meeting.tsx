import InvitedMeetings from "../UI/InvitedMeetings/InvitedMeetings";
import Email from "../UI/Email/Email";

const Meeting = () => {
  const handleComposeEmail = () => {
    console.log("Compose Email clicked");
    // Add your compose email logic here
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Meeting</h1>
      <p className="page-description">Manage your meetings here</p>
      <div className="mt-4">
        <InvitedMeetings onComposeEmail={handleComposeEmail} />
        <Email title="Emails" onComposeEmail={handleComposeEmail} />
      </div>
    </div>
  );
};

export default Meeting;



