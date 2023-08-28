import '../Footer/Footer.css'
import logo from '../../images/LogoBlack.svg'
import BeansLogoBlack from '../../images/BeansLogoBlack.svg'
const Footer = () => {
    return (
    <footer class="foot">
        <div class="footMenu">
            <img class="footMenu-logo" src={logo} alt="logo"/>
            <ul class="footMenu-menu">
                <li class="footMenu-menuItem"><a href="asf">Our Coffee</a></li>
                <li class="footMenu-menuItem"><a href="asf">For your pleasure</a></li>
            </ul>
        </div>

        <img src={BeansLogoBlack} alt="" class="BeansLogo"/>
    </footer>
    )
}
export default Footer