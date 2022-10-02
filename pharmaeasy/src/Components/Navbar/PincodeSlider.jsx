import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Input,
  Box,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import { PincodeToLogin } from "./PincodeToLogin";

export function PincodeSlider() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button
        fontWeight="500"
        letterSpacing=".1px"
        h="100%"
        variant="primary"
        bg="white"
        color="#0f847e"
        rightIcon={<AiFillCaretDown color="#8897a2" size="1.2rem" />}
        colorScheme="teal"
        onClick={onOpen}
        borderRightRadius="0"
      >
        Select Pincode
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        position="relative"
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            position="absolute"
            left="-50px"
            top="25px"
            bg="#ffffff"
            p="28px"
            borderRadius="0"
            color="gray"
            _hover={{ bg: "#ffffff" }}
            _active={{ bg: "#ffffff" }}
            fontSize="14px"
          />

          <Heading
            fontSize="28px"
            w="60%"
            color="#4f585e"
            paddingTop="80px"
            paddingBottom="20px"
            px="40px"
          >
            Choose your Location
          </Heading>

          <DrawerBody p="10px 40px">
            <Stack spacing="16px">
              <Flex display="flex" h="100%" align="center">
                <Input
                  h="2.75rem"
                  w="72%"
                  ref={firstField}
                  id="PIN"
                  outline=".1px solid black"
                  focusBorderColor="none"
                  placeholder="Enter PIN Code"
                  borderRightRadius="none"
                  type="number"
                />
                <Button
                  fontSize="17px"
                  w="28%"
                  h="2.8rem"
                  variant="#0f847e"
                  bg="#0f847e"
                  color="#fff"
                  _hover={{ bg: "#159a94" }}
                  borderLeftRadius="none"
                >
                  Check
                </Button>
              </Flex>
              <Flex display="flex" h="100%" align="center">
                <PincodeToLogin />
              </Flex>
              <Flex>
                <Flex
                  bg="#f3f6fa"
                  borderRadius="md"
                  color="#4f585e"
                  w="100%"
                  h="4.5rem"
                  align="center"
                >
                  <Box p="16px">
                    <Image src="https://assets.pharmeasy.in/web-assets/dist/90ee736b.svg" />
                  </Box>
                  <Box p="18px" fontSize="15px">Serving more than 1,000 towns and cities in India.</Box>
                </Flex>
              </Flex>
                <Flex
                  bg="#e9f9ff"
                  borderRadius="md"
                  color="#4f585e"
                  w="100%"
                  h="3.5rem"
                  align="center"
                >
                  <Box p="16px">
                    <Image src="https://assets.pharmeasy.in/web-assets/dist/0c22e009.svg?dim=0x32&dpr=2&q=100" />
                  </Box>
                  <Box p="18px" fontSize="14px">Over 30,00,000 orders safely delivered <span style={{color:"#50cdff", cursor:"pointer"}}> Know More </span></Box>
                </Flex>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
