import logo from "../images/Logo.svg";
import Nav from '../components/Nav';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <Nav />
        </header>
    );
};

export default Header;