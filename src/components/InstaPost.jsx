import { Box } from '@chakra-ui/react';
import React from 'react';
import { InstagramMedia } from 'react-instagram-media'

function InstaPost(props) {
  return (
    <Box>
    <InstagramMedia
    uri="https://www.instagram.com/p/B866lKJgReK/"
   
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
  );
}

export default InstaPost;