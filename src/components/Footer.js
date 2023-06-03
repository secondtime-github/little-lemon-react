import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
    return (
        <footer>
        <Box backgroundColor="#495E57">
            <Flex
                margin="0 auto"
                px={12}
                color="#EDEFEE"
                justifyContent="center"
                alignItems="center"
                maxWidth="1024px"
                height={16}
            >
            <p>Little Lemon • 2023</p>
            </Flex>
        </Box>
        </footer>
    );
};

export default Footer;