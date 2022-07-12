import {
  Box,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Input,
  Select,
  Spacer,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import chefImg from "../../Images/Cook-contact.png";
function ContactBanner(props) {
  return (
    <Container maxW={1080} mx={"auto"} mt={20}>
      <Stack>
        <Center>
          <Heading fontSize={"6xl"} fontWeight={800}>
            Contact us
          </Heading>
        </Center>
      </Stack>
      <Flex mt={20}>
        <Box bgGradient="linear(to-b, white.0, blue.100)" borderRadius={30}>
          <Img src={chefImg}  />
        </Box>
        <Box mx={20}>
          <FormControl>
            <Stack direction={"row"}>
              <Box mr={5}>
                <FormLabel htmlFor="first-name" color={"gray.400"}>Name</FormLabel>
                <Input id="first-name" placeholder="Enter Your name" borderRadius={15} w={250} />
              </Box>
              
              <Box>
                <FormLabel htmlFor="first-name" color={"gray.400"}>Email</FormLabel>
                <Input id="first-name" placeholder="Enter Your Email..." borderRadius={15} w={250}/>
              </Box>
            </Stack>
            <Stack direction={"row"} mt={10}>
              <Box mr={5}>
                <FormLabel htmlFor="first-name" color={"gray.400"}>Subject</FormLabel>
                <Input id="first-name" placeholder="Enter subject..." borderRadius={15} w={250}/>
              </Box>
              
              <Box>
                <FormLabel htmlFor="first-name" color={"gray.400"}>Enquiry Type</FormLabel>
                <Select id="country" placeholder="Advertising" borderRadius={15} w={250}>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </Box>
            </Stack>
            <Stack mt={10}>
                <Box>
                <FormLabel htmlFor="first-name"  color={"gray.400"}>Messages</FormLabel>
                <Textarea name="notes" h={200} borderRadius={15}/>
                </Box>
            </Stack>
          </FormControl>
          </Box>
          </Flex>
          <Stack mt={5}>
          <Center>
          <Input type='submit' bgColor={"#000"} color={"#fff"} size={"lg"} w={150} borderRadius={10}/>
          </Center>
          </Stack>
    </Container>
  );
}

export default ContactBanner;
