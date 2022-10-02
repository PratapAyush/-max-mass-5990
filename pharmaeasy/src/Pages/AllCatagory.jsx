import { Box, Center } from "@chakra-ui/react";
import React from "react";
import AllCatagoryCarousel from "../Components/Categories/AllCatagoryCarousel";
import AllCatagoryDescription from "../Components/Categories/AllCatagoryDescription";
import AllCatagorymenu from "../Components/Categories/AllCatagorymenu";
import StatisticsAllCatagory from "../Components/Categories/StatisticsAllCatagory";

const AllCatagory = () => {
  return (
    <Box>
      <Box
        //  border={"1px solid red"}
        w="1024px"
        margin="auto"
        //  overflow="hidden"
      >
        <Center my="30px">
          <AllCatagoryCarousel />
        </Center>
        <AllCatagorymenu />
        <AllCatagoryDescription />
      </Box>
      <StatisticsAllCatagory />
    </Box>
  );
};

export default AllCatagory;
