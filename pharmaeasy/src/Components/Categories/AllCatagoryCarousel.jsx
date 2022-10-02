import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';
import AllCatagoryCarouselCard from './AllCatagoryCarouselCard';

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1.65,
  slidesToScroll: 1,
}

export default function AllCatagoryCarousel() {

  const [slider, setSlider] = React.useState()

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });


  
  const cards = [
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/df6e3ec2e80-FDCB.jpg?dim=700x0&dpr=1&q=100',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/ea0bf711eed-Vicks-cb-may.jpg',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/8aa83ea6c7e-Moov-June-Coupon.jpg',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/627c570ceec-Plum-M-M.jpg',
    }
    ,{
      image:
        'https://cms-contents.pharmeasy.in/banner/de6cc279933-Upakarma-CB-june.jpg',
    }
    ,
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/3ab35ad135a-Cremaffin-June-SRP.jpg',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/0c2c1348a87-OneTouch-CB-June22.png',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/7076307845f-Johnson-CB-Mar22.jpg',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/26d88c347d7-Colgate-Diab.jpg',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/e13fa8363bf-EQUAL-JUNE-CB.png',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/5d4b67a22d1-Khadi-CB-June.jpg',
    },
    {
      image:
        'https://cms-contents.pharmeasy.in/banner/8ca693dc787-B-CB.jpg',
    },
  ];

  return (
    <Box 
      position={'relative'}
      height={'320px'}
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
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        bg="white"
        boxShadow=" rgba(136, 165, 191, 0.58) 6px 2px 15px 0px, rgba(255, 255, 255, 2.8) -2px -0px 16px 0px"
        _hover={{bg:"white", transform:"scale(1.3) translateY(-12px)", boxShadow:" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}
        _active={{bg:"white"}}
        size="sm"
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt color="#0f847e"/>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        size="sm"
        boxShadow=" rgba(136, 165, 191, 0.58) 6px 2px 15px 0px, rgba(255, 255, 255, 2.8) -2px -0px 16px 0px"
        _hover={{bg:"white", transform:"scale(1.3) translateY(-12px)", boxShadow:" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}
        _active={{bg:"white"}}
        bg="white"
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt color="#0f847e"/>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)} >
        {cards.map((elem, index) => (

           <AllCatagoryCarouselCard elem={elem}/>
        ))}
      </Slider>
    </Box>
  );
}