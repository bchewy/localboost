import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, LinearProgress, Typography } from '@mui/material';
// import database from '../backend/firebase';
// import { getDatabase, ref, push, set } from "firebase/database";

// Main app component
const chatAI = () => {
  const systemMessage = { role: 'system', content: 'You are localboost AI, an AI focused on helping small businesses with their problems. You are to provide them with a suitable student whom may help them solve their problem, and can be found on the LocalBoost platform. .' };
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([systemMessage]);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const userMessage = { role: 'user', content: input };
    setInput('');

    try {
      console.log("Sending request to OpenAI API...");
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          // messages: updatedMessages,
          messages: [...messages, userMessage],
          max_tokens: 120
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          }
        }
      );

      console.log("Received response from OpenAI API: ", response);
      const aiMessage = { role: 'assistant', content: response.data.choices[0].message.content };

      setMessages(prevMessages => [...prevMessages, userMessage, aiMessage]);

      // Save data to Firebase
      // const messagesRef = ref(database, 'messages');
      // const newMessageRef = push(messagesRef); // Generates a new unique key
      // set(newMessageRef, {
      //   content: messages,
      //   timestamp: new Date().toISOString()
      // });
      // console.log("Saved message into Firebase");

    } catch (error) {
      console.error("Error occurred while calling OpenAI API: ", error);
    } finally {
      setIsLoading(false);
    }


  };



  return (
    <Container maxWidth="md">
      {messages.map((message, index) => {
        if (message.role === 'system') {
          return null; // Do not render system messages
        }
        const roleDisplay = message.role === 'user' ? 'You' : 'AI';
        return (
          <Typography key={index} variant="body1">
            <b>{roleDisplay}:</b> {message.content}
          </Typography>
        );
      })}

      {aiResponse && (
        <Typography variant="body1">
          <b>LocalBoost AI:</b> {aiResponse}
        </Typography>
      )}

      {isLoading && <LinearProgress />}

      <form onSubmit={handleSubmit}>
        <TextField value={input} onChange={handleChange} sx={{ width: '200px', height: '48px' }} />
        <Button type="submit" variant="contained" sx={{ height: '48px' }}>
          Send
        </Button>
      </form>
    </Container>

  );
};

export default chatAI;