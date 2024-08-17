import React, { useState } from 'react';
import { AppBar, Box,  Modal,  Toolbar } from '@mui/material';
import CustomButton from './Button';
import ChatComponent from './Chat';


const Navbar = () => {
  const [openChat, setOpenChat] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  // Handle onClick -> Talk to an agent
  const handleTalkToAgent = () => {
    // Open component    
    setOpenChat(true);
    if (openMenu) {
      toggleMenu();
    }
  };

  // Handle onClick -> Close Chat
  const handleCloseChat = () => {
    setOpenChat(false);
    if (openMenu) {
      toggleMenu();
    }
  };

  // Toggle Menu
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };



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
          text="Talk to an agent" 
          type="secondary" 
          onClick={handleTalkToAgent}
        />
       </Box>
      </Toolbar>

      {/* Chat Component as a modal */}

      <Modal
        open={openChat} 
        onClose={handleCloseChat}
      >
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '50%', sm: '50%' },
            left: { xs: '50%', sm: '75%' },
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 500 }, 
            height: { xs: '90%', sm: 700 },
            backgroundColor: 'black',
            overflow: 'hidden',
            borderRadius: 4,
          }}
        >
          <ChatComponent onClose={handleCloseChat} />
        </Box>
      </Modal>
     
    </AppBar>
  );
};

export default Navbar;