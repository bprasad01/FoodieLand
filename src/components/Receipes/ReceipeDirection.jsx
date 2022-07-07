import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiCircle } from "react-icons/fi";
import Cooking from '../../Images/Cooking.jpg';

function ReceipeDirection(props) {
  return (
    <Box maxW={1080} mx={"auto"}>
      <Heading mt={20}>Direction</Heading>
      <Flex mt={5} w={700}>
        <Box>
          <VStack>
            <List spacing={5}>
              <ListItem fontSize={"md"} fontWeight={800}>
                <ListIcon as={FiCircle} />
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                <Text fontWeight={300} fontSize={"sm"} color={"gray.500"} mt={5} textAlign={"justify"} >
                  Lorem ipsum dolor sit amet. Vel sapiente omnis sit ipsa
                  quaerat ea eligendi animi est recusandae maiores et quaerat
                  repellendus in expedita numquam aut perferendis maiores. Eos
                  internos distinctio et laudantium dolorum et nulla nisi sed
                  architecto natus et nostrum quasi vel libero dignissimos ea
                  odio dolore. Et quia necessitatibus rem molestias doloremque
                  id incidunt laudantium qui voluptas sint.
                </Text>
                <Img src={Cooking} my={5} borderRadius={20} /> 
                <Text fontWeight={300} fontSize={"sm"} color={"gray.500"} mt={5} textAlign={"justify"}>
                  Lorem ipsum dolor sit amet. Vel sapiente omnis sit ipsa
                  quaerat ea eligendi animi est recusandae maiores et quaerat
                  repellendus in expedita numquam aut perferendis maiores. Eos
                  internos distinctio et laudantium dolorum et nulla nisi sed
                  architecto natus et nostrum quasi vel libero dignissimos ea
                  odio dolore. Et quia necessitatibus rem molestias doloremque
                  id incidunt laudantium qui voluptas sint.
                </Text>
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle} />
                2. Assumenda, quia temporibus eveniet a libero incidunt suscipit
                <Text fontWeight={300} fontSize={"sm"} color={"gray.500"} mt={5} textAlign={"justify"}>
                  Lorem ipsum dolor sit amet. Vel sapiente omnis sit ipsa
                  quaerat ea eligendi animi est recusandae maiores et quaerat
                  repellendus in expedita numquam aut perferendis maiores. Eos
                  internos distinctio et laudantium dolorum et nulla nisi sed
                  architecto natus et nostrum quasi vel libero dignissimos ea
                  odio dolore. Et quia necessitatibus rem molestias doloremque
                  id incidunt laudantium qui voluptas sint.
                </Text>
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle} />
                3. Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                <Text fontWeight={300} fontSize={"sm"} color={"gray.500"} mt={5} textAlign={"justify"}>
                  Lorem ipsum dolor sit amet. Vel sapiente omnis sit ipsa
                  quaerat ea eligendi animi est recusandae maiores et quaerat
                  repellendus in expedita numquam aut perferendis maiores. Eos
                  internos distinctio et laudantium dolorum et nulla nisi sed
                  architecto natus et nostrum quasi vel libero dignissimos ea
                  odio dolore. Et quia necessitatibus rem molestias doloremque
                  id incidunt laudantium qui voluptas sint.
                </Text>
              </ListItem>
              <Divider />
            </List>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default ReceipeDirection;
