import React from "react";
import { useState, useEffect } from "react";
import "../style.css";
import { Chrono } from "react-chrono";
import { Container, TextField, Button, LinearProgress, Typography } from '@mui/material';
import axios from 'axios';

import { app } from './firebase';
import { getFirestore, collection, getDocs, query, serverTimestamp, onSnapshot, orderBy, doc, where } from "firebase/firestore";

// POPULATE WITH GPT

const TimelineTest = (props) => {

  const systemMessage = { role: 'system', content: `
  You are LocalBoost AI GPT, you only respond with an items array.
  We want you to Generate and return ONLY the milestones array as a response, for a web development project

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

  Do not reply with anything else. Only respond with the milestones array. Do not write comments in the code. ONLY respond with contents of the milestones array.
  ` };
  const [messages, setMessages] = useState([systemMessage]);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const db = getFirestore(app);

  // TODO: use authentication to check the current user uid
  const user = "a0001";
  const projectID = "gdbn3vGcDHgrsz3mbJin";
  const currentMilestone = 1;

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const docRef = doc(db, "projects", projectID);
    const q = query(
      collection(docRef, "milestones"),
      where("milestone_number", "==", currentMilestone),
      orderBy("timestamp", "asc")
    );
    const querySnapshot = await getDocs(q);
    const newItems = querySnapshot.docs.map(item => ({
      title: item.data().timestamp.toDate().toLocaleString(),
      cardTitle: item.data().subject,
      cardDetailedText: "something"
    }));
    setItems(newItems);
  };
  
  useEffect(() => {
    fetchData();
  }, [projectID, currentMilestone]);
  // OLD METHOD, TIMESTAMP TYPE NEEDS TO BE SAME AS ABOVE
  // const docRef = doc(db, "projects", projectID);

  // const q = query(
  //   collection(docRef, "milestones"),
  //   where("milestone_number", "==", currentMilestone),
  //   orderBy("timestamp", "asc"));

  // const getChangelog = async () => {
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach(item => {
  //     setItems(items => [...items, {
  //       title: item.data().timestamp.,
  //       cardTitle: item.data().subject,
  //       cardDetailedText: "something"}]);
  //   });
  // };





  console.log('items arr:', items);




  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      console.log("Sending request to OpenAI API...");
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // gpt-3.5-turbo or got-4
          messages: messages,
          max_tokens: 500
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
      console.log('aiMessage:', aiMessage);

    } catch (error) {
      console.error("Error occurred while calling OpenAI API: ", error);
    } finally {
      setIsLoading(false);
    }


  };

  return (
    <div style={{ width: '500px', height: '950px' }}>
      <h1>Populate milestones with LocalBoost AI</h1>

      {isLoading && <LinearProgress />}
      <form onSubmit={handleSubmit}>
          {/* <TextField value={input} onChange={handleChange} sx={{ width: '80%', height: '48px' }} /> */}
          <Button type="submit" variant="contained" sx={{ width: '20%', height: '55px' }}>
            Generate
          </Button>
        </form>

      <h3>Milestones</h3>
      {items.length > 0 && <Chrono items={items} mode="VERTICAL" />}
    </div>
  )
}

export default TimelineTest;