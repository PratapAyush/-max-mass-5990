import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    IconButton,
    Text,
    Flex,
    useToast,
  } from '@chakra-ui/react'
  import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeCartItems } from '../../Redux/Cart/action';
// import { addCompany } from '../Redux/company/action'

export function RemoveModal({id,title}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast= useToast()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    const dispatch = useDispatch();

    //! Remove from cart--------------------->
    const handleRemove = () => {
      setTimeout(()=>{
        dispatch(removeCartItems(id,toast));
    },200)
    };

    return (
      <Box position="absolute" 
      top="6"
      right="4">
        <IconButton
        size="sm"
        onClick={onOpen}
        aria-label="Search database"
        isRound="true"
        bg="white"
        variant="white"
        icon={<RiDeleteBin6Line fontSize="22px" color="#c7c9cb" />}
        transition="all 0.7s ease"
        _hover={{
          transform: "scale(1.3)",
          transition: "all 0.4s ease",
          boxShadow:" rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
        }}
      />
       
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
         
        >
          <ModalOverlay />
          <ModalContent  marginTop="15rem">

            <ModalCloseButton />
            <ModalBody p={6} >
              <Text w="90%" color="#4f585e" fontweight="700">Are you sure you want to remove <span style={{color:"#000000", fontWeight:"600"}}>{title}</span>  from your cart?</Text>
            </ModalBody>
  
            <ModalFooter   p="0" h="3.5rem" border="2px solid #d5d7d8" borderBottomRadius="8px">
                <Flex w="50%" h="100%" borderRight="1px solid #d5d7d8">
                <Button borderRadius="0" color="#4f585e"   w="100%" h="100%" onClick={handleRemove}>
                YES
              </Button>
                </Flex>
                <Flex w="50%" h="100%" borderLeft="1px solid #d5d7d8">
                <Button borderRadius="0" color="#4f585e" onClick={onClose} w="100%" h="100%">NO</Button>
                </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }