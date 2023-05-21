import React from "react";
import { Grid, Button, TextField } from '@mui/material';

import { useState, useEffect, useRef } from "react";
import "../style.css";
import "./styles.css";
import { Chrono } from "react-chrono";
import { Container, TextField, Button, LinearProgress, Typography, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { app } from './firebase';
import { getFirestore, collection, getDocs, query, serverTimestamp, addDoc, orderBy, doc, where, onSnapshot } from "firebase/firestore";

import DownloadButton from "../components/FileDownloadButton";

// POPULATE WITH GPT

const TimelineTest = (props) => {

  const systemMessage = {
    role: 'system', content: `
  You are LocalBoost AI GPT, you only respond with an milestones array.
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
  Only create 4 milestones.
  Do not reply with anything else, but a JSON array with all the fields as shown above. Remember to close the JSON file.
  ` };
  const [messages, setMessages] = useState([systemMessage]);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [customOption, setCustomOption] = useState('');

  const [items, setItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const user = "a0001";   // TODO: use authentication to check the current user uid
  const projectID = "gdbn3vGcDHgrsz3mbJin";
  const currentMilestone = 1;
  const db = getFirestore(app);

  // Fetch existing data, if any from firebase.
  const fetchCardData = async () => {
    const docRef = doc(db, "projects", projectID);
    const q = query(
      collection(docRef, "milestones"),
      where("milestone_number", "==", currentMilestone),
      orderBy("timestamp", "desc")
    );
    const querySnapshot = await getDocs(q);

    const newItems = [];
    querySnapshot.forEach(item => {
      const urlArray = item.data().upload_url;
      const description = item.data().description;

      // const Uploads = ({ urlArray }) => {
      //   if (urlArray === undefined) return null;
      //   return (
      //   <div>
      //     <p><b>Uploads</b></p>
      //     {urlArray.map((url, index) => (
      //       <p style={{align: "left"}} key={index}>
      //         <a href={url}>{url}</a>
      //       </p>
      //     ))}
      //   </div>
      //   );
      // };

      const Content = () => {
        const [comment, setComment] = useState("");

        const handleSubmit = () => {
          // Save new comment to Firestore
          if (comment !== "") {
            addDoc(collection(docRef, "milestones", item.id, "comments"), {
              user: user,
              text: comment,
              timestamp: serverTimestamp()
            });
            setComment("");
          }
        };

        const [storedComments, setStoredComments] = useState([]);

        const fetchCommentsHistory = async () => {
          const q = query(
            collection(docRef, "milestones", item.id, "comments"),
            orderBy("timestamp", "asc")
          );
          const querySnapshot = await getDocs(q);
          const newComments = [];
          querySnapshot.forEach(comment => {
            newComments.push({
              text:comment.data().text,
              user:comment.data().user
            });
          });
          setStoredComments(newComments);
        };

        const fetchNewComments = () => {
          const q = query(
            collection(docRef, "milestones", item.id, "comments"),
            orderBy("timestamp", "asc")
          );

          const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === "added") {
                setStoredComments({
                  text:change.doc.data().text,
                  user:change.doc.data().user
                });
              }
            });
          });

          return unsubscribe();
        };

        useEffect(() => {
          fetchCommentsHistory();
          // fetchNewComments();
        }, []);

        const LoadComments = ({ commentsArr }) => {
          if (commentsArr === []) return null;
          return (
          <div>
            <p><b>Comments</b></p>
            {commentsArr.map((obj, index) => (
              <p style={{align: "left"}} key={index}>
                {obj.user}: {obj.text}
                
              </p>
            ))}
          </div>
          );
        };

        return (
        <Grid container spacing={2} sx={{ width:700, height:"100%" }}>
          <Grid item xs={4} sx={{ mt:3 }}>
            <Grid item><img style={{ maxWidth: "100%", height:"auto" }} src="https://www.swhf.sg/wp-content/uploads/2014/03/Halimah-Yacob.jpg"></img></Grid>
            <Grid item sx={{ mb:1 }}><DownloadButton arr={urlArray} /></Grid>
            <Grid item><Button variant="contained" onClick={handleSubmit}>Reply</Button></Grid>
          </Grid>
          <Grid item xs={8}>
            <p style={{alignSelf: "flex-start"}}>
              {description}
            </p>
            <LoadComments commentsArr={storedComments} />
            <TextField
              label="Add Comment"
              multiline
              fullWidth
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Grid>
        </Grid>
        );
      };

      newItems.push({
        title: item.data().timestamp.toDate().toLocaleString(),
        cardTitle: item.data().subject,
        timelineContent: <Content />
      });
    });
    setItems(newItems);
  };

  // Handle option changes.
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle custom option changes.
  const handleCustomOptionChange = (event) => {
    setCustomOption(event.target.value);
  };



  useEffect(() => {
    fetchCardData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

  // useEffect(() => {
  //   // Calculate and set the height of each card dynamically
  //   cardRefs.current.forEach((cardRef) => {
  //     const contentHeight = cardRef.firstChild.offsetHeight;
  //     cardRef.style.height = `${contentHeight}px`;
  //   });
  // }, [items]);




    try {
      // console.log("Sending request to OpenAI API...");
      // console.log("messages:", messages);
      // console.log("system message:", messages[0].content);
      // console.log("end of messages:");

      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
          ...messages,
          { role: 'system', content: messages[0].content.replace('{category}', selectedOption) }
        ],
        max_tokens: 200,
        // suffix: '}];', //Close the array
        stream: true
      };

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


      // Handle response data - is it half cut json data? or not?!
      const responseData = new Uint8Array(response.data);
      const decoder = new TextDecoder();
      const responseText = decoder.decode(responseData);
      
      // Parse the complete JSON array from the responseText
      const jsonArray = JSON.parse(responseText);
      console.log('Complete JSON Array:', jsonArray);
      
      read().catch(error => {
        console.error('Error occurred during stream:', error);
      });

      // console.log("Received response from OpenAI API: ", response);
      // const aiMessage = { role: 'assistant', content: response.data.choices[0].message.content };
      // const f_content = aiMessage.content
      // console.log("f_content:", f_content)
      // const parsedContent = JSON.parse(f_content);

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
      setIsLoading(false);
    }


  };

  return (
    <div style={{ width: '1200px', height: '850px' }}>
      <h3>Populate milestones with LocalBoost AI</h3>
      <Typography variant="body1" gutterBottom> Settle on what you need for your project. Use Generative AI to help you come up with ideas. Edit after. </Typography>
      {isLoading && <LinearProgress />}
      <form onSubmit={handleSubmit}>
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          sx={{ width: '80%', height: '48px' }}
        >
          <MenuItem value="digitalisation">Digitalisation</MenuItem>
          <MenuItem value="marketing">Marketing</MenuItem>
          <MenuItem value="web development">Website Dev</MenuItem>
          <MenuItem value="app development">Mobile App Dev</MenuItem>
        </Select>
        <Button type="submit" variant="contained" sx={{ width: '20%', height: '55px' }}>
          Generate
        </Button>
      </form>

      <h3>Milestones</h3>
      <h1>Project {projectID}: Milestone {currentMilestone}</h1>
      <div className="card-wrapper">
        {items.length > 0 && <Chrono
          items={items}
          mode="VERTICAL"
          cardHeight="500"
          />}
      </div>
    </div>
  );
};

export default TimelineTest;