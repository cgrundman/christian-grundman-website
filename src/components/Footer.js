// import { Link } from "react-router-dom";

import classes from './Footer.module.css';
import linkedInIcon from '../icons/linkedin.png'
import xingIcon from '../icons/xing.png'
import githubIcon from '../icons/github.png'

var today = new Date();
var yyyy = today.getFullYear();

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.row}>
                <a href="https://www.linkedin.com/in/christian-grundman/" >
                    <img src={linkedInIcon} className={classes.icon} alt="LinkedIn" width="25" />
                </a>
                <a href="https://www.xing.com/profile/Christian_Grundman" >
                    <img src={xingIcon} className={classes.icon} alt="Xing" width="25" />
                </a>
                <a href="https://github.com/cgrundman/" >
                    <img src={githubIcon} className={classes.icon} alt="GitHub" width="25" />
                </a>
            </div>
            <div className={classes.row}>
                <p>© Copyright {yyyy} - Christian Grundman</p>
            </div>
        </footer>
    )
}

export default Footer;