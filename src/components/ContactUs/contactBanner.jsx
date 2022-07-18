import React, { useState } from "react";
import Joi, { schema } from "joi-browser";
import {
  Box,
  Button,
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
  const [contact, setContact] = useState({
    username: "",
    email: "",
    subject: "",
    enquiry: "",
    message: "",
  });


  schema = {
    username: Joi.string().required(),
    email: Joi.string().required(),
    subject: Joi.string().required(),
    enquiry: Joi.string().required(),
    message: Joi.string().required(),
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(contact, schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    console.log(errors);
    setErrors({ errors: errors || {} })

    if (errors) return;

    console.log("Submitted");
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name] : value };
    const schemas = { [name] : schema[name]};
    const { error } = Joi.validate(obj, schemas);
    return error ? error.details[0].message : null;
    
   };
 
   const handleChange = ({ currentTarget: input }) => {

     const errorMsg = { ...errors };
     console.log(errorMsg);
     const errorMessage = validateProperty(input);
     if (errorMessage) errorMsg[input.name] = errorMessage;
     else delete errorMsg[input.name];
 
    const contacts = {...contact};
     contacts[input.name] = input.value;
     setContact( contacts, errorMsg )
     
   };

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
          <form onSubmit={handleSubmit}>
            <Stack direction={"row"}>
              <Box mr={5}>
                <InputData
                  name="username"
                  value={contact.username}
                  label="Username"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  error={console.log(errors.username)}
                  // error={errors.username}
                />
              </Box>

              <Box>
                <InputData
                  name="email"
                  value={contact.email}
                  label="Email"
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                  // error={errors.username}
                />
              </Box>
            </Stack>
            <Stack direction={"row"} mt={10}>
              <Box mr={5}>
                <InputData
                  name="subject"
                  value={contact.subject}
                  label="Subject"
                  placeholder="Enter Your Subject"
                  onChange={handleChange}
                  // error={errors.username}
                />
              </Box>

              <Box>
                <SelectBox
                  name="enquiry"
                  label="Enquiry Type"
                  placeholder="Advertisement"
                  value={contact.enquiry}
                  onChange={handleChange}
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
                  value={contact.message}
                  onChange={handleChange}
                  // error={errors.username}
                />
              </Box>
            </Stack>
            <Stack mt={5}>
              <Center>
                <Button
                  type="submit"
                  name="submit"
                  bgColor={"#000"}
                  color={"#fff"}
                  size={"lg"}
                  w={150}
                  borderRadius={10}
                  
                >Submit</Button>
              </Center>
            </Stack>
            </form>
          </FormControl>
        </Box>
      </Flex>
    </Container>
  );
}

export default ContactBanner;
