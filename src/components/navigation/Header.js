import logo from "../../images/Logo.png";
import Nav from "./Nav";
import { Grid, GridItem, Image, Center } from "@chakra-ui/react";

const Header = () => {
    return (
        <header>
            <Grid
                templateColumns="repeat(12, 1fr)"
                gap="20px"
                px="70px"
            >
                <GridItem colSpan={2} />
                <GridItem colSpan={2} >
                    <Center h="80px">
                        <Image src={logo} alt="logo" />
                    </Center>
                </GridItem>
                <GridItem colSpan={6} >
                    <Nav />
                </GridItem>
                <GridItem colSpan={2} />
            </Grid>
        </header>
    );
};

export default Header;