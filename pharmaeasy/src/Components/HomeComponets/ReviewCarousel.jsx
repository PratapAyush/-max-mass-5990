import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ReviewCarouselElements from './ReviewCarousalElements'

 const ReviewCarousel = () => {
  return (
    <Box 
    h="24rem"
    w="100%"
    // marginY={"50px"}
    position={'relative'}
    // border={'1px solid red'}
    >
        <Flex h="15%"
         justify="space-between"
        //  py="10px"
        >
            <Flex className="left" align="center">
                <Text fontSize="20px" fontWeight="700" px="20px" color="#4f585e">What our customers have to say</Text>
            </Flex>
            <Flex className="right" align="center">
                <Flex className="arrow"  w="9rem" h="100%"></Flex>
            </Flex>
        </Flex>
        <ReviewCarouselElements />
    </Box>
  )
}

export default ReviewCarousel