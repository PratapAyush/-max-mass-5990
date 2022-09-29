import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomeCatagoryCards = () => {
  return (
    <div>
      <Flex h="12rem" justify="space-between" marginBottom="30px">
        <Box
          border="1px solid silver"
          overflow="hidden"
          w="31%"
          position="relative"
          borderRadius="md"
          transition="all 0.4s ease"
          _hover={{boxShadow: "rgba(14, 30, 37, 0.02) 0px 2px 4px 0px, rgba(14, 30, 37, 0.1) 0px 2px 26px 0px", transition:"all 0.4s ease"}}
        >
          <Flex h="60%" w="100%" bg="#cef0ea">
            <Box>
              <Flex
                h="1.6rem"
                w="68%"
                align="center"
                px="8px"
                bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
              >
                <Text fontSize="12px" fontWeight="700" color="#fff">
                  FLAT 15% OFF
                </Text>
              </Flex>
              <Flex align="center" padding="30px 25px">
                <Text fontSize="20px" fontWeight="700" color="#4f585e">
                  Order Medicines
                </Text>
              </Flex>
            </Box>
            <Image
              position="absolute"
              w="45%"
              right="0"
              src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=2&q=100"
            />
          </Flex>
          <Flex align="center" h="40%" px="40px">
            <Button
              h="45px"
              w="135px"
              fontWeight="700"
              fontSize="16px"
              color="white"
              variant="#3bb896"
              cursor="pointer"
              bg="#3bb896"
              _hover={{ bg: "#43cfaa" }}
            >
              Order Now
            </Button>
          </Flex>
        </Box>
        <Box
          border="1px solid silver"
          overflow="hidden"
          borderRadius="md"
          w="31%"
          position="relative"
          transition="all 0.4s ease"
          _hover={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.181) 0px 2px 26px 0px", transition:"all 0.4s ease"}}
        >
          <Flex h="60%" w="100%" bg="#fcf2d2">
            <Box>
              <Flex
                h="1.6rem"
                w="60%"
                align="center"
                px="8px"
                bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
              >
                <Text fontSize="12px" fontWeight="700" color="#fff">
                  UPTO 60% OFF
                </Text>
              </Flex>
              <Flex align="center" padding="30px 25px">
                <Text fontSize="20px" fontWeight="700" color="#4f585e">
                  Healthcare Products
                </Text>
              </Flex>
            </Box>
            <Image
              position="absolute"
              w="45%"
              right="0"
              src="https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=2&q=100"
            />
          </Flex>
          <Flex align="center" h="40%" px="40px">
          <Link to="/healthcare"> <Button
              h="45px"
              w="135px"
              fontWeight="700"
              fontSize="16px"
              color="white"
              variant="#fc8018"
              cursor="pointer"
              bg="#fc8018"
              _hover={{ bg: "#f79545" }}
            >
              Order Now
            </Button></Link>
          </Flex>
        </Box>
        <Box
          border="1px solid silver"
          overflow="hidden"
          borderRadius="md"
          w="31%"
          position="relative"
          transition="all 0.4s ease"
          _hover={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.181) 0px 2px 26px 0px", transition:"all 0.4s ease"}}
        >
          <Flex h="60%" w="100%" bg="#d6f0ff">
            <Box>
              <Flex
                h="1.7rem"
                w="99%"
                align="center"
                px="8px"
                bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
              >
                <Text fontSize="12px" fontWeight="700" color="#fff">
                  UPTO 70% OFF
                </Text>
              </Flex>
              <Flex align="left" padding="30px 25px" direction="column" justify="center">
                <Text fontSize="20px" fontWeight="700" color="#4f585e">
                  Lab Tests
                </Text>
                <Text color="#fff" fontSize="11px" fontWeight="700" w="45%" p=" 1px" borderRadius="lg" className="newTag" bg="rgb(71, 129, 236) linear-gradient(111.54deg, rgb(71, 129, 236) 27.04%, rgba(255, 255, 255, 0.314) 51.42%, rgb(71, 129, 236) 73.38%) repeat scroll 0% 0% / auto padding-box border-box">NEW</Text>
              </Flex>
            </Box>
            <Image
              position="absolute"
              w="45%"
              right="0"
              src="https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=2&q=100"
            />
          </Flex>
          <Flex align="center" h="40%" px="40px">
            <Button
              h="45px"
              w="135px"
              fontWeight="700"
              fontSize="16px"
              color="white"
              variant="#01b9e1"
              cursor="pointer"
              bg="#01b9e1"
              _hover={{ bg: "#33d0f3" }}
            >
              Book Now
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default HomeCatagoryCards;
