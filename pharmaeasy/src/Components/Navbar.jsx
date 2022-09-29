import React, { useEffect } from "react";
import "./styles/Navbar.css";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  HStack,
  Stack,
  Collapse,
  useDisclosure,
  Input,
  Image,
  Center,
} from "@chakra-ui/react";
import logo from "../Media/logo.png";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { PincodeSlider } from "../Components/NavbarComponents/PincodeSlider.jsx";
import { LoginSignupSlider } from "../Components/NavbarComponents/LoginSignupSlider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginSLider } from "./NavbarComponents/LoginSlider";
import { LoginIndivisualSlider } from "./NavbarComponents/LoginIndivisualSlider";
import { getCartItems } from "../Redux/Cart/action";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [nav, setNav] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setNav(false);
    } else {
      setNav(true);
    }
  }
  const isAuth = useSelector((store) => store.auth.isAuth);
  console.log(isAuth, "isauth");
  const userId = useSelector((store) => store.auth.id);

  //! total cart items
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(getCartItems(userId));
    }
  }, [dispatch]);
  const cartData = useSelector((store) => store.cart.cart);

  return (
    <Box height={nav ? "123px" : "80px"}>
      <Box
        // className={nav ? "nav" : "notNav"}
        position="fixed"
        w="100%"
        bg=" rgb(16, 132, 126) none repeat scroll 0% 0% / auto padding-box border-box"
        padding="15px 0px"
        outline="rgb(79, 88, 94) none 0px"
        vertical-align="baseline"
        zIndex={200}
        // border = "0px none rgb(79, 88, 94)"
        // border="2px solid red"
        height={nav ? "123px" : "80px"}
        transition="all 0.4s ease"
      >
        <Flex
          // minH={"60px"}
          height={"100px"}
          // py={{ base: 2 }}
          px={{ base: 10 }}
          align={"center"}
          // border="2px solid blue"
        >
          {/* FOR small screen */}
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          {/* FOR small screen */}
          <Flex width="14%" height="100%" align="start" marginRight={"10px"}>
            <Link to="/">
              <Image
                box-sizing="border-box "
                maxWidth="100%"
                maxHeight="100%"
                margin="0px "
                padding="0px "
                vertical-align="baseline"
                src={logo}
              />
            </Link>
          </Flex>
          <Box height="100%" w="100%">
            <Box
              display={{ base: "none", md: "flex" }}
              ml={10}
              // border="1px solid black"
              height="50%"
            >
              <Flex
                className="Searchbox"
                height="100%"
                // border="1px solid blue"
                w="77%"
                align="center"
              >
                <HStack
                  className="pincode"
                  w="18%"
                  height="99.8%"
                  // display
                  // align="center"
                  fontWeight="400"
                >
                  <PincodeSlider />
                </HStack>
                <Input
                  className="searchInput"
                  // border="1px solid black"
                  w="76%"
                  h="100%"
                  placeholder="Search medicines/Healthcare products"
                  color="#97a6b1"
                  bg="white"
                  border=".1px solid silver"
                  borderRadius="0"
                  focusBorderColor="none"
                  // borderLeft="1px solid siver"
                  letterSpacing=".1px"
                  fontWeight="400"
                />
                <Box
                  className="searchBtn"
                  // border="1px solid black"
                  w="6%"
                  height="99.8%"
                >
                  <Button w="100%" height="100%" borderLeftRadius="0">
                    <SearchIcon color="#8897a2" size="3rem" fontWeight="bold" />
                  </Button>
                </Box>
              </Flex>
              {!nav && (
                <HStack w="22%" justify="space-between" px={"2%"}>
                  <Flex>
                    <Image src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" />
                    <LoginSignupSlider />
                  </Flex>
                  <Link to="/cart">
                    <Flex position="relative">
                      <Image src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" />
                      <Text color="white">Cart</Text>
                      <Center
                        position="absolute"
                        left="-2"
                        top="-2"
                        variant="solid"
                        bg="#f76b6c"
                        colorscheme="#f76b6c"
                        borderRadius="50"
                        w="1.6rem"
                        h="1rem"
                        color="white"
                        fontSize="11"
                        fontWeight="bold"
                      >
                        {cartData?.length}
                      </Center>
                    </Flex>
                  </Link>
                </HStack>
              )}
            </Box>
            {nav && (
              <Flex
                display={{ base: "none", md: "flex" }}
                ml={10}
                h="50%"
                align="end"
              >
                <Flex
                  height="60%"
                  width="100%"
                  justify="space-between"
                  align="center"
                >
                  <Flex
                    width="42%"
                    h="100%"
                    justify="space-between"
                    color="white"
                    align="center"
                    fontSize="16px"
                  >
                    <Text
                      transition="all .4s ease"
                      borderBottom="2px solid rgba(16, 132, 126, 0) "
                      _hover={{
                        borderBottom: "2px solid white",
                        transition: "all .4s ease",
                      }}
                    >
                      Order Medicines
                    </Text>
                    <Link to="/healthcare">
                      <Text
                        transition="all .4s ease"
                        borderBottom="2px solid rgb(16, 132, 126, 0) "
                        _hover={{
                          borderBottom: "2px solid white",
                          transition: "all .4s ease",
                        }}
                      >
                        Healthcare Products
                      </Text>
                    </Link>
                    <Text
                      transition="all .4s ease"
                      borderBottom="2px solid rgb(16, 132, 126, 0) "
                      _hover={{
                        borderBottom: "2px solid white",
                        transition: "all .4s ease",
                      }}
                    >
                      Lab Tests
                    </Text>
                    <Text
                      transition="all .4s ease"
                      borderBottom="2px solid rgb(16, 132, 126, 0) "
                      _hover={{
                        borderBottom: "2px solid white",
                        transition: "all .4s ease",
                      }}
                    >
                      RTPCR
                    </Text>
                  </Flex>
                  <Flex
                    width="32%"
                    h="100%"
                    justify="space-between"
                    px="26px"
                    align="center"
                  >
                    <Flex>
                      <Image src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" />
                      <Text color="white">Offers</Text>
                    </Flex>
                    <Flex>
                      <Image src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" />
                      {/* {isAuth &&} */}
                      <LoginIndivisualSlider font={"16px"} color={"#fff"} />
                      {/* <LoginSLider/> */}
                    </Flex>
                    <Link to="/cart">
                      <Flex position="relative">
                        <Image src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" />
                        <Text color="white">Cart</Text>
                        <Center
                          position="absolute"
                          left="-3"
                          top="-2"
                          variant="solid"
                          bg="#f76b6c"
                          colorscheme="#f76b6c"
                          borderRadius="50"
                          w="1.6rem"
                          h="1rem"
                          color="white"
                          fontSize="11"
                          fontWeight="bold"
                        >
                          {cartData?.length}
                        </Center>
                      </Flex>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Box>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        ></Stack>

        <Collapse in={isOpen} animateOpacity></Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;
