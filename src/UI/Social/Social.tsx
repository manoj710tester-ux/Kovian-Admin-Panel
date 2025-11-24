import "./Social.scss";
import instagram from "../../assets/social/instagram.png";
import linkedin from "../../assets/social/linkedin.png";
import whatsapp from "../../assets/social/whatsapp.png";
import x from "../../assets/social/x.png";

const Social = () => {
  const socialList = [
    {
      id: 1,
      name: "Instagram",
      icon: instagram,
    },
    {
      id: 2,
      name: "Linkedin",
      icon: linkedin,
    },
    {
      id: 3,
      name: "Whatsapp",
      icon: whatsapp,
    },
    {
      id: 4,
      name: "Twitter",
      icon: x,
    },
  ];
  return (
    <div className="social">
      {socialList.map((item) => (
        <div className="social__item" key={item.id}>
          <div className="social__item__image">
            <img src={item.icon} alt={item.name} />
          </div>
          <div className="social__item__content">
            <h3 className="social__item__title">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Social;
