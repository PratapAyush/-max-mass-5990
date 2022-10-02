import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const SimilarProductCard = ({ elem }) => {
  return (
    <Box
      display="flex"
      justify="center"
      align="center"
      height={"368px"}
      position="relative"
      marginTop="20px"
      color="#4f585e"

    >
      <Box
        margin="0 10px"
        w="100%"
        // marginLeft="1130px"
        height={"85%"}
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        p="10px"
        // border="1px solid red"
        textAlign="left"
        transition= "all 0.5s ease"
        _hover={{
            transform: "scale(1.05)",
            transition: "all 0.5s ease"
        }}
      >
        <Center className="image" h="45%" p="20px" borderRadius="lg" border="1.5px solid #e7e6e6">
          <Image h="100%" src={elem.img1} />
        </Center>
        <Text
          istruncated="true"
          fontSize="15px"
          fontWeight="700"
          noOfLines={2}
          height="48px"
        >
          {elem.desc}
        </Text>
        <Flex
          className="price"
          h="2rem"
          align="center"
          w="90%"
          //   marginTop="20px"
          justify="space-between"
        >
          <Text fontSize="11px" fontWeight="400" color="#8e9ca7">
            MRP <span style={{ textDecoration: "line-through" }}>₹{elem.originalPrice}</span>{" "}
          </Text>
          <Flex
            align="center"
            justify="start"
            px="6px"
            color="white"
            fontSize="10px"
            fontWeight="600"
            height="50%"
            w="46%"
            bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
          >
            {elem.offer}% OFF
          </Flex>
        </Flex>
        <Text fontSize="16px" fontWeight="700">
          ₹{elem.newPrice}
        </Text>
        <Button
          my="10px"
          w="5rem"
          h="2.6rem"
          borderRadius="none"
          variant="white"
          border="1px solid #0f847e"
          color="#0f847e"
          transition="all 0.4s ease"
          _hover={{bg:"#0696a3", color:"white",borderRadius:"20px" , fontWeight:"700", transition: "all 0.5s ease"}}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default SimilarProductCard;
