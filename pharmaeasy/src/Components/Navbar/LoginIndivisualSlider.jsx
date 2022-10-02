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
  InputRightElement,
  InputGroup,
  FormHelperText,
  FormErrorMessage,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAuthUser, registerAuthUser } from "../../Redux/Auth/action";

export function LoginIndivisualSlider({ handleRegister, color, font }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");

  const isRegistered = useSelector((store) => store.auth.isRegistered);
  const isAuth = useSelector((store) => store.auth.isAuth);

  const toast = useToast();
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (email && password) {
      if (password !== reenterPassword) {
        toast({
          title: "password didn't match",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      } else {
        let payload = { email: email, password: password };
        dispatch(loginAuthUser(payload,toast));
      }
    } else {
      toast({
        title: 'Please fill all the fields',
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (isAuth) {
      onClose();
      // alert("Logged in Successfully")
    } else {
      // alert("Invalid user")
    }
  }, [isAuth, dispatch,onClose]);
  return (
    <div>
      {/* <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}> */}
      <Center>
        <Text fontWeight="500" color={color} fontSize={font} onClick={() => onOpen()} cursor="pointer">
          Login
        </Text>
      </Center>
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
            <Stack spacing="20px">
              <Box>
                <FormLabel
                  htmlFor="phone"
                  fontWeight="700"
                  py="12px"
                  color="#4f585e"
                >
                  Quick Login
                </FormLabel>
                <Stack spacing="20px">
                  <Input
                    h="2.8rem"
                    ref={firstField}
                    // id="email"
                    type="email"
                    pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                    letterSpacing=".2px"
                    outline=".1px solid black"
                    focusBorderColor="none"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <InputGroup h="2.8rem">
                    <Input
                      h="2.8rem"
                      letterSpacing=".2px"
                      outline=".1px solid black"
                      focusBorderColor="none"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="2rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Input
                    h="2.8rem"
                    letterSpacing=".2px"
                    outline=".1px solid black"
                    focusBorderColor="none"
                    type={"password"}
                    placeholder="Re-enter password"
                    value={reenterPassword}
                    onChange={(e) => {
                      setReenterPassword(e.target.value);
                    }}
                  />
                </Stack>
              </Box>
              <Button
                h="2.8rem"
                variant="#0f847e"
                bg="#0f847e"
                color="#fff"
                _hover={{ bg: "#159a94" }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Stack>
            <Text fontSize="12px" color="#4f585e" py="20px">
              By clicking continue, you agree with our{" "}
              <span style={{ color: "#159a94", cursor: "pointer" }}>
                {" "}
                Privacy Policy
              </span>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
