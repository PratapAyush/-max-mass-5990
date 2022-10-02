import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const StatisticsHome = () => {
  return (
    <Box
    //  border="2px solid red"
     height="18rem"
     marginY={"60px"}
     color="#4f585e"
     textAlign="left"
     
    >
        <Flex height="18rem" >
            <Box w="25%">
                <Image src="https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg"/>
                <Heading letterSpacing=".8px" py={"25px"} fontSize="45px" fontWeight="700">25 Million</Heading>
                <Text wordSpacing=".5px" fontSize="18px" fontWeight="600" >Registered Users as of Jun 30, 2021</Text>
            </Box>
            <Box w="25%">
                <Image src="https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg"/>
                <Heading letterSpacing=".8px" py={"25px"} fontSize="45px" fontWeight="700">8.8 Million</Heading>
                <Text wordSpacing=".5px" fontSize="18px" fontWeight="600" >PharmEasy Orders as of FY21</Text>
            </Box>
            <Box w="25%">
                <Image src="https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg"/>
                <Heading letterSpacing=".8px" py={"25px"} fontSize="45px" fontWeight="700">50K+</Heading>
                <Text wordSpacing=".5px" fontSize="18px" fontWeight="600" >SKUs sold in Q1FY22</Text>
            </Box>
            <Box w="25%">
                <Image src="https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg"/>
                <Heading letterSpacing=".8px" py={"25px"} fontSize="45px" fontWeight="700">18K+</Heading>
                <Text wordSpacing=".5px" fontSize="18px" fontWeight="600" >Pin-Codes Serviced for the month of June 2021</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default StatisticsHome