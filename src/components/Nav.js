import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <HStack
                h="80px"
                justifyContent="space-evenly"
            >
                <Link to="/home" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/reservations" className="nav-item">Reservations</Link>
                <Link to="/order_online" className="nav-item">Order Online</Link>
                <Link to="/login" className="nav-item">Login</Link>
            </HStack>
        </nav>
    );
};

export default Nav;