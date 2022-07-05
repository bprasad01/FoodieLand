import { Box, Heading, Img, Wrap, WrapItem, Avatar, Text, VStack, HStack, Button, Flex } from '@chakra-ui/react';
import React, { Component } from 'react';
import Insta from '../Images/chicken.jpg'
import {BsHeart} from 'react-icons/bs' 
import {FaRegComment} from 'react-icons/fa'
import {RiShareBoxLine} from 'react-icons/ri' 
class InstaPost extends Component {
    state = { 
        posts : []
     }

    render() { 
        return (
            <Box maxW={1080} mx={"auto"} mt={20} >
            <Heading textAlign={"center"}>CheckOut @foodieland on Instagram</Heading>
            <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            <br />ut labore et dolore magna aliqua</Text>
               
            <Box>
            <Box w={200}>
                <Wrap>
                <WrapItem>
                  <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <VStack>
                <Heading fontSize={"sm"}>Username</Heading>
                <Text fontSize={"sm"}>Location</Text>
                </VStack>
                </Wrap>
                </Box>
                <Box>
                    <Img w={350} h={350} src={Insta}/>
                    <HStack>
                        <Button><BsHeart /></Button>
                        <Button><FaRegComment /></Button>
                        <Button><RiShareBoxLine /></Button>
                        </HStack>
                    <Flex justifyContent={"right"}>
                    <Button alignContent={"flex-end"}><RiShareBoxLine /></Button>
                    </Flex>
                </Box>
                </Box>
            </Box>
        );
    }
}
 
export default InstaPost;