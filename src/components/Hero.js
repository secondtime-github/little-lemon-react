import restaurantfood from "../images/Hero image.png";
import {
    Box,
    Grid,
    GridItem,
    VStack,
    Heading,
    Text,
    Button,
    Image,
    AspectRatio
} from "@chakra-ui/react";

const Hero = () => {
    return (
        <Box w="100%" bg="#495E57">
            <Grid
                templateColumns="repeat(12, 1fr)"
                gap="20px"
                px="70px"
            >
                <GridItem colSpan={2} />
                <GridItem colSpan={4} >
                    <VStack 
                        p={4} 
                        alignItems="start"
                        color="#EDEFEE"
                    >
                        <Heading color="#F4CE14">Little Lemon</Heading>
                        <Heading size="md">Chicago</Heading>
                        <Text>
                            We are a family owned mediterranean restaurant,
                             focused on traditional recipes served with a modern twist.
                        </Text>
                        <Button marginTop={8} bg="#F4CE14" fontWeight="bold">Reserve a Table</Button>
                    </VStack>
                </GridItem>
                <GridItem colSpan={4} display="flex" justifyContent="end" alignItems="center">
                    <Box boxSize="200px">
                        <AspectRatio ratio={3 / 4} width="100%">
                            <Image borderRadius="xl" src={restaurantfood} alt="restaurant_food" />
                        </AspectRatio>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} />
            </Grid>
        </Box>
    );
};

export default Hero;