import React from "react";
import "./leads.scss";
import LeaderCard from "./LeaderCard";
import RelatedList from "../../UI/RelatedList/RelatedList";
import LeadsInformation from "../../UI/LeadsInformation/LeadsInformation";
import Notes from "../../UI/Notes/Notes";
import Attachments from "../../UI/Attachments/Attachments";
import OpenActivity from "../../UI/OpenActivities/OpenActivities";
import Email from "../../UI/Email/Email";
import Social from "../../UI/Social/Social";
import contact from "../../assets/cont.png";
const Leads: React.FC = () => {
  return (
    <div>
      <LeaderCard />
      <div className="leadcontainer">
        <div className="leadcontainer__1 bg-card-background p-4 rounded-lg">
          <LeadsTitle title="Related Leads" />
          <RelatedList />
        </div>
        <div className="leadcontainer__2 bg-card-background p-4 rounded-lg">
          <LeadsTitle title="Leads Information" />
          <LeadsInformation />
        </div>
      </div>
      <div className="mt-6">
        <Notes />
        <Attachments />
        <OpenActivity />
        <Email />
      </div>
      <div className="leadcontainer mt-6">
        <div className="leadcontainer__1 bg-card-background p-4 rounded-lg">
          <LeadsTitle title="Social" />
          <Social />
        </div>
        <div className="leadcontainer__2 bg-card-background p-4 rounded-lg flex justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={contact}
              alt="contact"
              className="w-10 h-10 object-fit-contain "
            />
            <p className="text-center text-gray-500">
              You connect a profile to find social <br /> interaction for this
              lead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;

const LeadsTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="leadstitle">{title}</h1>
    </div>
  );
};
