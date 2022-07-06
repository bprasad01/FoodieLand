import "../css/style.css"
import { Box } from "@chakra-ui/react";
import Banner from  './Banner';

import { SlideData } from "../Slidedata";


export default function Carousels() {

  return (
    <Box>
    <Banner slides={SlideData} 
     />
  </Box>    
  );
}
