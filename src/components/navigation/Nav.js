import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <HStack
                h="80px"
                justifyContent="space-evenly"
                color="#495E57"
                fontWeight="bold"
            >
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/order_online">Order Online</Link>
                <Link to="/login">Login</Link>
            </HStack>
        </nav>
    );
};

export default Nav;