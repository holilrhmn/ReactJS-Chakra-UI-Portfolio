import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/layouts/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ImagePortfolio from "./components/ImagePortfolio";
import Contact from "./components/Contact";
import Footer from "./components/layouts/Footer";
import { theme, ThemeProvider, CSSReset, ColorModeProvider, Box, SimpleGrid, Flex } from "@chakra-ui/core";


const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <ColorModeProvider>  
      <CSSReset />  
      <React.StrictMode>
        <Box>
        <Navbar /> 
        <Header/>
        <Portfolio/>
        <Flex>
        <SimpleGrid columns='3' spacing='20px' width='185vh' margin='auto' mb={10}>
            <ImagePortfolio/>
            <ImagePortfolio/>
            <ImagePortfolio/>
            <ImagePortfolio/>
            <ImagePortfolio/>
            <ImagePortfolio/>
          </SimpleGrid>
        </Flex>
          
        <Contact/>
        <Footer/>
        </Box>  
        
        
      </React.StrictMode>  
    </ColorModeProvider>  
    </ThemeProvider>
  
  );
}
export default App;
