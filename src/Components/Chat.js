import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const ChatComponent = ({onClose}) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! My name is Akiba and I'm going to be your personal financial agent. How can I assist you today?",
    },
  ]);

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true);

    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, { role: "user", content: message }]),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((messages) => [
        ...messages,
        {
          role: "assistant",
          content:
            "I'm sorry, but I encountered an error. Please try again later.",
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <Stack
      direction={"column"}
      width={{ xs: "100%", sm: "500px" }}
      height={{ xs: "100%", sm: "700px" }}
      border="1px solid white"
      borderRadius={4}
      p={2}
      spacing={3}
    >
      <IconButton onClick={onClose} sx={{ alignSelf: 'flex-end', color: 'white' }}>
            <CloseIcon />
          </IconButton>
      <Stack
        direction={"column"}
        spacing={2}
        flexGrow={1}
        overflow="auto"
        maxHeight="100%"
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={
              message.role === "assistant" ? "flex-start" : "flex-end"
            }
          >
           <Box
            sx={{
              background: message.role === "assistant"
                ? "linear-gradient(45deg, #FF2C2C, #FFA500)" 
                : "linear-gradient(45deg, blue, darkblue)", 
              color: "white",
              // borderRadius: 4,
              borderRadius: message.role === "assistant" ? "12px 12px 12px 0px" : "12px 12px 0px 12px", 
              p: { xs: 1, sm: 3 },
            }}
          >
            {message.content}
          </Box>
          </Box>
        ))}
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Ask me anything!"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
          InputProps={{
            endAdornment: (
              <Button 
                onClick={sendMessage} 
                disabled={isLoading}
                sx={{
                  background: "linear-gradient(45deg, #FF2C2C, #FFA500)",
                  color: "white",
                  minWidth: "auto",
                  padding: "8px",
                  marginRight: "-4px",
                  '&:hover': {
                    background: "linear-gradient(45deg, #FF2C2C, #FFA500)",
                  },
                }}
              >
                <SendIcon />
              </Button>
            ),
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
              '& input': {
                color: 'white',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
          }}
        />

        {/* <CustomButton text={isLoading ? "Sending..." : "Send"} type="primary" onClick={sendMessage} disabled={isLoading}/> */}
      </Stack>
    </Stack>
  );
};

export default ChatComponent;