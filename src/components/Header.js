import { NavLink } from "react-router-dom";

import SiteLogo from "../logos/siteLogo.jsx";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <SiteLogo height="110" margin-top="auto" margin-bottom="auto" />
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
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
          <li className={classes.item}>
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
          <li className={classes.item}>
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
