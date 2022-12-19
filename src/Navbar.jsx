import { useState } from "react";
import logo from "./images/logo.svg";

export function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-header" style={styles.header}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: windowWidth < 800 ? "start" : "center",
          padding: "0.5rem 1.3rem",
          transition: "0.3s",
          flexDirection: windowWidth < 800 ? "column" : "row",
          height: windowWidth < 800 ? (!open ? "60px" : "265px") : "",
          overflow: "hidden",
        }}
      >
        <a href="#">
          <img src={logo} style={styles.img} />
        </a>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "1.5rem",
            marginRight: "10px",
            flexDirection: windowWidth < 800 ? "column" : "row",
          }}
        >
          <li style={styles.navItem}>Home</li>
          <li style={styles.navItem}>About</li>
          <li style={styles.navItem}>Projects</li>
          <li style={styles.navItem}>Contact</li>
          <li style={styles.navItem}>Profile</li>
        </ul>

        {windowWidth < 800 ? null : (
          <nav style={styles.social}>
            <a href="#" style={styles.social.link}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" style={styles.social.link}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={styles.social.link}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" style={styles.social.link}>
              <i className="fab fa-behance"></i>
            </a>
          </nav>
        )}
      </div>
      <button
        style={{
          width: "30px",
          height: "30px",
          background: "transparent",
          border: 0,
          outline: 0,
          position: "fixed",
          top: "0.5%",
          right: "5%",
          display: windowWidth < 800 ? "grid" : "none",
          gap: "0.4rem",
          paddingTop: "1rem",
          placeItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setOpen((open) => !open)}
      >
        <span
          style={{
            background: "#49a6e9",
            height: "3px",
            width: "100%",
          }}
        ></span>
        <span
          style={{
            background: "#49a6e9",
            height: "3px",
            width: "100%",
          }}
        ></span>
        <span
          style={{
            background: "#49a6e9",
            height: "3px",
            width: "100%",
          }}
        ></span>
      </button>
    </nav>
  );
}

const styles = {
  header: {
    boxShadow: "0 5px 15px rgb(0,0,0,0.1)",
    backgroundColor: "#fff",
    position: "relative",
  },

  navItem: {
    cursor: "pointer",
    color: "#324d67",
    letterSpacing: "1.5px",
  },

  social: {
    display: "flex",
    gap: "1rem",
    link: {
      color: "#49a6e9",
    },
  },
  img: {
    verticalAlign: "middle",
  },
};
