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
                    <img src={linkedInIcon} alt="LinkedIn" />
                </a>
                <a href="https://www.xing.com/profile/Christian_Grundman" >
                    <img src={xingIcon} alt="Xing" />
                </a>
                <a href="https://github.com/cgrundman/" >
                    <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
            <div className={classes.row}>
                <p>© Copyright {yyyy} - Christian Grundman</p>
            </div>
        </footer>
    )
}

export default Footer;