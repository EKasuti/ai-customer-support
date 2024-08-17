import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ text, type, onClick, }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        background: type === 'primary' ? 'linear-gradient(45deg, #FF2C2C 30%, #998001 90%)' : 'black',
        color:"#FFFFFF", 
        border: type === 'primary' ? 'none' : '1px solid #FFFFFF',
        textTransform: 'none',
        '&:hover': {
          background: 'linear-gradient(45deg, #FF2C2C 50%, #998001 100%)', 
        },
        width: 'fit-content',
        padding: type === 'primary' ? '10px 40px' : '4px 20px',
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;