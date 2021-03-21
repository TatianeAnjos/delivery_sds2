import './styles.css'
import {ReactComponent as YouTubeIcon} from './Youtube.svg';
import {ReactComponent as LinkedinIcon} from './Linkedin.svg';
import {ReactComponent as InstagramIcon} from './Instagram.svg';


function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="youtube" target="_new">
                    <YouTubeIcon/>
                </a>
                <a href="linkedin" target="_new">
                    <LinkedinIcon/>
                </a>
                <a href="instagram" target="_new">
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;