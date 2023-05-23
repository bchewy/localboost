import React from "react";
import { useState, useEffect, useRef } from "react";
import "../style.css";
import "./styles.css";
import { Chrono } from "react-chrono";
import { Grid, Container, TextField, Button, LinearProgress, Typography, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { app } from './firebase';
import { getFirestore, collection, getDocs, query, serverTimestamp, addDoc, orderBy, doc, where, onSnapshot } from "firebase/firestore";
import DownloadButton from "../components/FileDownloadButton";

// POPULATE WITH GPT

const TimelineTest = (props) => {


  const [items, setItems] = useState([]);
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


  useEffect(() => {
    fetchCardData();
  }, []);


  return (
    <div>

      <div style={{ width: '1200px', height: '850px' }}>
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
    </div>
  );
};

export default TimelineTest;