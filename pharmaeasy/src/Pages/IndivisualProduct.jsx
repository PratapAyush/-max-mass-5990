import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import "../Components/styles/IndivisualProduct.css";
import SimilarProductCarousal from "../Components/IndivisualProduct/SimilarProductCarousal";
import DealsOfTheDayCarousel from "../Components/IndivisualProduct/DealsOfTheDayCarousel";
import StatisticsAllCatagory from "../Components/Categories/StatisticsAllCatagory";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIndivisualProducts } from "../Redux/Products/action";
import { addToCart } from "../Redux/Cart/action";
const IndivisualProduct = () => {
  const loading = useSelector((store) => store.products.isLoading);
  const error = useSelector((store) => store.products.isError);

  //! handle indivisual data---------->
  const { id } = useParams();
  //  console.log(id,"id")
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    dispatch(getIndivisualProducts({ id: id }));
  }, [dispatch, id]);
  const [data, setData] = useState();
  const [showImg, setShowImg] = useState();

  const indivisualProduct = useSelector(
    (store) => store.products.indivisualProduct
  );
  //  console.log(indivisualProduct,"ind data")
  //! handle Images---------->
  useEffect(() => {
    setData(indivisualProduct);
    setShowImg(indivisualProduct?.img1);
  }, [dispatch, indivisualProduct]);

  //! breadcrumb--------->
  var currentLocation = window.location.pathname;
  const location = "Home" + currentLocation;

  const loc = location.split("/");
  loc.pop();
  loc.pop();
  loc.push(indivisualProduct?.company);

  const breadcrumb = loc.join(" / ");
  console.log(breadcrumb);

  //!  Add to cart------------>

  const handleCart = (elemId) => {
    setTimeout(() => {
      dispatch(addToCart(elemId, toast));
    }, 800);
  };

  return (
    <Box px="40px">
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
        <Box>
          <Flex
            className="breadCrumb"
            h="40px"
            align="center"
            fontSize="13px"
            py="35px"
          >
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{loc[0]}</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">{loc[1]}</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" fontSize="12px">
                  {loc[2]}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
          <Flex className="content" justify="space-between">
            <div className="leftInd">
              <Box>
                <Flex className="product" h="340px" justify="space-between">
                  <Flex
                    className="img"
                    w="30%"
                    // border="1px solid green"
                    direction="column"
                    justify="space-between"
                    position="relative"
                  >
                    <Flex
                      overflow="hidden"
                      h="76%"
                      border="1.5px solid #e5e5e5"
                      borderRadius="md"
                      align="center"
                      justify="center"
                      p="10px"
                      cursor="pointer"
                    >
                      <div className="figure" style={{ padding: "0px" }}>
                        <img className="image-main" src={showImg} alt="" />
                        <img
                          className="image-hover"
                          src={indivisualProduct?.img2}
                          alt=""
                        />
                      </div>
                    </Flex>
                    <Flex
                      h="20%"
                      justify="space-between"
                      onMouseLeave={() => {
                        setShowImg(indivisualProduct?.img1);
                      }}
                    >
                      <Center
                        onMouseEnter={() => {
                          setShowImg(indivisualProduct?.img2);
                        }}
                        overflow="hidden"
                        className="img1"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{
                            transform: "scale(1.2)",
                            transition: "all 0.4s ease",
                          }}
                          src={indivisualProduct?.img2}
                        />
                      </Center>
                      <Center
                        onMouseEnter={() => {
                          setShowImg(indivisualProduct?.img3);
                        }}
                        overflow="hidden"
                        className="img2"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{
                            transform: "scale(1.2)",
                            transition: "all 0.4s ease",
                          }}
                          src={indivisualProduct?.img3}
                        />
                      </Center>
                      <Center
                        onMouseEnter={() => {
                          setShowImg(indivisualProduct?.img4);
                        }}
                        overflow="hidden"
                        className="img3"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{
                            transform: "scale(1.2)",
                            transition: "all 0.4s ease",
                          }}
                          src={indivisualProduct?.img4}
                        />
                      </Center>
                      <Center
                        onMouseEnter={() => {
                          setShowImg(indivisualProduct?.img5);
                        }}
                        overflow="hidden"
                        className="img4"
                        border="1.5px solid #e5e5e5"
                        borderRadius="md"
                        w="23%"
                        cursor="pointer"
                      >
                        <Image
                          w="75%"
                          transition="all 0.4s ease"
                          _hover={{
                            transform: "scale(1.2)",
                            transition: "all 0.4s ease",
                          }}
                          src={indivisualProduct?.img5}
                        />
                      </Center>
                    </Flex>
                    <IconButton
                      aria-label="Search database"
                      isRound="true"
                      position="absolute"
                      size="sm"
                      bottom="90"
                      right="2"
                      icon={<FaShareAlt color="gray" />}
                      boxShadow=" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                      transition="all 0.4s ease"
                      _hover={{
                        transform: "scale(1.2)",
                        transition: "all 0.4s ease",
                      }}
                    />
                  </Flex>
                  <Box
                    className="description"
                    w="65%"
                    // border="1px solid green"
                    position="relative"
                    textAlign="left"
                    color="#4f585e"
                    py="10px"
                  >
                    <Text
                      istruncated="true"
                      fontSize="20px"
                      fontWeight="700"
                      noOfLines={1}
                      height="30px"
                    >
                      {indivisualProduct?.desc}
                    </Text>
                    <Text fontSize="14" color="#0f847e" py="6px">
                      Visit {indivisualProduct?.company} Store
                    </Text>
                    <Flex
                      className=" rating"
                      paddingBottom="20px"
                      w="35%"
                      justify="space-between"
                      align="center"
                    >
                      <Flex color="#ffd344" fontSize="20px" align="center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <TiStarHalfOutline fontSize="24px" />
                        <FaRegStar />
                      </Flex>
                      <Text color="#8e9ca7" fontSize="14px">
                        ({indivisualProduct?.ratings} ratings)
                      </Text>
                    </Flex>
                    <Flex
                      className="price"
                      h="2rem"
                      align="center"
                      w="40%"
                      justify="space-between"
                    >
                      <Text fontSize="20px" fontWeight="700">
                        ₹{indivisualProduct?.newPrice}
                      </Text>
                      <Text fontSize="14px" fontWeight="400" color="#8e9ca7">
                        MRP{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          ₹{indivisualProduct?.originalPrice}
                        </span>{" "}
                      </Text>
                      <Flex
                        align="center"
                        justify="start"
                        px="6px"
                        color="white"
                        fontSize="11px"
                        fontWeight="600"
                        height="72%"
                        w="36%"
                        bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                      >
                        {indivisualProduct?.offer}% OFF
                      </Flex>
                    </Flex>
                    <Text fontSize="10px" color="#8e9ca7">
                      Inclusive of all taxes
                    </Text>
                    <Text py="10px" fontSize="12px">
                      Delivery by{" "}
                      <span style={{ fontWeight: "700" }}>July 10</span>
                    </Text>
                    <Button
                      className="addToStore"
                      position="absolute"
                      variant="#0f847e"
                      bg="#0f847e"
                      color="white"
                      fontWeight="700"
                      fontSize="16px"
                      right="4"
                      top="28"
                      height="2.8rem"
                      w="9rem"
                      transition="all 0.4s ease"
                      _hover={{ bg: "#129b94", transition: "all 0.4s ease" }}
                      onClick={() => {
                        handleCart(indivisualProduct?._id);
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </Flex>
                <Box textAlign="left" py="30px" color="#4f585e">
                  <Text fontSize="16px" fontWeight="700" py="10px">
                    Description
                  </Text>
                  <Text
                    className="desc"
                    fontSize="15px"
                    fontWeight="500"
                    color="#666f75"
                  >
                    {indivisualProduct?.about}
                  </Text>
                </Box>
                <SimilarProductCarousal />
                <DealsOfTheDayCarousel />
              </Box>
            </div>

            {/* //! RIGHT SIDE */}

            <Box className="right" w="25%" color="#4f585e" textAlign="left">
              <Box
                h="102px"
                border="1.5px solid #74777a"
                borderRadius="lg"
                position="relative"
                p="8px"
              >
                <Text
                  istruncated="true"
                  fontSize="17px"
                  fontWeight="700"
                  noOfLines={1}
                  height="30px"
                  firstWord="red"
                >
                  {indivisualProduct?.desc}
                </Text>
                <Flex
                  className="price"
                  h="2rem"
                  align="center"
                  w="60%"
                  marginTop="20px"
                  justify="space-between"
                >
                  <Text fontSize="16px" fontWeight="700">
                    ₹{indivisualProduct?.newPrice}
                  </Text>
                  <Text fontSize="13px" fontWeight="400" color="#8e9ca7">
                    MRP{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      ₹{indivisualProduct?.originalPrice}
                    </span>{" "}
                  </Text>
                  <Flex
                    align="center"
                    justify="start"
                    px="6px"
                    color="white"
                    fontSize="11px"
                    fontWeight="600"
                    height="60%"
                    w="36%"
                    bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                  >
                    {indivisualProduct?.offer}% OFF
                  </Flex>
                </Flex>
                <Button
                  className="addToStore"
                  position="absolute"
                  variant="#0f847e"
                  bg="#0f847e"
                  color="white"
                  fontWeight="700"
                  fontSize="16px"
                  right="4"
                  top="12"
                  height="2.4rem"
                  w="5.5rem"
                  transition="all 0.4s ease"
                  _hover={{ bg: "#09958e", transition: "all 0.4s ease" }}
                  onClick={handleCart}
                >
                  Add
                </Button>
              </Box>
              <Box className="cartDetails" padding="10px 0">
                {/* //! total cart */}
                <Text fontSize="16" fontWeight="600" py="30px">
                  16 Items in Cart
                </Text>
                <Link to="/cart">
                  <Button
                    className="viewCart"
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
                    View Cart <BiChevronRight fontSize="25px" />
                  </Button>
                </Link>
              </Box>
              <Box className="offers" marginY="50px">
                <Flex justify="space-between" align="center" py="20px">
                  <Text fontSize="14px" fontWeight="700">
                    Offers
                  </Text>
                  <Text
                    fontSize="12px"
                    fontWeight="700"
                    color="#0f847e"
                    cursor="pointer"
                  >
                    View All
                  </Text>
                </Flex>
                <Flex
                  color="#4abd9e"
                  align="center"
                  fontSize="12px"
                  fontWeight="600"
                >
                  <FcApproval fontSize="16px" />
                  &nbsp; &nbsp;Father's Day Sale is LIVE!
                </Flex>
                <Flex
                  color="#4abd9e"
                  align="center"
                  fontSize="12px"
                  fontWeight="600"
                >
                  <FcApproval fontSize="16px" />
                  &nbsp; &nbsp;Get extra 5% off on OneTouch products.
                </Flex>
              </Box>
            </Box>
          </Flex>
          <StatisticsAllCatagory />
        </Box>
      )}
    </Box>
  );
};

export default IndivisualProduct;
