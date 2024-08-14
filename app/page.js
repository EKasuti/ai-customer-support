"use client";
import CustomButton from "@/src/Components/Button";
import Footer from "@/src/Components/Footer";
import Navbar from "@/src/Components/Navbar";
import { Box, Typography } from "@mui/material";


export default function Home() {
  return (
    <Box
      backgroundColor="black"
      width="100vw"
      height="auto"
      flexDirection="column"
      display="flex"
      // margin={20}
      padding={{xs: "10px", sm: "20px"}}
     
      color="white"
    >
      <Navbar/>
      <Box 
        sx={{
          height:{xs: 'auto', sm: '100vh'}, 
          display: 'flex', 
          justifyContent: 'center', 
           
        }}>
        <Box 
          sx={{ 
            padding:"10px", 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'row'}, 
            justifyContent: {sm:'space-between'}, 
            alignItems:"center"
          }}>
          <Box 
            sx={{ 
              padding:{xs: '10px', sm: '20px'}, 
              textAlign: {xs: 'center', sm: 'left'},
              display: 'flex', 
              flexDirection: 'column', 
             
              width: {xs: '100%', sm: '60%'} 
            }}>
              
            <Typography 
              // variant={{ xs: 'h2', sm: 'h3', lg: 'h2' }} 
              sx={{ 
                fontSize: {xs: '1.25rem', sm: '1.75rem', lg: '1.5rem'},
                marginBottom: 3, 
                color: 'white', 
                fontWeight: 'bold',
            
              }}
            >
              Don't know where to invest?
            </Typography>
            <Typography 
              // variant="h4" 
              sx={{ 
                fontSize: {xs: '1.5rem', sm: '2rem', lg: '1.75rem'},
                marginBottom: 3, 
                background: 'linear-gradient(45deg, #FF2C2C 0%, #998001 100%)', 
                
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
               
              
              }}>
              Tailored Financial Guidance at Your Fingertips
            </Typography>

            <Typography 
            // variant="h6" 
              sx={{ 
                  fontSize: {xs: '1.1rem', sm: '1.125rem', lg: '1.25rem'},
                  marginBottom: 4, 
                  color: 'white' 
                }}>
              Explore a world of opportunities with our advanced features, including Peer-to-Peer investment, 
              a Personalized AI finance agent, and expert advice on how much of your income to save. 
              Use our model to understand the existing investment options and accurately estimate your potential returns.
            </Typography>

            <Box sx={{marginBottom: 8}}>
            <CustomButton text="Join Waitlist" type="primary" onClick={()=> {}}/>
            </Box>
            
          </Box>
          <Box sx={{display: 'flex', alignItems:{xs:"center", sm:"right"}}}>
          <img 
            src={"/Images/landing_page.png"} 
            alt="Logo" 
            style={{ height: {xs: '200px', sm: '400px', lg: '800px'}, marginRight: {xs: '0px', sm: '40px'}}} />
          </Box>
        </Box>
      </Box>
     
     {/* Footer */}
     <Footer/>
   
    
    </Box>
  );
}