import { ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/Products/ProductCard";
import StatisticsAllCatagory from "../Components/Categories/StatisticsAllCatagory";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/action";
import axios from "axios";

const Products = () => {
  const [Products, setProducts] = useState([]);
  //! getting data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productData = useSelector((store) => store.products.products);

  useEffect(() => {
    setProducts(productData);
  }, [dispatch, productData]);

  const loading = useSelector((store) => store.products.isLoading);
  const error = useSelector((store) => store.products.isError);

  //! sorting function
  const [menu, setmenu] = useState(null);

  const getProductsByPrice = (menu) => {
    axios
      .get(`https://pharmeasy-sumangiri.herokuapp.com/products/sort/${menu}`)
      .then((res) => {
        console.log(res.data, "ok data");
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (menu) {
      getProductsByPrice(menu);
    }
  }, [menu, dispatch]);

  const handleMenu = (value) => {
    setmenu(value);
    setCompany(null);
  };
  //!filtering functions
  const [company, setCompany] = useState();

  const getProductCompany = (company) => {
    axios
      .get(
        `https://pharmeasy-sumangiri.herokuapp.com/products//filter/company/${company}`
      )
      .then((res) => {
        console.log("company", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (company) {
      getProductCompany(company);
    }
  }, [company, dispatch]);

  const handleCompany = (value) => {
    setCompany(value);
    setmenu(null);
  };
  return (
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
        <Box w="1024px" margin="auto">
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
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">AllCatagories</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Covid Essentials</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
          <Flex
            className="content"
            //   h="40rem"
            w="100%"
            justify="space-between"
            color="#4f585e"
          >
            <Stack
              className="left"
              // border="1px solid blue"
              w="240px"
              textAlign="left"
              fontWeight="500"
            >
              <Text fontSize="26px" fontWeight="600">
                Filter
              </Text>
              <Box>
                <Box
                  className="category"
                  borderBottom="1.5px solid #eff1f2"
                  h="8rem"
                >
                  <Text py="20px" fontSize="16px" fontWeight="700">
                    Category
                  </Text>
                  {/* <RadioGroup defaultValue="covid essentials" justify="space-between" defaultChecked display="flex" align="end" > */}
                  <Flex justify="space-between">
                    <Text fontSize="14px">Covid Essentials</Text>
                    <Radio
                      colorScheme="green"
                      value="Covid Essentials"
                      defaultChecked
                      size="lg"
                      // marginLeft="8rem"
                    ></Radio>
                  </Flex>
                  {/* </RadioGroup> */}
                </Box>
                <Box
                  className="subCategory"
                  marginY="10px"
                  w="100%"
                  fontSize="14px"
                  h="313px"
                  borderBottom="1.5px solid #eff1f2"
                >
                  <Text py="20px" fontSize="16px" fontWeight="700">
                    Sub category
                  </Text>
                  <RadioGroup defaultValue="covid essentials" w="100%">
                    <Stack spacing={4} direction="column">
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Covid Test Kits</Text>
                        <Radio
                          colorScheme="green"
                          value="Covid Test Kits"
                          size="lg"
                        ></Radio>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Disinfectants</Text>
                        <Radio
                          colorScheme="green"
                          value="Disinfectants"
                          size="lg"
                        ></Radio>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Home Hygiene Essentials</Text>
                        <Radio
                          colorScheme="green"
                          value="Home Hygiene Essentials"
                          size="lg"
                        ></Radio>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Masks</Text>
                        <Radio
                          colorScheme="green"
                          value="Masks"
                          size="lg"
                        ></Radio>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Hand Sanitizer</Text>
                        <Radio
                          colorScheme="green"
                          value="Hand Sanitizer"
                          size="lg"
                        ></Radio>
                      </Flex>
                      <Text cursor="pointer" color="#0f847e" fontWeight="700">
                        View More
                      </Text>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box
                  className="CompanyName"
                  marginY="10px"
                  w="100%"
                  fontSize="14px"
                  h="373px"
                  borderBottom="1.5px solid #eff1f2"
                >
                  <Text py="20px" fontSize="16px" fontWeight="700">
                    Company
                  </Text>
                  <Flex
                    className="searchBar"
                    paddingBottom="20px"
                    align="center"
                    justify="center"
                  >
                    <InputGroup h="45px">
                      <Input
                        placeholder="Search"
                        h="45px"
                        focusBorderColor="#4f585e"
                        border="1px solid #4f585e"
                      />
                      <InputRightElement
                        h="45px"
                        children={
                          <IconButton
                            colorScheme="white"
                            color="gray"
                            h="45px"
                            //   border="2px solid red"
                            aria-label="Search database"
                            icon={<SearchIcon fontSize="18px" />}
                          />
                        }
                      />
                    </InputGroup>
                  </Flex>
                  <RadioGroup colorScheme="green" defaultValue={[]}>
                    <Stack spacing={4} direction="column">
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Dettol</Text>
                        <Radio
                          size="lg"
                          value="DETTOL"
                          onChange={(e) => handleCompany(e.target.value)}
                        ></Radio>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Revital</Text>
                        <Radio
                          size="lg"
                          value="REVITAL"
                          onChange={(e) => handleCompany(e.target.value)}
                        ></Radio>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Pharmeasy</Text>
                        <Radio
                          size="lg"
                          value="PHARMEASY"
                          onChange={(e) => handleCompany(e.target.value)}
                        ></Radio>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Everherb</Text>
                        <Radio
                          size="lg"
                          value="EVERHERB"
                          onChange={(e) => handleCompany(e.target.value)}
                        ></Radio>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Liveasy</Text>
                        <Radio
                          size="lg"
                          value="LIVEASY"
                          onChange={(e) => handleCompany(e.target.value)}
                        ></Radio>
                      </Flex>
                      <Text cursor="pointer" color="#0f847e" fontWeight="700">
                        View More
                      </Text>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box
                  className="Price"
                  marginY="10px"
                  w="100%"
                  fontSize="14px"
                  h="312px"
                >
                  <Text py="20px" fontSize="16px" fontWeight="700">
                    Price
                  </Text>
                  <CheckboxGroup colorScheme="green" defaultValue={[]}>
                    <Stack spacing={4} direction="column">
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">Below 99</Text>
                        <Checkbox size="lg" value="99"></Checkbox>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">100 - 199</Text>
                        <Checkbox size="lg" value="199"></Checkbox>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">200 - 299</Text>
                        <Checkbox size="lg" value="299"></Checkbox>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">300 - 399</Text>
                        <Checkbox size="lg" value="399"></Checkbox>
                      </Flex>
                      <Flex w="100%" justify="space-between">
                        <Text w="90%">400 - 499</Text>
                        <Checkbox size="lg" value="499"></Checkbox>
                      </Flex>
                      <Text cursor="pointer" color="#0f847e" fontWeight="700">
                        View More
                      </Text>
                    </Stack>
                  </CheckboxGroup>
                </Box>
              </Box>
            </Stack>
            <Box className="right" w="72%">
              <Flex className="filter" justify="space-between" align="center">
                <Text fontSize="26px" fontWeight="600">
                  Covid Essentials
                </Text>
                <Flex width="50%" align="center" justify="space-between">
                  <Text fontSize="14px" w="40%">
                    Sort by:
                  </Text>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<AiFillCaretDown />}
                      variant="outline"
                      w="16rem"
                      colorScheme="white"
                    >
                      Sort Price {menu}
                    </MenuButton>
                    <MenuList
                      w="15rem"
                      boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.01) 5px 20px 16px"
                    >
                      <MenuItem
                        fontWeight={
                          menu === "Price Low to High" ? "700" : "400"
                        }
                        color={
                          menu === "Price Low to High" ? "#0f847e" : "black"
                        }
                        bg={menu === "Price Low to High" ? "#e5fdf6" : "white"}
                        _hover={{ bg: "#d6f0ff" }}
                        onClick={(e) => handleMenu(e.target.value)}
                        value="asc"
                      >
                        Price Low to High
                      </MenuItem>
                      <MenuItem
                        fontWeight={
                          menu === "Price High to Low" ? "700" : "400"
                        }
                        color={
                          menu === "Price High to Low" ? "#0f847e" : "black"
                        }
                        bg={menu === "Price High to Low" ? "#e5fdf6" : "white"}
                        _hover={{ bg: "#d6f0ff" }}
                        onClick={(e) => handleMenu(e.target.value)}
                        value="desc"
                      >
                        Price High to Low
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </Flex>
              <Flex
                className="productCards"
                //   border="2px solid red"
                marginY="20px"
                flexWrap="wrap"
                // justify="space-between"
                gap="16px"
                textAlign="left"
              >
                {Products?.map((elem) => {
                  return <ProductCard key={elem.id} elem={elem} />;
                })}
              </Flex>
            </Box>
          </Flex>
        </Box>
      )}
      <StatisticsAllCatagory />
    </Box>
  );
};

export default Products;
