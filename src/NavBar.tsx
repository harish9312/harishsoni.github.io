import * as React from "react";

const navBarOptions = [
  {
    name: "About",
    id: "AboutMe",
  },
  {
    name: "Projects",
    id: "Projects",
  },
  {
    name: "Tech Stack",
    id: "Skills",
  },
  {
    name: "Education",
    id: "Education",
  },
  {
    name: "Resume",
    id: "Resume",
  },
];

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [selectedNav, setSelectedNav] = React.useState("");

  const scrollIntoView = (id: string) => {
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      100
    );
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, "Home", `?page=${id}`);
    setIsNavOpen(false);
    setSelectedNav(id);
  };

  return (
    <div className="main-nav">
      <div className="nav-content">
        <label className="checkbtn">
          <i
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="fas fa-bars"
          ></i>
        </label>
        <div onClick={() => scrollIntoView("Home")} className="logo">
          <span className="name">Harish Soni</span>
          <span className="tag">Full Stack Developer</span>
        </div>
      </div>
      <div className="menu-content">
        <ul className={`menu-list ${isNavOpen ? "active rm-overlay" : ""}`}>
          {navBarOptions.map((option) => (
            <li
              key={option.id}
              onClick={() => scrollIntoView(option.id)}
              className={
                option.id === selectedNav
                  ? "menu-item active-item"
                  : "menu-item"
              }
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
