import "./navigation.scss";
import { Link, useLocation } from "react-router-dom";
// dashboard
import dashboardNoActive from "../../assets/nav-icon/dashboard-no-active.png";
import dashboardActive from "../../assets/nav-icon/dashboard-active.png";
// lead
import leadNoActive from "../../assets/nav-icon/lead-no-active.png";
import leadActive from "../../assets/nav-icon/lead-active.png";
// contact
import contactNoActive from "../../assets/nav-icon/con-no-active.png";
import contactActive from "../../assets/nav-icon/con-active.png";
// deal
import dealNoActive from "../../assets/nav-icon/deal-no-active.png";
import dealActive from "../../assets/nav-icon/deal-active.png";
// task
import taskNoActive from "../../assets/nav-icon/task-no-active.png";
import taskActive from "../../assets/nav-icon/task-active.png";
// doc
import docNoActive from "../../assets/nav-icon/doc-no-active.png";
import docActive from "../../assets/nav-icon/doc-active.png";
// pro
import proNoActive from "../../assets/nav-icon/pro-no-active.png";
import proActive from "../../assets/nav-icon/pro-active.png";
// meeting
import meetingNoActive from "../../assets/nav-icon/meeting-no-active.png";
import meetingActive from "../../assets/nav-icon/meeting-active.png";
// setting
import settingNoActive from "../../assets/nav-icon/setting-no-active.png";
import settingActive from "../../assets/nav-icon/setting-active.png";


const Navigation = () => {
  const location = useLocation();
  // Dashboard with grid icon (2x4 grid - 8 squares: 2 columns, 4 rows)

  const menuItems = [
    {
      path: "/dashboard",
      icon: dashboardNoActive,
      activeIcon: dashboardActive,
      label: "DashBoard",
    },
    {
      path: "/leads",
      icon: leadNoActive,
      activeIcon: leadActive,
      label: "Leads",
    },

    {
      path: "/contacts",
      icon: contactNoActive,
      activeIcon: contactActive,
      label: "Contacts",
    },
    {
      path: "/deals",
      icon: dealNoActive,
      activeIcon: dealActive,     
      label: "Deals",
    },
    {
      path: "/task",
      icon: taskNoActive,
      activeIcon: taskActive,  
      label: "Task",
    },
    {
      path: "/documents",
      icon: docNoActive,
      activeIcon: docActive,
      label: "Documents",
    },
    {
      path: "/projects",
      icon: proNoActive,
      activeIcon: proActive,
      label: "Projects",
    },
    {
      path: "/meeting",
      icon: meetingNoActive,
      activeIcon: meetingActive,
      label: "Meeting",
    },
    {
      path: "/settings",
      icon: settingNoActive,
      activeIcon: settingActive,
      label: "Settings",
    },
  ];

  const isDashboardActive =
    location.pathname === "/" || location.pathname === "/dashboard";

  return (
    <nav className="navigation">
      {/* Dashboard - Special Active Item */}
      {/* <div className="navigation__dashboard">
        <Link
          to="/dashboard"
          className={`navigation__dashboard-link ${
            isDashboardActive ? "navigation__dashboard-link--active" : ""
          }`}
        >
          <span className="navigation__dashboard-icon">{dashboardIcon}</span>
          <span className="navigation__dashboard-label">DashBoard</span>
        </Link>
      </div> */}

      {/* Other Menu Items */}
      <ul className="navigation__menu">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const iconSrc =
            isActive && item.activeIcon ? item.activeIcon : item.icon;
          return (
            <li key={index} className="navigation__item">
              <Link
                to={item.path}
                className={`navigation__link ${
                  isActive ? "navigation__link--active" : ""
                }`}
              >
                <img
                  src={iconSrc}
                  alt={item.label}
                  className="navigation__icon"
                />
                <span className="navigation__label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
