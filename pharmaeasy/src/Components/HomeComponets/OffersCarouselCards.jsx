import {
  Center,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
export default function OffersCarouselCards({ elem }) {
  return (
    <Center h="12rem" marginX="10px">
      <Stack
        borderRadius="lg"
        w={{ sm: "100%", md: "580px" }}
        height={{ sm: "476px", md: "10rem" }}
        direction={{ base: "column", md: "row" }}
        // padding={2}
      >
        <Flex
          borderWidth="2px"
          height="70%"
          w="100%"
          cursor="pointer"
          bg={useColorModeValue("white", "gray.900")}
          padding={"16px 20px"}
          transition="all 0.4s ease"
          _hover={{
            transform: "translateZ(18px) scale(1.1)",
            zIndex:"400",
            boxShadow:
              " rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 4px 22px",
            transition: "all 0.3s ease",
          }}
          borderRadius="md"
        >
          <Flex w="30%" align="center">
            <Image
              objectFit="cover"
              w="90%"
              h="90%"
              // boxSize="100%"
              src={elem.img}
            />
          </Flex>
          <Flex direction="column" w="70%" px="8px" color="#4f585e">
            <Text
              fontSize="14px"
              fontWeight="600"
              textAlign="left"
              height="45px"
              istruncated="true"
              noOfLines={2}
            >
              {elem.desc}
            </Text>
            <Text textAlign="left" fontSize="14px" fontWeight="700">
              {" "}
              <span style={{ color: "silver", fontSize: "14px" }}>
                Code:
              </span>{" "}
              {elem.code}{" "}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Center>
  );
}
