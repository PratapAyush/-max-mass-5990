import React from 'react';
import {
  Box,
  IconButton,
} from '@chakra-ui/react';

import Slider from 'react-slick';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

// Settings for the slider
import {brands} from "../../Media/brands"
import BrandsCarouselCards from './BrandsCarouselCard';
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 8,
  slidesToScroll: 1,
};

export default function BrandsCarouselElement() {

  const [slider, setSlider] = React.useState()

  return (
    <Box
      
      height={'235px'}
    //   border="1px solid black"
      padding="10px"
      width={'full'}
      overflow={'hidden'}
      borderRadius="0"
        zIndex="0">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={1220}
        top={8}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="#5a6369"
        borderRadius="md"
        h="35px"
        transition="all 0.4s ease"
        _hover={{ bg:"white",transition:"all 0.4s ease", boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px"}}
        _active={{}}
        onClick={() => slider?.slickPrev()}>
        <BsArrowLeftShort fontSize="35px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        borderRadius="md"
        transition="all 0.4s ease"
        right={2}
        top={8}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="#5c656b"
        h="35px"
        _hover={{ bg:"white",transition:"all 0.4s ease", boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px"}}
        _active={{}}
        onClick={() => slider?.slickNext()}>
        <BsArrowRightShort fontSize="35px" />
      </IconButton>
      {/* Slider */}
      <Slider  {...settings} ref={(slider) => setSlider(slider)}>
        {brands.map((elem, index) => (
          <BrandsCarouselCards key={elem.id} elem={elem}/>
        ))}
      </Slider>
    </Box>
  );
}