import { Box, Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import ThreadCard from "../../components/common/ThreadCard";
import { getThreads } from "../../lib/api/call/thread";
import { IThread } from "../../types/app";
import Textarea from "@mui/joy/Textarea";

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

  return (
    <Box>
      <Box sx={{ marginLeft: "10px" }}>
        <Typography variant="h5" component="h2">
          {" "}
          Home{" "}
        </Typography>
      </Box>
      <Box sx={{ px: "8px" }}>
        <Box sx={{ display: "flex",gap:2,alignItems:"center" }}>
          <Box width={"100%"}>
            <Textarea
              sx={{
                backgroundColor: "#1d1d1d",
                color: "white",
                border: "none",
              }}
              placeholder="What Is Happening…"
            />
          </Box>
          <Box >
            <AddPhotoAlternateOutlined />
          </Box>

          <Box sx={{ color: "#00e676" }} >
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
