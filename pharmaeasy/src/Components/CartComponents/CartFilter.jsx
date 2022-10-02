import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const CartFilter = () => {
  const [cartMenu, setCartMenu] = useState(1);
  return (
    <Box marginY="12px">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<AiFillCaretDown />}
          variant="outline"
          w="6.5pxrem"
          colorScheme="white"
          fontWeight="700"
          color="#6e787f"
        >
         Qty {cartMenu}
        </MenuButton>
        <MenuList
        border="1.5px solid #d3d4d4"
        marginTop="-5px"
        h="14rem"
        overflow="scroll"
        px="10px"
        overflowX="hidden"
          w="15rem"
          boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.01) 5px 20px 16px"
        >
          <MenuItem
            fontWeight={cartMenu === "1" ? "700" : "400"}
            color={cartMenu === "1" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "1" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="1"
          >
           Qty 1
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "2" ? "700" : "400"}
            color={cartMenu === "2" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "2" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="2"
          >
           Qty 2
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "3" ? "700" : "400"}
            color={cartMenu === "3" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "3" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="3"
          >
           Qty 3
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "4" ? "700" : "400"}
            color={cartMenu === "4" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "4" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="4"
          >
            Qty 4
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "5" ? "700" : "400"}
            color={cartMenu === "5" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "5" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="5"
          >
            Qty 5
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "6" ? "700" : "400"}
            color={cartMenu === "6" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "6" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="6">
            Qty 6
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "7" ? "700" : "400"}
            color={cartMenu === "7" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "7" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="7"
          >
            Qty 4
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "8" ? "700" : "400"}
            color={cartMenu === "8" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "8" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="8"
          >
            Qty 8
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "9" ? "700" : "400"}
            color={cartMenu === "9" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "9" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="9"
          >
            Qty 9
          </MenuItem>
          <MenuItem
            fontWeight={cartMenu === "10" ? "700" : "400"}
            color={cartMenu === "10" ? "#0f847e" : "#4f585e"}
            bg={cartMenu === "10" ? "#e5fdf6" : "white"}
            _hover={{ bg: "#d6f0ff" }}
            onClick={(e) => setCartMenu(e.target.value)}
            value="10"
          >
            Qty 10
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default CartFilter;
