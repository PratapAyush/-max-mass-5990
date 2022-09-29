import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function LargeWithLogoCentered() {
  return (
    <Box bg="#f4f7fb" color={useColorModeValue("gray.700", "gray.200")} py={10}>
      <Container as={Stack} maxW={"100%"}  color="#4f585e" px="50px">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={15}
        >
          <Stack align={"flex-start"} spacing="22px">
            <Stack align={"flex-start"} spacing="6px">
              <Heading
                marginBottom="8px"
                fontSize="16px"
                fontWeight="700"
                color="#4f585e"
              >
                Company
              </Heading>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                About Us
              </Link>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link
                  style={{ textDecoration: "none" }}
                  href={"#"}
                >
                  Careers
                </Link>
                <Tag
                  size={"sm"}
                  bg={useColorModeValue("green.300", "green.800")}
                  ml={2}
                  color={"white"}
                >
                  New
                </Tag>
              </Stack>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Blog
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Partner with PharmEasy
              </Link>
            </Stack>
            {/* ok */}
            <Stack align={"flex-start"} spacing="6px">
              <Heading
                marginBottom="8px"
                fontSize="16px"
                fontWeight="700"
                color="#4f585e"
              >
                Our Services
              </Heading>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Order Medicine
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Healthcare Products
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Lab Tests
              </Link>
            </Stack>
          </Stack>
          <Stack align={"flex-start"} spacing="6px">
            <Heading
              marginBottom="8px"
              fontSize="16px"
              fontWeight="700"
              color="#4f585e"
            >
              Featured Categories
            </Heading>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Covid Essentials{" "}
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Personal Care
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={
                "#"
              }
            >
              Health Food and Drinks
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Skin Care
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Home Care
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Ayurvedic Care
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Sexual Wellness
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Fitness & Supplements
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Mother and Baby Care
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Healthcare Devices
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={
                "#"
              }
            >
              Surgicals and Dressings
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Health Condition
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Diabetic Care
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Elderly Care
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={
                "#"
              }
            >
              Accessories And Wearables
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              Beauty
            </Link>
          </Stack>
          <Stack align={"flex-start"} spacing="22px">
            <Stack align={"flex-start"} spacing="6px">
              <Heading
                marginBottom="8px"
                fontSize="16px"
                fontWeight="700"
                color="#4f585e"
              >
                Need Help
              </Heading>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Browse All Medicines
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Browse All Molecules
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Browse All Cities & Areas
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                FAQs
              </Link>
            </Stack>
            <Stack align={"flex-start"} spacing="6px">
              <Heading
                marginBottom="8px"
                fontSize="16px"
                fontWeight="700"
                color="#4f585e"
              >
                Policy Info
              </Heading>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Editorial Policy
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Privacy Policy
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Vulnerability Disclosure Policy
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Terms and condition
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Customer Support Policy
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Return Policy
              </Link>
            </Stack>
          </Stack>
          <Stack
            align="flex-start"
            spacing="6px"
            width="100%"
            // border="1px solid red"
          >
            <Heading
              marginBottom="12px"
              fontSize="16px"
              fontWeight="700"
              color="#4f585e"
            >
              FOLLOW US
            </Heading>
            <Stack direction={"row"} align={"center"} spacing="5">
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                <IconButton
                  colorScheme="#0f847e"
                  bg="#0f847e"
                  aria-label="Call Segun"
                  size="md"
                  isRound={true}
                  icon={<AiOutlineInstagram fontSize="34px" />}
                />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                <IconButton
                  colorScheme="#0f847e"
                  bg="#0f847e"
                  aria-label="Call Segun"
                  size="md"
                  isRound={true}
                  icon={<FaFacebookF fontSize="24px" />}
                />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={
                  "#"
                }
              >
                <IconButton
                  colorScheme="#0f847e"
                  bg="#0f847e"
                  aria-label="Call Segun"
                  size="md"
                  isRound={true}
                  icon={<FaYoutube fontSize="24px" />}
                />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                <IconButton
                  colorScheme="#0f847e"
                  bg="#0f847e"
                  aria-label="Call Segun"
                  size="md"
                  isRound={true}
                  icon={<AiOutlineTwitter fontSize="32px" />}
                />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Flex paddingBottom="20px" px={10} justify="space-between" >
      <Stack
            align="flex-start"
            spacing="6px"
            width="60%"
            // direction={"row"}
          >
            <Heading
              marginBottom="12px"
              fontSize="16px"
              fontWeight="700"
              color="#4f585e"
              paddingTop="10"
            >
              OUR PARTNERS
            </Heading>
            <Stack direction={"row"} align={"center"} spacing="5">
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg" />
                <Image w="2.6rem" src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg" />
            </Stack>
            </Stack>
            <Flex align="end" width="22%">
              <Text pt={6} fontSize={"md"}  color="#4f585e" textAlign="left" width="100%"  py="6px">
                © 2022 PharmEasy. All Rights Reserved
              </Text>
            </Flex>
      </Flex>
    </Box>
  );
}
