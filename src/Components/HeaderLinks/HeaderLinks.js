import '../HeaderLinks/HeaderLinks.css'
import logo from '../../images/Logo.svg'
const HeaderLinks = () => {
    return (
        <div className="headMenu">
            <img className="headMenu-logo" src={logo} alt="logo"/>
            <ul className="headMenu-menu">
                <li className="headMenu-menuItem"><a href="asf">Our Coffee</a></li>
                <li className="headMenu-menuItem"><a href="asf">For your pleasure</a></li>
            </ul>
        </div>
    )
}
export default HeaderLinks
