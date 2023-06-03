import logo from "../images/Logo.svg";
import Nav from "../components/Nav";
import { Grid, GridItem, Image, Center } from "@chakra-ui/react";

const Header = () => {
    return (
        <header>
            <Grid
                templateColumns="repeat(12, 1fr)"
                gap="20px"
                px="70px"
            >
                <GridItem colSpan={2} bg="blue.200" />
                <GridItem colSpan={2} bg="green.200" >
                    <Center h="80px">
                        <Image src={logo} alt="logo" />
                    </Center>
                </GridItem>
                <GridItem colSpan={6} bg="purple.200" >
                    <Nav />
                </GridItem>
                <GridItem colSpan={2} bg="blue.200" />
            </Grid>
        </header>
    );
};

export default Header;