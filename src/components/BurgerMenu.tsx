import React, { useState, useEffect } from "react";

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
      <style>
        {`
          .burger-menu {
            position: fixed;
            top: 54px;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1009;
          }
          .burger-menu.open {
            transform: translateY(0);
          }
          .menu-content {
            text-align: center;
            width: 100%;
            height: 100%;
          }
          .links {
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 20vh;
            padding-inline: 20vw;
            justify-content: flex-start;
            gap: 10px;
          }
          .links a {
            padding: 10px 0;
            text-decoration: none;
            color: #333;
            font-size: 18px;
            width: 100%;border-inline: 16px solid transparent;
            transition:
              border-bottom-color 0.3s ease-in-out,
              border-inline-color 0.3s ease-in-out;
          }
          .links a.active {
            font-weight: bold;
            border-bottom: 3px solid var(--pumpkin-orange);
            border-inline: 16px solid transparent;
          }
          .links a:hover {
            border-bottom: 3px solid var(--pumpkin-orange);
            border-inline: 16px solid transparent;
            transition:
              border-bottom-color 0.3s ease-in-out,
              border-inline-color 0.3s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default BurgerMenu;
