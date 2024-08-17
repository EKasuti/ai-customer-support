import React, { useState } from 'react';
import { Box, TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const InputField = ({ label, type, id, value, onChange, required, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box mb={2}>
      <Typography variant="body1" color="white" gutterBottom>{label}</Typography>
      <TextField
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        id={id}
        fullWidth
        variant="outlined"
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        InputProps={{
          style: { color: 'white' }, 
          endAdornment: type === 'password' && (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
                sx={{ color: 'white' }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { color: 'white' }, 
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', 
            },
            '&:hover fieldset': {
              borderColor: 'white', 
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', 
            },
          },
        }}
      />
    </Box>
  );
};

export default InputField;