import { NavLink } from "react-router-dom";

import SiteLogo from "../logos/siteLogo.jsx";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <SiteLogo height="90" margin-top="auto" margin-bottom="auto" />
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <b>Home</b>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <b>Projects</b>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <b>About Me</b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
