import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const AllCatagoryCarouselCard = ({elem}) => {
  return (
    <Box display="flex" justify="center" align="center" height={"328px"} position="relative" marginTop="20px"> 
        <Box
        margin="0 10px"
        w="100%"
        // marginLeft="1130px"
            height={"85%"}
            position="relative"
            overflow="hidden"
            borderRadius="14"
            // border="1px solid red"
            >
          <Image height="278px" src={elem.image}/>
          </Box>
    </Box>
  )
}

export default AllCatagoryCarouselCard