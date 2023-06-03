import deliveryVan from "../images/Delivery van.png";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const MenuItem = ({ title, description, imageSrc, price }) => {
  return (
    <VStack
      borderRadius='xl'
      overflow='hidden'
      backgroundColor="gray.100"
    >
        <Image h="180px" w="100%" objectFit="cover" src={imageSrc} />
        <VStack p={6}>
            <HStack 
                minH="40px" 
                w="100%" 
                justifyContent="space-between"
            >
                <Heading size='md' color="#333333">{title}</Heading>
                <Text color="#EE9972">${price}</Text>
            </HStack>
            <Text minH="180px" color="gray.600">{description}</Text>
            <HStack 
                color="#333333"
                fontWeight="bold"
                w="100%" 
                justifyContent="start"
            >
                <Text>Order a delivery</Text>
                <Image w={30} src={deliveryVan} />
            </HStack>
        </VStack>
    </VStack>
  );
};

export default MenuItem;