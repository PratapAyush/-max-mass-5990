import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Stack,
    Box,
    FormLabel,
    Input,
    Text,
    Flex,
    Image,
  } from "@chakra-ui/react";
  import React from "react";
  
  export function PincodeToLogin() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
  
   
    return (
      <div>
        {/* <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}> */}
        <Text onClick={onOpen} color="#0f847e" fontWeight="700" w="23rem">
          
            <Flex bg="transparent" borderRadius="md" color="#0f847e" border="1px solid silver" w="100%" h="4.2rem" align="center" cursor={'pointer'}> 
                    <Box p="16px">
                      <Image w="90%" src="https://assets.pharmeasy.in/web-assets/dist/ff969f07.svg"/>
                    </Box>
                    <Box p="18px" > 

                        Login to View Addresses

                    </Box>
                  </Flex>
        </Text>
        {/* </Button> */}
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
              bg="#0f847e"
              p="28px"
              borderRadius="0"
              color="white"
              _hover={{ bg: "#0f847e" }}
              _active={{ bg: "#0f847e" }}
              fontSize="14px"
            />
            <DrawerHeader
              borderBottomWidth="1px"
              bg="#0f847e"
              minH="110px"
              // border="1px solid red"
              align="end"
              py="0"
              px="40px"
            >
              <Flex justify="space-between" h="100%" w="100%">
                <Flex
                  h="80%"
                  w="50%"
                  // border="1px solid red"
                  justify="center"
                  // py="10px"
                  align="end"
                >
                  <Image
                    h="62%"
                    src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                  />
                </Flex>
                <Flex
                  align="end"
                  w="50%"
                  h="100%"
                  // border="1px solid red"
                  justify="end"
                >
                  <Image
                    h="75%"
                    src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg"
                  />
                </Flex>
              </Flex>
            </DrawerHeader>
  
            <DrawerBody px="50px">
              <Stack spacing="40px">
                <Box>
                  <FormLabel
                    htmlFor="phone"
                    fontWeight="700"
                    py="12px"
                    color="#4f585e"
                  >
                    Quick Login / Register
                  </FormLabel>
                  <Input
                    h="2.8rem"
                    ref={firstField}
                    id="phone"
                    outline=".1px solid black"
                    focusBorderColor="none"
                    placeholder="Enter your phone number"
                  />
                </Box>
                <Button h="2.8rem" variant="#0f847e" bg="#0f847e" color="#fff" _hover={{bg:"#159a94"}}>
                  Continue
                </Button>
              </Stack>
              <Text fontSize="12px" color="#4f585e" py="20px" >By clicking continue, you agree with our <span style={{color:"#159a94", cursor:"pointer"}} > Privacy Policy</span></Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
  