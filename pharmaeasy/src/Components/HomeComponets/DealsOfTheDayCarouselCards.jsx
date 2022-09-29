import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
export default function DealsOfTheDayCarouselCards({ elem }) {
  return (
    <Center height={"20rem"} marginX="8px">
      <Stack
        w={{ sm: "100%", md: "600px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        // padding={2}
        // border="1px solid red"
      >
        <Flex
          position="relative"
          height="99%"
          w="100%"
          direction="column"
          transition="all 0.4s ease"
          borderRadius="8px"
          overflow="hidden"
          cursor="pointer"
        >
          <Flex
            w="100%"
            align="center"
            h="70%"
            borderWidth="2px"
            px="20px"
            paddingTop="30px"
            bg={useColorModeValue("white", "gray.900")}
            borderRadius="8px"
            justify={"center"}
            overflow="hidden"
          >
            <Image
              objectFit="cover"
              w="30%"
              h="90%"
              transition="all 0.4s ease"
              // boxSize="100%"
              _hover={{ transform: "scale(1.2)", transition: "all 0.4s ease" }}
              src={elem.img}
            />
          </Flex>
          <Flex direction="column" w="100%" h="30%" color="#4f585e" px="5px">
            <Text
              fontSize="15px"
              fontWeight="600"
              textAlign="left"
              height="50px"
              istruncated="true"
              lineHeight={"20px"}
              noOfLines={2}
              w="100%"
              padding="8px 0"
            >
              {elem.name}
            </Text>
            <Text textAlign="left" fontSize="14px" fontWeight="400">
              {" "}
              {elem.desc}{" "}
            </Text>
            <Box h="20px">
              {elem.OrigionalPrice && (
                <Text
                  textAlign="left"
                  fontSize="13px"
                  fontWeight="400"
                  color="#8897a2"
                >
                  {" "}
                  MRP{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    ₹{elem.OrigionalPrice}
                  </span>{" "}
                </Text>
              )}
            </Box>
            {elem.price && (
              <Text textAlign="left" fontSize="16px" fontWeight="700">
                {" "}
                ₹{elem.price}{" "}
              </Text>
            )}
          </Flex>
          {elem.offer && (
            <Flex
              h="1.7rem"
              w="40%"
              align="center"
              position="absolute"
              top="2px"
              left="2px"
              borderTopLeftRadius={"6px"}
              px="8px"
              bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
            >
              <Text fontSize="13px" fontWeight="700" color="#fff">
                {elem.offer}% OFF
              </Text>
            </Flex>
          )}
        </Flex>
      </Stack>
    </Center>
  );
}
