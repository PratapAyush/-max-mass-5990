import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BrandsCarouselElement from './BrandsCarouselElement'

 const BrandsCarousel = () => {
  return (
    <Box 
    h="20rem"
    w="100%"
    marginY={"50px"}
    position={'relative'}
    // border={'1px solid red'}
    >
        <Flex h="15%"
         justify="space-between"
        //  py="10px"
        >
            <Flex className="left" align="center">
                <Text fontSize="20px" fontWeight="700" px="20px" color="#4f585e">Featured Brands</Text>
            </Flex>
            <Flex className="right" align="center">
                <Flex className="arrow"  w="9rem" h="100%"></Flex>
            </Flex>
        </Flex>
        <BrandsCarouselElement/>
    </Box>
  )
}

export default BrandsCarousel