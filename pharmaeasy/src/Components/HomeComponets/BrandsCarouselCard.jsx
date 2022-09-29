import {
    Center,
    Flex,
    Image,
    Stack,
  } from "@chakra-ui/react";
  export default function BrandsCarouselCards({ elem }) {
    return (
      <Center h="14.3rem" marginX="5px">
        <Stack
          borderRadius="lg"
          w={{ sm: "100%", md: "580px" }}
          height={{ sm: "476px", md: "13.5rem" }}
          direction={{ base: "column", md: "row" }}
          padding={2}
          
        >
          <Flex
            height="100%"
            w="100%"
            cursor="pointer"
            transition="all 0.4s ease"
            _hover={{
                transform:"translateY(-3px)",
              boxShadow:
                " rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.15) 0px 2px 12px",
              transition: "all 0.4s ease",
            }}
            borderRadius="md"
            overflow="hidden"
          >
            <Image src={elem.img}/>
          </Flex>
        </Stack>
      </Center>
    );
  }
  