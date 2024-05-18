import { Box, Typography, Button, Avatar, TextareaAutosize } from "@mui/material";
import { useEffect, useState } from "react";
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import ThreadCard from "../../components/common/ThreadCard";
import { getThreads } from "../../lib/api/call/thread";
import { IThread } from "../../types/app";
import { DEFAULT_AVA } from "../../utils/constant/defaultAva";

const Home = () => {
  const [thread, setThread] = useState<IThread[]>([]);

  const fetchThread = async () => {
    try {
      const { data } = await getThreads();

      console.log(data);
      setThread(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchThread();
  }, []);

  const handleAddFileClick = () => {
    // Pemicu klik pada elemen input file yang tersembunyi
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.click();
    }
};
// const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//         // Handle the file here
//         console.log('Selected file:', file);
//     }
// };

  return (
    <Box>
      <Box sx={{ marginLeft: "10px" }}>
        <Typography variant="h5" component="h2">
          Home
        </Typography>
      </Box>

      <Box sx={{ px: "8px" }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", }}>
              <Avatar sx={{height:"30px", width:"30px"}} alt="ava" src={DEFAULT_AVA} />
            </Box>
          <Box width={"100%"}>
            <TextareaAutosize
            minRows={2}
            maxRows={3}
              style={{
                backgroundColor: "#1d1d1d",
                color: "white",
                border: "none",
                width: "350px"
              }}
              placeholder="What Is Happening…"
            />
          </Box>
          <Box>
            <AddPhotoAlternateOutlined 
              sx={{ color: "#04A51E", cursor: "pointer" }}
              onClick={handleAddFileClick}
            />
          </Box>

          <Box sx={{ color: "#00e676" }}>
            <Button
              sx={{
                width: "40px",
                background: "#00c853",
                color: "white",
                borderRadius: "20px",
              }}
              variant="outlined"
              color="success"
            >
              Post
            </Button>
          </Box>

        </Box>
      </Box>
      {thread &&
        thread.map((item) => <ThreadCard key={item.id} thread={item} />)}
        
    </Box>
  );
};

export default Home;
