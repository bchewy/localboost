import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, TextField, Button, LinearProgress, Typography } from '@mui/material';
import database from '../backend/firebase';
import { getDatabase, ref, push, set } from "firebase/database";

// Main app component
const GPT = () => {
  const systemMessage = { role: 'system', content: 'You are localboost AI, an AI focused on helping small businesses with their problems. You are to provide them with a suitable student whom may help them solve their problem, and  can be found on the LocalBoost platform. .' };
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

    // Add user's message to the messages list
    // const updatedMessages = [...messages, {role: 'user', content: input}];

    // setMessages(updatedMessages);
    // setInput('');

    // Prep user message
    const userMessage = { role: 'user', content: input };
    setInput('');

    // Call OpenAI API
    try {
      console.log("Sending request to OpenAI API...");
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          // messages: updatedMessages,
          messages: [...messages, userMessage],
          max_tokens: 10
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          }
        }
      );

      console.log("Received response from OpenAI API: ", response);

      // Add AI's response to the messages list
      // const aiMessage = response.data.choices[0].message.content;
      // setAiResponse(aiMessage);
      // setMessages([...updatedMessages, {role: 'assistant', content: aiMessage}]);

      // Prepare AI's response
      const aiMessage = { role: 'assistant', content: response.data.choices[0].message.content };

      // Add user's message and AI's response to the messages list
      setMessages(prevMessages => [...prevMessages, userMessage, aiMessage]);

      // Save data to Firebase
      const messagesRef = ref(database, 'messages');
      set(messagesRef, {
        content: messages,
        timestamp: new Date().toISOString()
      });
      console.log("Saved messages into firebase");

    } catch (error) {
      console.error("Error occurred while calling OpenAI API: ", error);
    } finally {
      setIsLoading(false);
    }


  };

  // function SaveDataComponent() {
  //   useEffect(() => {
  //     const saveData = () => {
  //       const database = firebase.database();
  //       const dataRef = database.ref('data'); // Replace 'data' with your desired data path

  //       const newData = {
  //         // Your data object
  //       };

  //       dataRef
  //         .push(newData)
  //         .then(() => {
  //           console.log('Data saved successfully.');
  //         })
  //         .catch((error) => {
  //           console.error('Error saving data:', error);
  //         });
  //     };

  //     // Call saveData function when component mounts
  //     saveData();
  //   }, []);

  //   return <></>; // Empty fragment since we don't render anything
  // }


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
      <TextField value={input} onChange={handleChange}  sx={{height:'48px'}}/>
      <Button type="submit" variant="contained" sx={{height:'48px'}}>
        Send
      </Button>
    </form>
  </Container>

  );
};

export default GPT;
