import { Box, Flex,  Image, Text } from "@chakra-ui/react";
import React from "react";
import CartFilter from "./CartFilter";
import { AiFillStar } from "react-icons/ai";

import { RemoveModal } from "./RemoveModal";


const CartProductCard = ({elem}) => {
  function generateRandomDate() {
    return new Date(+new Date() + Math.floor(Math.random() * 10000000000));
  }

  const deliveryDate = new generateRandomDate().toLocaleDateString("en-IN");



  return (
    <Flex
      border="1.5px solid #dde0e2"
      h="14.5rem"
      w="100%"
      marginY="12px"
      borderRadius="lg"
      p="20px 10px"
      textAlign="left"
      position="relative"
      color="#4f585e"
    >
      <Box w="16%" p="4px">
        <Flex justify="center" align="center">
          <Image
        //   border="1px solid red"
            w="100%"
            src={elem?.img1}
          />
        </Flex>
      </Box>
      <Box h="100%" w="90%" paddingBottom="8px">
        <Text
          istruncated="true"
          fontSize="16px"
          fontWeight="700"
          noOfLines={2}
          height="50px"
          w="90%"
        >
          {elem?.desc}
        </Text>
        <Text fontSize="14px" color="rgb(136, 151, 162)" marginY={"4px"}>
          By {elem?.company}
        </Text>
        {elem.ratings &&
        <Flex align="center" justify="space-between" w="20%">
          <AiFillStar color="#ffc600" />
          <Text fontSize="14px" fontWeight="600">
            Rating: {elem?.ratings}{" "}
          </Text>
        </Flex>
        }
        <Flex justify="space-between">
          <CartFilter />
          <Flex w="20%" direction="column" align="end" justify="center">
          {elem.offer &&
            <Flex
              align="center"
              w="100%"
              justify="space-between"
            
            >
              <Text color="red" fontSize="11px" fontWeight="500">
              {elem?.offer}% OFF
              </Text>
            
              <Text fontSize="13px" fontWeight="400" color="#8e9ca7" textDecoration="line-through" >
                ₹{elem.originalPrice}
              </Text>
            
            </Flex>
            }
            <Text fontSize="16px" fontWeight="700" py="6px">
              ₹{elem?.newPrice}
            </Text>
          </Flex>
        </Flex>
        <Text fontSize="13px" fontWeight="500" color="rgb(111, 120, 126)">
          Delivery by {deliveryDate}
        </Text>
      </Box>
      
      <RemoveModal id={elem._id} title={elem.desc}/>
    </Flex>
  );
};

export default CartProductCard;
