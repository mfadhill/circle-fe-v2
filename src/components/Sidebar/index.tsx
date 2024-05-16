import { Box, Button, Typography } from "@mui/material";
import MenuItem from "./MenuItem";

const Sidebar = () => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: 5,
            gap: 2,
         }}
      >
         <Box> <Typography sx={{color:"green" }} variant="h4">CIRCLE</Typography> </Box>
         <Box>
            <MenuItem />

         </Box>
         <Box sx={{color:"#00e676"}}><Button sx={{width: "200px", background:"#00c853", color:"white", borderRadius:"20px"}} variant="outlined" color="success">Create Post</Button></Box>
         <Box sx={{ marginTop: "auto" }}>Logout</Box>
      </Box>
   );
};

export default Sidebar;
