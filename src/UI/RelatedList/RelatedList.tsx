import "./RelatedList.scss";
import notesIcon from "../../assets/related-list/notes.png";
import attachmentIcon from "../../assets/related-list/attachment.png";
import openActivityIcon from "../../assets/related-list/open-activity.png";
import closeActivityIcon from "../../assets/related-list/close-activity.png";
import mailIcon from "../../assets/related-list/mail.png";

const RelatedList = () => {
  const relatedList = [
    {
      id: 1,
      title: "Notes",
      icon: notesIcon,
    },

    {
      id: 2,
      title: "Attachment",
      icon: attachmentIcon,
    },

    {
      id: 3,
      title: "Open Activity",
      icon: openActivityIcon,
    },
    {
      id: 4,
      title: "Close Activity",
      icon: closeActivityIcon,
    },
    {
      id: 5,
      title: "Mail",
      icon: mailIcon,
    },
  ];
  return (
    <div className="related__list">
      {relatedList.map((item) => (
        <div className="related__list__item" key={item.id}>
          <div className="related__list__item__image">
            <img src={item.icon} alt={item.title} />
          </div>
          <div className="related__list__item__content">
            <h3 className="related__list__item__title">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RelatedList;
