import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import StatisticsAllCatagory from "../Components/Categories/StatisticsAllCatagory";
import BroughtTogatherCarousel from "../Components/CartComponents/Carousel";
import CartProductCard from "../Components/CartComponents/CartProductCard";
import { BiChevronRight } from "react-icons/bi";
import { HiCurrencyRupee } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/Cart/action";
import { addToOrder } from "../Redux/Orders/action";

const Cart = () => {
  const dispatch = useDispatch();

  //! to get cart details----------------->
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  const cartData = useSelector((store) => store.cart.cart);
  console.log(cartData, "crt data");
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const totalMRP = useSelector((store) => store.cart.totalMRP);
  console.log(totalMRP, "totalMRP");
  console.log(totalPrice, "total price");

  console.log(cartData.length, "cartData");

  //! to add cart items into pruducts----------------->
  const handleDispatchOrder = () => {
    setTimeout(() => {
      dispatch(addToOrder(cartData));
      alert("Your order got Placed 🙌");
    }, 1000);
  };

  const loading = useSelector((store) => store.cart.isLoading);
  const error = useSelector((store) => store.cart.isError);

  return (
    <Box py="40px">
      {cartData?.length === 0 && !loading && (
        <Box>
          <Heading color="#4f585e">Your Cart is Empty!</Heading>
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_v4d0iG.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "38rem" }}
            loop
            autoplay
          ></lottie-player>
        </Box>
      )}
      <Box>
        {loading && (
          <div style={{ height: "45rem", marginTop: "50px" }}>
            <lottie-player
              src="https://assets7.lottiefiles.com/datafiles/AX0rqrGV5ahKpWr/data.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "500px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        )}
        {error && (
          <div style={{ height: "45rem", marginTop: "50px" }}>
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_rz0hyab1.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "500px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        )}
        {!loading && !error && (
          <Flex
            w="1024px"
            margin="auto"
            marginBottom="40px"
            // border="1px solid black"
            justify="space-between"
            color="#4f585e"
          >
            <Box w="58%" h="100%" className="leftCartDiv">
              <Box>
                <Flex align="center" justify="space-between">
                  <Text fontSize="24px" fontWeight="700">
                    {cartData?.length}{" "}
                    {cartData?.length === 1 ? "Item" : "Items"} In Cart
                  </Text>
                  <Text fontSize="12px" color=" rgb(136, 151, 162)">
                    Prices are indicative
                  </Text>
                </Flex>
                <Box className="cartCards" marginBottom="5rem">
                  {cartData?.map((elem) => {
                    return <CartProductCard key={elem.id} elem={elem} />;
                  })}
                </Box>
              </Box>
              <BroughtTogatherCarousel/>
            </Box>
            <Box
              w="34%"
              //   border="1px solid black"
              className="rightCartDiv"
              //   h="40rem"
            >
              <Stack spacing="5" direction="column" marginBottom="40px">
                <Flex
                  h="45px"
                  border="1px solid #0f847e"
                  p="8px"
                  justify="space-between"
                  align="center"
                  borderRadius="md"
                >
                  <Flex align="center" w="40%" justify="space-between">
                    <Image src="https://assets.pharmeasy.in/web-assets/dist/90a09c2f.svg" />
                    <Text fontWeight="700" color="#0f847e" fontSize="15px">
                      Apply Coupon
                    </Text>
                  </Flex>
                  <BiChevronRight fontSize="25px" color="#0f847e" />
                </Flex>
                <Button
                  className="Add Delivery Address"
                  variant="#0f847e"
                  bg="#0f847e"
                  color="white"
                  fontWeight="700"
                  h="3rem"
                  fontSize="16px"
                  transition="all 0.4s ease"
                  borderRadius="md"
                  w="100%"
                  display="flex"
                  align="center"
                  _hover={{ bg: "#075854", transition: "all 0.4s ease" }}
                >
                  Add Delivery Address
                </Button>
                <Flex
                  h="45px"
                  border="1px dashed rgb(59, 184, 150)"
                  bg="#f2fff8"
                  p="8px"
                  justify="space-between"
                  align="center"
                  borderRadius="md"
                >
                  <Flex align="center" w="100%" justify="center">
                    <Image
                      w="7%"
                      p="2px"
                      src="https://cdn.pharmeasy.in/cms/delivery_image.png"
                    />
                    <Text
                      fontWeight="600"
                      color="#57c3a5"
                      fontSize="14px"
                      marginLeft="4px"
                    >
                      Free delivery with cart value above ₹500
                    </Text>
                  </Flex>
                </Flex>
              </Stack>
              <Box className="orderSummary" fontSize="14px">
                <Text textAlign="left" fontSize="16px" fontWeight="700">
                  Order Summary
                </Text>
                <Flex justify="space-between" my="15px">
                  <Text fontSize="14px">Cart Value</Text>
                  <Flex justify="space-between" w="28%" align="center">
                    <Text
                      fontSize="12px"
                      color="silver"
                      textDecoration="line-through"
                    >
                      ₹{totalMRP}
                    </Text>
                    <Text fontWeight="600">₹{totalPrice}</Text>
                  </Flex>
                </Flex>
                <Flex
                  fontWeight="700"
                  borderTop="1px dashed rgb(223, 227, 230)"
                  py="10px"
                  justify="space-between"
                >
                  <Text>Amount to be paid</Text>
                  <Text>₹{totalPrice}</Text>
                </Flex>
                <Flex
                  my="20px"
                  h="45px"
                  border="1px dashed rgb(59, 184, 150)"
                  bg="#f2fff8"
                  p="8px"
                  justify="space-between"
                  align="center"
                  borderRadius="md"
                >
                  <Flex align="center" w="100%" justify="center">
                    <HiCurrencyRupee color="#ffc600" fontSize="20px" />
                    <Text
                      fontWeight="600"
                      color="#57c3a5"
                      fontSize="14px"
                      marginLeft="4px"
                    >
                      Free delivery with cart value above ₹500
                    </Text>
                    <BiChevronDown color="#57c3a5" fontSize="20px" />
                  </Flex>
                </Flex>
                <Center
                  cursor="pointer"
                  borderRadius="lg"
                  overflow="hidden"
                  my="10px"
                >
                  <Image src="https://github.com/SumanJK/sprint-1-rct-121/blob/main/Screenshot%202022-06-19%20at%202.55.32%20AM.png?raw=true" />
                </Center>
                <Flex
                  my="20px"
                  bg="#e9f9ff"
                  borderRadius="md"
                  color="#4f585e"
                  w="100%"
                  h="3.5rem"
                  align="center"
                  textAlign="left"
                >
                  <Box p="16px">
                    <Image src="https://assets.pharmeasy.in/web-assets/dist/0c22e009.svg?dim=0x32&dpr=2&q=100" />
                  </Box>
                  <Box fontSize="14px">
                    Products will be safely packed & Sanitized. Pay online for
                    contactless delivery{" "}
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        )}
      </Box>
      <StatisticsAllCatagory />
    </Box>
  );
};

export default Cart;
