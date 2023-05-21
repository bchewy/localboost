import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Grid, Container, TextField, Button, LinearProgress, Typography, MenuItem, Select } from '@mui/material';
import { app } from "./firebase";
// import TypeIt from 'typeit';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { doc, getDocs, setDoc, getFirestore, collection, updateDoc } from "firebase/firestore";
// import db from '../pages/firebase-store';
import { getDatabase, ref, push, set } from "firebase/database";
import UserAvatar from '../components/images/image1.jpeg';
import AIAvatar from '../components/images/image2.png';
import { getFirestore, collection, getDocs, query, serverTimestamp, addDoc, orderBy, doc, where, onSnapshot } from "firebase/firestore";
import DownloadButton from "../components/FileDownloadButton";


// Main app component
const LocalBoostAI = () => {
  const systemMessage = { role: 'system', content: 'You are localboost AI, an AI focused on helping small businesses with their problems. You are to provide them with a suitable student whom may help them solve their problem, and can be found on the LocalBoost platform. Ask users for more information if you require more to make your decisions. If you list any items in the form of lists, render them in HTML.' };
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([systemMessage]);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMile, setIsLoadingMile] = useState(false);

  // Milestone Feature Variables
  // OLD SYSTEM PROMPT
  const [parsedContent, setParsedContent] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const user = "a0001";   // TODO: use authentication to check the current user uid
  const projectID = "gdbn3vGcDHgrsz3mbJin";
  const currentMilestone = 1;
  const db = getFirestore(app);

  const systemMessageMile = {
    role: 'system', content: `
  You are LocalBoost AI GPT, you only respond with an JSON milestones array.
  We want you to Generate and return ONLY the milestones array as a JSON response, for a {category} project.

  const milestones = [{
    title: "Name of the milestone",
    cardTitle: "Milestone Title",
    url: "milestone url, if any",
    cardSubtitle:"Milestone subtitle",
    cardDetailedText: "Milestone description",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];
  ONLY CREATE 4 milestones.
  Do not reply with anything else, but a JSON array with all the fields as shown above. Remember to close the JSON file.
  ` };


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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle milestone submit API Call
  const handleSubmitMile = async (event) => {
    event.preventDefault();
    setIsLoadingMile(true);
    try {
      console.log("Sending request to OpenAI API...");
      // console.log("messages:", messages);
      // console.log("system message:", messages[0].content);
      // console.log("end of messages:");

      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
          ...messages,
          { role: 'system', content: messages[0].content.replace('{category}', selectedOption) }
        ],
        max_tokens: 600,
        // suffix: '}];', //Close the array
        // stream: true
      };

      console.log('replaced cat'+messages[0].content.replace('{category}', selectedOption))

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          },
  
        }
      );

      console.log("Received response from OpenAI API: ", response);

      const aiMessage = { role: 'assistant', content: response.data.choices[0].message.content };
      const f_content = aiMessage.content
      console.log("f_content:", f_content)
      const parsedContent = JSON.parse(f_content);
      setParsedContent(parsedContent);

      // parsedContent.forEach((item) => {
      //   console.log("Title:", item.title);
      //   console.log("Card Title:", item.cardTitle);
      //   console.log("URL:", item.url);
      //   console.log("Card Subtitle:", item.cardSubtitle);
      //   console.log("Card Detailed Text:", item.cardDetailedText);
      //   console.log("Media Source URL:", item.media.source.url);
      // });

    } catch (error) {
      console.error("Error occurred while calling OpenAI API: ", error);
    } finally {
      setIsLoadingMile(false);
    }


  };



  return (
    <div>
      <h1>LocalBoost AI</h1>
      <h3>Chat with LocalBoost AI.</h3>
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


      <div>
        <h2>Generate project milestones with our AI.</h2>
        <Typography variant="body1" gutterBottom> (IN BETA*) Settle on what you need for your project. Use Generative AI to help you come up with ideas. Edit after. </Typography>
      {isLoading && <LinearProgress />}
      <form onSubmit={handleSubmitMile}>
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          sx={{ width: '80%', height: '48px' }}
        >
          <MenuItem value="" disabled>---Select a Project Category---</MenuItem>
          <MenuItem value="website design">Website Design</MenuItem>
          <MenuItem value="graphic design">Graphic Design</MenuItem>
          <MenuItem value="digitalisation">Digitalisation</MenuItem>
          <MenuItem value="marketing">Marketing</MenuItem>
          <MenuItem value="web development">Website Dev</MenuItem>
          <MenuItem value="app development">Mobile App Dev</MenuItem>
        </Select>
        <Button type="submit" variant="contained" sx={{ width: '20%', height: '55px' }}>
          Generate
        </Button>
      </form>
      <div style={{ backgroundColor: 'lightgray', padding: '5rem' }}>
      {parsedContent.map((item, index) => (
          <div key={index}>
            <h3>Title: {item.title}</h3>
            <p>Card Title: {item.cardTitle}</p>
            <p>URL: {item.url}</p>
            <p>Card Subtitle: {item.cardSubtitle}</p>
            <p>Card Detailed Text: {item.cardDetailedText}</p>
            <p>Media Source URL: {item.media.source.url}</p>
          </div>
        ))}
      </div>
      </div>


    </div>
  );
};

export default LocalBoostAI;