import MenuItem from "./MenuItem";
import {
    Box,
    Button,
    Grid,
    GridItem,
    HStack,
    Heading,
} from "@chakra-ui/react";

const menuItems = [
    {
        title: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olivers and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
        getImageSrc: () => require("../../images/Greek salad.png"),
        price: 12.99,
    },
    {
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../../images/Bruschetta.png"),
        price: 5.99,
    },
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../../images/Lemon dessert.png"),
        price: 5.00,
    },
];

const Highlights = () => {
    return (
        <Grid
            templateColumns="repeat(12, 1fr)"
            gap="20px"
            px="70px"
        >
            <GridItem colSpan={2} />
            <GridItem colSpan={8} >
                <HStack 
                    mt="60px"
                    mb="20px"
                    justifyContent="space-between"
                >
                    <Heading>This weeks specials!</Heading>
                    <Button bg="#F4CE14" fontWeight="bold">Online Menu</Button>
                </HStack>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(3, 1fr)"
                    gridGap={8}
                >
                    {menuItems.map(menuItem => (
                        <MenuItem
                            key={menuItem.title}
                            title={menuItem.title}
                            description={menuItem.description}
                            imageSrc={menuItem.getImageSrc()}
                            price={menuItem.price}
                        />
                    ))}
                </Box>
            </GridItem>
            <GridItem colSpan={2} />
        </Grid>
    );
};

export default Highlights;