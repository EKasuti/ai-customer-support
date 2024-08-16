import React, { useState } from 'react';
import { AppBar, Box, IconButton, Modal, Toolbar, Drawer, List } from '@mui/material';
import CustomButton from './Button';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();


  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', borderBottom: "1px solid gray"}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', flexwrap:'wrap'}}>
        {/* Logo Image on the right */}
        <img src={"/Images/logo.png"} alt="Logo" style={{ height: '24px', marginRight: '0px' }} />

        {/* Talk to the AI agent on the right */}
       <Box 
          sx={{
            display:'flex', 
            gap: '10px',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <CustomButton 
          text="Login" 
          type="secondary" 
          onClick={()=> {navigate('/login')}} 
        />
        <CustomButton 
          text="Signup" 
          type="secondary" 
          onClick={()=> {navigate('/signup')}} 
        />
       </Box>
      </Toolbar>

      {/* Chat Component as a modal */}
     
    </AppBar>
  );
};

export default Navbar;
