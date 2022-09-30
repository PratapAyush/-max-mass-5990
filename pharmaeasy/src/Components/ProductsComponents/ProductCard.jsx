import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({elem}) => {
  return (
    <Link to={`/healthcare/products/${elem._id}`}> <Box
      h="340px"
      w="231px"
      padding="20px 10px"
      transition="all 0.8s ease"
      border="1.5px solid #e2e6e8"
      borderRadius="lg"
      cursor="pointer"
      _hover={{
        border: "1.5px solid #0b8e87",
        transition: "all 0.5s ease",
        transform: "translateY(-3px)",
        boxShadow:" rgba(17, 17, 26, 0.2) 0px 10px 16px"
      }}
    >
      <Center h="65%">
        <Image
        //   w="8rem"
          h="9rem"
          objectFit="cover"
          src={elem.img1}
        />
      </Center>
      <Box h="35%" >
        <Text
          istruncated="true"
          noOfLines={2}
          fontSize="15px"
          fontWeight="700"
         height="3rem"
         marginY="10px"
        //   border="1px solid red"
        >
          {elem.desc}
        </Text>
        <Box height="1.2rem" >
        {elem.originalPrice &&
        <Flex height="1.2rem" align="center" gap="15px">
          <Text fontSize="13px" fontWeight="500" color="silver">
            MRP <span style={{ textDecoration: "line-through" }}>₹{elem.originalPrice}</span>
          </Text>
          <Flex
            align="center"
            justify="start"
            px="6px"
            color="white"
            fontSize="10px"
            fontWeight="600"
            height="100%"
            w="35%"
            bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
          >
            {elem.offer}% OFF
          </Flex>
        </Flex>
        }
        </Box>
        <Text fontSize="15px" fontWeight="700">
          ₹{elem.newPrice}
        </Text>
      </Box>
    </Box></Link>
  );
};

export default ProductCard;
