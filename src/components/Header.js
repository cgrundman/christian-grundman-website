import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                            to="/homepage"
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined 
                            } 
                            end 
                        >
                            Home
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
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;