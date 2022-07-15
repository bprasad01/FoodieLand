import React, { useState }  from "react";
import Joi, { schema } from "joi-browser";
import {
  Box,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  Img,
  Input,
  Stack,
} from "@chakra-ui/react";
import chefImg from "../../Images/Cook-contact.png";
import InputData from "../common/Input";
import SelectBox from "../common/SelectBox";
import TextArea from "../common/TextArea";

function ContactBanner(props) {

  const [ contact, setContact ] = useState({
    username : "",
    email : "",
    subject : "",
    enquiry : "",
    message : ""
  });

  schema = {
    username : Joi.string().required(),
    email : Joi.string().required(),
    subject : Joi.string().required(),
    enquiry : Joi.string().required(),
    message : Joi.string().required()
  }

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
          <Img src={chefImg} />
        </Box>
        <Box mx={20}>
          <FormControl>
            <Stack direction={"row"}>
              <Box mr={5}>
                <InputData
                  name="username"
                  // value={userData.username}
                  label="Username"
                  placeholder="Enter Your Name"
                  // onChange={this.handleChange}
                  // error={errors.username}
                />
              </Box>

              <Box>
                <InputData
                  name="email"
                  // value={userData.username}
                  label="Email"
                  placeholder="Enter Your Email"
                  // onChange={this.handleChange}
                  // error={errors.username}
                />
              </Box>
            </Stack>
            <Stack direction={"row"} mt={10}>
              <Box mr={5}>
                <InputData
                  name="subject"
                  // value={userData.username}
                  label="Subject"
                  placeholder="Enter Your Subject"
                  // onChange={this.handleChange}
                  // error={errors.username}
                />
              </Box>

              <Box>
                <SelectBox
                  name="enquiry"
                  label="Enquiry Type"
                  placeholder="Advertisement"
                  // value={userData.username}
                  // onChange={this.handleChange}
                  // error={errors.username}
                />
              </Box>
            </Stack>
            <Stack mt={10}>
              <Box>
                <TextArea
                  name="message"
                  label="Message"
                  placeholder="Enter tour message here...."
                   // value={userData.username}
                  // onChange={this.handleChange}
                  // error={errors.username}
                />
                
              </Box>
            </Stack>
          </FormControl>
        </Box>
      </Flex>
      <Stack mt={5}>
        <Center>
          <Input
            type="submit"
            bgColor={"#000"}
            color={"#fff"}
            size={"lg"}
            w={150}
            borderRadius={10}
          />
        </Center>
      </Stack>
    </Container>
  );
}

export default ContactBanner;
