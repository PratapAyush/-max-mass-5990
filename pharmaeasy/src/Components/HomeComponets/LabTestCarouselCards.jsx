import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
export default function LabTestCarousalCards({ elem }) {
  return (
    <Center height={"15rem"} marginX="8px">
      <Stack
        
        w={{ sm: "100%", md: "600px" }}
        height={{ sm: "476px", md: "15rem" }}
        direction={{ base: "column", md: "row" }}
        // padding={2}
        
      >
        <Flex
          borderWidth="2px"
          position="relative"
          height="99%"
          w="100%"
          direction="column"
          // border="1px solid red"
          bg={useColorModeValue("white", "gray.900")}
          padding={"16px"}
          transition="all 0.4s ease"
          _hover={{
            boxShadow:
              " rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 4px 32px",
            transition: "all 0.4s ease",
            border: "2px solid #0f847e",
          }}
          borderRadius="8px"
          overflow="hidden"
        >
          <Flex w="25%" align="center">
            <Image
              objectFit="cover"
              w="90%"
              h="90%"
              // boxSize="100%"
              src={elem.img}
            />
          </Flex>
          <Flex direction="column" w="100%" px="8px" h="45%" color="#4f585e">
            <Text
              fontSize="15px"
              fontWeight="600"
              textAlign="left"
              height="30px"
              istruncated="true"
              noOfLines={1}
              w="100%"
              padding="8px 0"
            >
              {elem.head}
            </Text>
            <Text textAlign="left" fontSize="14px" fontWeight="400" py="5px">
              {" "}
              {elem.desc}{" "}
            </Text>
            <Text
              textAlign="left"
              fontSize="12px"
              fontWeight="400"
              color="silver"
            >
              {" "}
              {elem.tests}{" "}
            </Text>
          </Flex>
          <Flex
            // border="2px solid black"
            bottom="0"
            w="100%"
            h="30%"
            justify="space-between"
            align="center"
          >
            <Box color="#4f585e">
              <Text fontWeight="700">
                ₹{elem.price} &nbsp;
                <span style={{ fontWeight: "400", fontSize: "14px" }}>
                  Onwards
                </span>{" "}
              </Text>
            </Box>
            <Flex
              bg="#ffffff"
              position="absolute"
              color="#0f847e"
              fontWeight="700"
              h="18%"
            right="0"
              align="center"
              transition="all 0.4s ease"
              w="40%"
              cursor="pointer"
              borderLeftRadius="md"
              justify="center"
              className="bookNow"
              _hover={{ 
                bg:"#0f847e",
                color:"white",
                transition:"all 0.4s ease"
              }}
            >
              <Text fontSize="15px">Book Now</Text>
              <FiChevronRight style={{ fontSize: "22px" }} />
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Center>
  );
}
