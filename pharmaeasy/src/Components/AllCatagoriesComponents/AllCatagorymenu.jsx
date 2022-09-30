import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { allCatagoryMenu } from "../../Media/allCatagoryMenu";

const AllCatagorymenu = () => {
  return (
    <Flex
      height={"762px"}
      //  border="2px solid black"
      flexWrap={"wrap"}
      justify="space-between"
    >
      {allCatagoryMenu.map((elem) => {
        return (
           <Flex
            border="1.5px solid #dfe3e6"
            w="32%"
            h="112px"
            borderRadius="md"
            align="center"
            textAlign="left"
            cursor="pointer"
            transition="all 0.4s ease"
            _hover={{boxShadow:"rgba(22, 135, 110, 1) 0px 0px 5px 2px ",transition:"all 0.4s ease", transform:"scale(1.02)"}}
          >
           <Link to="/healthcare/products"> <Flex h="112px" w="325px"  p=" 20px">
              <Flex w="28%">
                <Image w="90%" src={elem.img} />
              </Flex>
              <Text w="55%" fontSize="16px" fontWeight="500" color="#4f585e">
                {elem.catagory}
              </Text>
              <Text
                textAlign="right"
                w="25%"
                fontSize="14px"
                fontWeight="400"
                color="#0f847e"
              >
                &nbsp; Upto {elem.offer}% off
              </Text>
            </Flex></Link>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default AllCatagorymenu;
