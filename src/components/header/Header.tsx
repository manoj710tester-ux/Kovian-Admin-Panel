import "./header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <img src={logo} alt="Logo" className="header__logo__icon" />
        </div>
        <div className="header__search-actions ">
          {/* Search Bar */}
          <div className="header__search ">
            <svg
              className="header__search-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="header__search-input"
              placeholder="Search..."
            />
          </div>
          {/* Right Side Actions */}
          <div className="header__actions">
            {/* Notification Bell */}
            <button className="header__notification">
              <svg
                className="header__bell-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21a2 2 0 0 1-3.46 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="header__notification-dot"></span>
              <div className="header__notification-sparkles">
                <span className="header__sparkle"></span>
                <span className="header__sparkle"></span>
              </div>
            </button>
            {/* User Profile */}
            <div className="header__profile">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="User Profile"
                className="header__profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
