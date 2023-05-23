import React from "react";
import { Grid, Button, TextField } from '@mui/material';
import { Link, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import "../style.css";
import { Chrono } from "react-chrono";

import { app } from './firebase';
import { getFirestore, collection, getDocs, query, serverTimestamp, addDoc, orderBy, doc, where, onSnapshot, updateDoc }
  from "firebase/firestore";

import DownloadButton from "../components/FileDownloadButton";
import ChatWidget from "../components/ChatWidget";
import RedirectButton from "../components/RedirectButton";

const db = getFirestore(app);

const MilestoneDetails = (props) => {
  const location = useLocation();

  const user = location.state.senderUser;
  const chatRecipient = location.state.recipientUser;
  const milestoneID = location.state.milestoneID;
  const projectID = location.state.projectID;
  const isCompany = location.state.isCompany;

  console.log("MDetails User is", user);
  console.log("MDetails Recipient is", chatRecipient);
  // console.log(milestoneID);
  // console.log(projectID);

  // TODO: use authentication to check the current user uid
  // const projectID = "gdbn3vGcDHgrsz3mbJin";
  const isStudent = false;

  const milestoneDocRef = doc(db, "projects", projectID, "milestones", milestoneID);
  const updatesColRef = collection(milestoneDocRef, "updates");
  const q_updates = query(updatesColRef, orderBy("timestamp", "desc"));

  const [items, setItems] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [milestoneName, setMilestoneName] = useState("");
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [previousMilestoneCompleted, setPreviousMilestoneCompleted] = useState(false);

  useEffect(() => {
    const projectDocRef = doc(db, "projects", projectID);
    const unsubscribe = onSnapshot(projectDocRef, (doc) => {
      setProjectName(doc.data().name);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(milestoneDocRef, (doc) => {
      setMilestoneName(doc.data().name);
      setCurrentMilestone(doc.data().seq_number);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const previousMilestoneRef = query(
      collection(db, "projects", projectID, "milestones"),
      where("seq_number", "==", currentMilestone - 1));

    const unsubscribe = onSnapshot(previousMilestoneRef, (q) => {
      q.forEach((doc) => {
        setPreviousMilestoneCompleted(doc.data().completed);
      });
    });
    return () => unsubscribe();
  }, []);

  console.log(previousMilestoneCompleted);

  const fetchCardData = async () => {

    // const milestoneDocRef = doc(db, "projects", projectID, "milestones", milestoneID);
    // const updatesColRef = collection(milestoneDocRef, "updates");
    // const q_updates = query(updatesColRef, orderBy("timestamp", "desc"));

    const querySnapshot = await getDocs(q_updates);
 
    const newItems = [];
    querySnapshot.forEach(update => {
      // const urlArray = update.data().upload_url;
      const urlArray = update.data().uploads;
      const thumbnail = update.data().thumbnail;
      const description = update.data().description;

      const Content = () => {
        const [comment, setComment] = useState("");

        const handleSubmit = async () => {
          // Save new comment to Firestore
          const commentData = {
            user: user,
            text: comment,
            timestamp: serverTimestamp()
          }

          const commentsColRef = collection(updatesColRef, update.id, "comments");

          if (comment !== "") {
            await addDoc(commentsColRef, commentData);
            setComment("");
          }
        };

        const [storedComments, setStoredComments] = useState([]);

        const fetchCommentsHistory = async () => {
          const q_comments = query(
            collection(updatesColRef, update.id, "comments"),
            orderBy("timestamp", "asc")
          );
          const querySnapshot = await getDocs(q_comments);
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
            collection(updatesColRef, update.id, "comments"),
            orderBy("timestamp", "asc")
          );

          const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === "added") {
                setStoredComments([...storedComments,
                {
                  text:change.doc.data().text,
                  user:change.doc.data().user
                }]);
              }
            });
          });

          return () => unsubscribe();
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

        const LoadThumbnail = ({ thumbnail }) => {
          if (thumbnail === undefined) return null;
          return (
            <Grid item><img style={{ maxWidth: "100%", height:"auto" }} src="https://www.swhf.sg/wp-content/uploads/2014/03/Halimah-Yacob.jpg"></img></Grid>
          )
        };

        return (
        <Grid container spacing={2} sx={{ width:700, height:"100%" }}>
          <Grid item xs={4} sx={{ mt:3 }}>
            <LoadThumbnail thumbnail={thumbnail} />
            <Grid item sx={{ mb:1 }}><DownloadButton arr={urlArray} /></Grid>
            <Grid item><Button variant="contained" onClick={handleSubmit}>Add Comment</Button></Grid>
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
        title: update.data().timestamp.toDate().toLocaleString(),
        cardTitle: update.data().subject,
        timelineContent: <Content />,
      });
    });
    setItems(newItems);
  };
  
  useEffect(() => {
    fetchCardData();
  }, []);

  const TopBar = () => {

    const handleComplete = () => {
      const unsubscribe = onSnapshot(milestoneDocRef, (doc) => {
        if (doc.data().completed) {
          alert("This milestone has already been completed");
        }else if (previousMilestoneCompleted === false) {
          alert("You have not completed the previous milestone");
        }else{
          updateDoc(milestoneDocRef, {
          completed: true
          });
          alert("Milestone completed!");
        };
      });
      return () => unsubscribe();
    };

    if (!isCompany) {
      return (
        <div>
          <RedirectButton link="/milestone-overview" text="Back to Overview" data={{ projectID:projectID, user:user }} />
          <Button component={Link} variant="contained" to="/add-update" sx={{ ml:2 }}>
            Add New Update
          </Button>
        </div>
      )
    }else{
      return (
        <div>
          <RedirectButton link="/milestone-overview" text="Back to Overview" data={{ projectID:projectID, user:user }} />
          <Button variant="contained" onClick={handleComplete} sx={{ ml:2 }}>
            Complete Milestone
          </Button>
        </div>
      )
    }
  };

  return (
    <div style={{ width: '1200px', height: '850px' }}>
      <h1>{projectName}: {milestoneName}</h1>
      <TopBar />
      {items.length > 0 && <Chrono
        items={items}
        mode="VERTICAL"
        cardHeight="600"
        />}
      <ChatWidget sender={user} recipient={chatRecipient}/>
    </div>
  );
};

export default MilestoneDetails;