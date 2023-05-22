import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, TextField, Button, LinearProgress, Typography } from '@mui/material';
import { app } from "./firebase";
// import TypeIt from 'typeit';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { doc, getDocs, setDoc, getFirestore, collection, updateDoc } from "firebase/firestore";
// import db from '../pages/firebase-store';
import { getDatabase, ref, push, set } from "firebase/database";
import UserAvatar from '../components/images/image1.jpeg';
import AIAvatar from '../components/images/image2.png';

// Main app component
const LocalBoostAI = () => {
  const systemMessage = { role: 'system', content: 'You are localboost AI, an AI focused on helping small businesses with their problems. You are to provide them with a suitable student whom may help them solve their problem, and can be found on the LocalBoost platform. Ask users for more information if you require more to make your decisions. If you list any items in the form of lists, render them in HTML.' };
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([systemMessage]);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // Method 1 of trying out TypeIt for React
  // const resultRef = useRef(null);
  // useEffect(() => {
  //   const typeItInstance = new TypeIt(resultRef.current, {
  //     speed: 10,
  //     waitUntilVisible: true
  //   })
  //     .type('\n\n')
  //     .pause(500)
  //     .type('')
  //     .delete(-1)
  //     .type('')
  //     .go();

  //   return () => {
  //     typeItInstance.destroy();
  //   };
  // }, [messages]);


  // Method 2 -- Works but deletes old messages as well
  // const resultRef = useRef(null);

  // const animateText = (text) => {
  //   if (resultRef.current) {
  //     resultRef.current.textContent = ''; // Clear the result div before animation

  //     let currentIndex = 0;
  //     const typingInterval = setInterval(() => {
  //       if (currentIndex <= text.length) {
  //         resultRef.current.textContent = text.slice(0, currentIndex);
  //         currentIndex++;
  //       } else {
  //         clearInterval(typingInterval);
  //       }
  //     }, 50);
  //   }
  // };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // // Adds real-time messages to firebase.
  // function addMessages(messageData) {
  //   const database = getFirestore(app);

  //   const messages = messagesData.map(messageData => ({
  //     content: messageData.content,
  //     timestamp: new Date().toISOString()
  //   }));

  //   fetch(
  //     `${process.env.REACT_APP_DATABASEURL}/messages.json`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify(messages),
  //       // body: JSON.stringify({
  //       //   content: messageData,
  //       //   timestamp: new Date().toISOString()
  //       // }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // }

  // function addAsyncMessages(messagesData) {
  //   const database = getFirestore(app);
  //   const messages = messagesData.map(messageData => ({
  //     content: messageData.content,
  //     timestamp: new Date().toISOString()
  //   }));

  //   const messagesRef = doc(database, 'messages');
  //   setDoc(messagesRef, { messages });

  // }


  // Handle the submit button, and API call.
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
          model: 'gpt-3.5-turbo', // gpt-3.5-turbo or got-4
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

      // setAnimationText(''); 
      // setMessages(prevMessages => [...prevMessages, userMessage, aiMessage]);
      setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
      setIsLoading(false);
      // animateText(aiMessage.content);

      // Save data to Firebase
      console.log('Saving messages into firebase')
      // const url = `${process.env.REACT_APP_DATABASEURL}/messages.json`
      // console.log('Database URL:' + url);


      // addMessages([...messages, userMessage, aiMessage]); // Pass the updated messages array to addMessages
      // addMessages(messages);

      const db = getDatabase(app);
      const messagesRef = ref(db, 'messages');
      const newMessageRef = push(messagesRef); // Generates a new unique key
      set(newMessageRef, {
        content: messages,
        timestamp: new Date().toISOString()
      });
      console.log("Saved message into Firebase");



    } catch (error) {
      console.error("Error occurred while calling OpenAI API: ", error);
    } finally {
      setIsLoading(false);
    }


  };


  return (
    <div>
      <h1>Chat with LocalBoost AI</h1>
      <h3>LocalBoost AI provides you with a solution to digitally empower you.</h3>
      <p>Here are some things you can ask it:
        <ul>
          <li>What services does LocalBoost offer?</li>
          <li>How can LocalBoost help my business grow?</li>
          <li>Can LocalBoost assist with social media marketing?</li>
          <li>Are the freelancers on LocalBoost vetted for their skills?</li>
          <li>Can LocalBoost provide assistance with graphic design projects?</li>

        </ul>
      </p>
      <Container maxWidth="100%">


        {/* ALL messages are rendered here */}
        {/* <div style={{ backgroundColor: 'lightgray', padding: '5rem' }} id="result" ref={resultRef}> */}
        {/* <div style={{ backgroundColor: 'lightgray', padding: '5rem' }}>
          {messages.map((message, index) => {
            if (message.role === 'system') {
              return null; // Do not render system messages
            }
            const roleDisplay = message.role === 'user' ? 'You' : 'LocalBoost AI';
            return (
              <Typography key={index} variant="body1">
                <b style={{ paddingTop: '5rem' }}>{roleDisplay}:</b> {message.content}
              </Typography>
            );
          })}
        </div> */}




        {/* <div style={{ backgroundColor: 'lightgray', padding: '5rem' }}>
  {messages.map((message, index) => {
    if (message.role === 'system') {
      return null; // Do not render system messages
    }
    const roleDisplay = message.role === 'user' ? 'You' : 'LocalBoost AI';
    const avatarSrc = message.role === 'user' ? UserAvatar : AIAvatar;

    return (
      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img src={avatarSrc} alt={roleDisplay} style={{ width: '24px', height: '24px', marginRight: '0.5rem' }} />
        <Typography variant="body1">
          <b>{roleDisplay}:</b> {message.content}
        </Typography>
      </div>
    );
  })}
</div> */}


        {/* <div style={{ backgroundColor: 'lightgray', padding: '5rem' }}>
  {messages.length === 1 ? (
    <Typography variant="body1">Start sending messages to begin the conversation.</Typography>
  ) : (
    messages.slice(1).map((message, index) => {
      const roleDisplay = message.role === 'user' ? 'You' : 'LocalBoost AI';
      const avatarSrc = message.role === 'user' ? UserAvatar : AIAvatar;

      return (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={avatarSrc} alt={roleDisplay} style={{ width: '24px', height: '24px', marginRight: '0.5rem' }} />
          <Typography variant="body1">
            <b>{roleDisplay}:</b> {message.content}
          </Typography>
        </div>
      );
    })
  )}
</div> */}





        <div style={{ backgroundColor: 'lightgray', padding: '5rem' }}>
          {messages.length === 1 ? (
            <Typography variant="body1">Start sending messages to begin the conversation.</Typography>
          ) : (
            messages.slice(1).map((message, index) => {
              const roleDisplay = message.role === 'user' ? 'You' : 'LocalBoost AI';
              const avatarSrc = message.role === 'user' ? UserAvatar : AIAvatar;

              const formattedContent = message.content.includes('<ul>') ? (
                <ul dangerouslySetInnerHTML={{ __html: message.content }} />
              ) : (
                message.content
              );

              return (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <img src={avatarSrc} alt={roleDisplay} style={{ width: '24px', height: '24px', marginRight: '0.5rem' }} />
                  <Typography variant="body1">
                    <b>{roleDisplay}:</b> {formattedContent}
                  </Typography>
                </div>
              );
            })
          )}

        </div>
        {/* {aiResponse && (
          <Typography variant="body1">
            <b>LocalBoost AI:</b> {aiResponse}
          </Typography>
        )} */}

        {isLoading && <LinearProgress />}

        <form onSubmit={handleSubmit}>
          <TextField value={input} onChange={handleChange} sx={{ width: '80%', height: '48px' }} />
          <Button type="submit" variant="contained" sx={{ width: '20%', height: '55px' }}>
            Send
          </Button>
        </form>
      </Container>

    </div>
  );
};

export default LocalBoostAI;