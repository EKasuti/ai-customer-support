import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box>
            {/* Line before the footer */}
            <Box sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "gray",
                marginTop: "20px",
                marginBottom: "10px",
            }} />
            <Typography 
                sx={{
                    color: "white", 
                    textAlign: "center", 
                    marginTop: "20px"}} >
                &copy; 2024 AInvest. All rights reserved. 
            </Typography>

           
        </Box>
    )
}

export default Footer;