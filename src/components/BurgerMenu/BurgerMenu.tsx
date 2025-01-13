import React, { useState, useEffect } from "react";
import "./BurgerMenu.css";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
      const handleLocationChange = () => {
        setCurrentPath(window.location.pathname);
      };
      window.addEventListener("popstate", handleLocationChange);
      return () => {
        window.removeEventListener("popstate", handleLocationChange);
      };
    }
  }, []);

  return (
    <>
      <div className="burger-menu open blur-background">
        <div className="menu-content">
          <div className="links">
            <a href="/map" className={currentPath === "/map" ? "active" : ""}>
              Mapa
            </a>
            <a href="/" className={currentPath === "/" ? "active" : ""}>
              Home
            </a>
            <a href="/blog" className={currentPath === "/blog" ? "active" : ""}>
              Blog
            </a>
            <a
              href="/organizations"
              className={currentPath === "/organizations" ? "active" : ""}
            >
              Aktivnosti
            </a>
            <a
              href="/events"
              className={currentPath === "/events" ? "active" : ""}
            >
              Događaji
            </a>
            <a
              href="/contact"
              className={currentPath === "/contact" ? "active" : ""}
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
