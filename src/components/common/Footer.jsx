import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Stack,
  Divider,
  Button,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(props) {
  return (
    <>
      <Box ml={10} mt={10} mr={10}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text fontSize='2xl' as='i' color='#001219' fontWeight="800">Foodieland</Text>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>
          <Spacer />
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Link to="/home">Receipe</Link>
              <Link to="/home">Blog</Link>
              <Link to="/home">Contact</Link>
              <Link to="/home">About Us</Link>
            </Stack>
          </Flex>
        </Flex>
        <Divider />
        <Box mt={5} mb={10}>
          <Flex>
            <Flex>
              <Text fontWeight="600" justifyContent="center">2020 FlowBase Powered by WebFlow</Text>
            </Flex>
            <Spacer />
            <Flex alignItems={"end"}>
              <Stack direction={"row"} spacing={7}>
                <Button>{<FaFacebook />}</Button>
                <Button>{<FaTwitter />}</Button>
                <Button>{<FaInstagram />}</Button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
