import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import LabTestCarouselElements from "./LabTestCarouselElements";

const LabTestCarousal = () => {
  return (
      <Flex h="22rem"  align="end" position="relative">
        <Box
        //   border={"2px solid black"}
          height="19rem"
          w="100%"
          position="absolute"
          top="0"
          bg="#d4e2fa"
          zIndex="-2"
          left="-40"
          width="1550px"
        ></Box>
      <Box
        h="19rem"
        w="100%"
        position="relative"
        // marginY={"50px"}
      >
        <Flex h="25%" justify="space-between" >
          <Flex className="left" align="center" h="45%">
            <Text fontSize="20px" fontWeight="700" color="#4f585e"  >
            Frequently Booked Lab Tests
            </Text>
          </Flex>
          {/* <Flex className="right" align="center">
            <Text fontSize="18px" fontWeight="600" color="#0f847e">
              See All Offers
            </Text>
            <Flex className="arrow" w="9rem" h="100%"></Flex>
          </Flex> */}
        </Flex>
        <LabTestCarouselElements />
      </Box>
    </Flex>
  );
};

export default LabTestCarousal;
