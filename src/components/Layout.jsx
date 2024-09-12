import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [classSidebar, setClassSidebar] = useState("sidebar");
  const [logoMenu, setLogoMenu] = useState("bx bx-menu");

  const openSidebar = () => {
    if (!isOpen) {
      setClassSidebar("sidebar open");
      setLogoMenu("bx bx-menu-alt-right");
      setIsOpen(true);
    } else {
      setClassSidebar("sidebar");
      setLogoMenu("bx bx-menu");
      setIsOpen(false);
    }
  };
  return (
    <div>
      <div className={classSidebar}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon"></i>
          <div className="logo_name">CrSoftware</div>
          <i className={logoMenu} id="btn" onClick={openSidebar}></i>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <i className="bx bx-user"></i>
              <span className="links_name">Clients</span>
            </Link>
            <span className="tooltip">Clients</span>
          </li>
          <li>
            <Link to="/movies">
              <i className="bx bxs-movie-play"></i>
              <span className="links_name">Movies</span>
            </Link>
            <span className="tooltip">Movies</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img
                src="https://unavatar.io/github/gerardocrr"
                alt="profileImg"
              />
              <div className="name_job">
                <div className="name">GerardoCr</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
      <section className="home-section p-5">{children}</section>
    </div>
  );
}
