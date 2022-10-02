import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import OffersCarouselElements from './OffersCarouselElements'

const OffersCarousels = () => {
  return (
    <Box 
    h="12rem"
    w="100%"
    marginY={"50px"}
    position={'relative'}
    >
        <Flex h="25%"
         justify="space-between"
         py="10px"
        >
            <Flex className="left" align="center">
                <Image marginX={"4px"} h="95%" src="https://assets.pharmeasy.in/web-assets/dist/67890676.svg" />
                <Text fontSize="20px" fontWeight="700" color="#4f585e">Offers Just For You</Text>
            </Flex>
            <Flex className="right" align="center">
                <Text fontSize="18px" fontWeight="600" color="#0f847e">See All Offers</Text>
                <Flex className="arrow"  w="9rem" h="100%"></Flex>
            </Flex>
        </Flex>
        <OffersCarouselElements/>
    </Box>
  )
}

export default OffersCarousels