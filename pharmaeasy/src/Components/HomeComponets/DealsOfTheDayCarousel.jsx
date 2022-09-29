// DealsOfTheDayCarousel

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CountdownTimer  from "./CountdownTimer";
import DealsOfTheDayCarouselElement from "./DealsOfTheDayCarouselElement";


const DealsOfTheDayCarousel = () => {
  return (
      <Flex h="27rem"  align="end" position="relative" >
        <Box
          // border={"2px solid black"}
          height="16rem" 
          w="100%"
          position="absolute"
          top="0"
          bg="#fff2f1"
          zIndex="-2"
          left="-40"
          width="1550px"
        ></Box>
      <Box
        h="25rem"
        w="100%"
        position="relative"

        // border={"2px solid blue"}
      >
        <Flex h="20%" w="100%" justify="space-between" align="center">
          <Flex className="left" align="center" h="100%" w="35%" justify="space-between"  >
            <Image src="https://assets.pharmeasy.in/web-assets/dist/cc9b301d.svg" />
            <Box borderRight="3px solid #f76b6c" padding=" 0 25px">
                <Text fontSize="20px" fontWeight="700" color="#4f585e"  >
                    Deals of the Day
                </Text>
            </Box>
            <CountdownTimer/>
          </Flex>
          <Flex className="right" align="center">
            <Text fontSize="18px" fontWeight="600" color="#0f847e">
              View All
            </Text>
            <Flex className="arrow" w="9rem" h="100%"></Flex>
          </Flex>
        </Flex>
        <DealsOfTheDayCarouselElement />
      </Box>
    </Flex>
  );
};

export default DealsOfTheDayCarousel;
