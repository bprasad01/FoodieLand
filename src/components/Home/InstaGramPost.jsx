import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { InstagramMedia } from 'react-instagram-media'

function InstaGramPost(props) {
    return (
       <Box maxW={1080} mx={"auto"}>
 <Stack mt={25}>
        <Heading fontSize={"4xl"} mt={20} textAlign={"center"}>
          Check Out @foodieland on Instagram
        </Heading>
        <Text fontSize={"md"} mt={15} textAlign={"center"}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </Stack>
        <Box>
        <InstagramMedia
  uri="https://www.instagram.com/explore/tags/dummy/?hl=en"
 
  renderItem={
    ({ display_url, video_url, type, caption }) => {
      if (type === 'video') {
        return (
          <video poster={display_url} controls>
            <source src={video_url} type="video/mp4" />
          </video>
        )
      }
 
      return (
        <img
          src={display_url}
          alt={caption}
        />
      )
    }
  }
 
  renderMediaList={children => (
    <div className="swiper">
      {children}
    </div>
  )}
 
  renderError={() => (
    <div>I have failed to parse it</div>
  )}
 
  renderLoading={() => (
    <div>Loading</div>
  )}
/>

        </Box>
       </Box>
    );
}

export default InstaGramPost;