import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const PharmEasyPlusBanner = () => {
  return (
    <Flex
        h="10rem"
        align="end"
        position="relative"
    >
        <Flex
         h="58%"
         w="100%"
         bgColor={"rgb(162, 145, 250)"}
         borderRadius="md"
         cursor="pointer"
         bgImage='url("https://assets.pharmeasy.in/web-assets/dist/f5c40209.svg")'
        //  justify="space-between"
         
        >
            <Flex  w="20%"px={"30px"} align="center">
                <Image w="100%" h="40%" src="https://assets.pharmeasy.in/web-assets/dist/e3db129c.png"/>
            </Flex>
            <Flex w="68%" align="center" fontSize="20px" fontWeight="600" color="#fff" justify="center">
                <Text>Save flat 5%  extra on medicines & enjoy FREE  delivery with PLUS membership</Text>
            </Flex>
            <Image right="0" bottom="0" h="8rem" w="10rem" position="absolute" src="https://assets.pharmeasy.in/web-assets/dist/b20b0932.png"/>
        </Flex>
    </Flex>
  )
}

export default PharmEasyPlusBanner