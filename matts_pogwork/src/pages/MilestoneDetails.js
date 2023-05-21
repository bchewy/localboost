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

const db = getFirestore(app);

const MilestoneDetails = (props) => {
  const { state } = useLocation();

  const milestoneID = state?.data;

  // TODO: use authentication to check the current user uid
  const user = "a0001";
  const projectID = "gdbn3vGcDHgrsz3mbJin";
  const projectName = "Create delivery system";
  const currentMilestone = 1;
  const isStudent = false;

  const [items, setItems] = useState([]);

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
      const docRef = doc(db, "projects", projectID);

      const unsubscribe = onSnapshot(docRef, (doc) => {
        if (doc.data().current_milestone > currentMilestone) {
          alert("This milestone has already been completed");
        }else if (doc.data().current_milestone < currentMilestone) {
          alert("You have not completed the previous milestone");
        }else{
          updateDoc(docRef, {
          current_milestone: currentMilestone + 1
          });
          alert("Milestone completed!");
        };
        // console.log(doc.data().current_milestone);
      });

      unsubscribe();
    };

    if (isStudent) {
      return (
        <div>
          <Button component={Link} variant="contained" to="/milestone-overview">
            Back to Overview
          </Button>
          <Button component={Link} variant="contained" to="/add-update">
            Add New Update
          </Button>
        </div>
      )
    }else{
      return (
        <div>
          <Button component={Link} variant="contained" to="/milestone-overview">
            Back to Overview
          </Button>
          <Button component={Link} variant="contained" onClick={handleComplete}>
            Complete Milestone
          </Button>
        </div>
      )
    }
  };

  // const cardRefs = useRef([]);

  // const cardRefsCallback = (ref) => {
  //   if (ref) {
  //     cardRefs.current.push(ref);
  //   }
  // };

  // useEffect(() => {
  //   // Calculate and set the height of each card dynamically
  //   cardRefs.current.forEach((cardRef) => {
  //     const contentHeight = cardRef.firstChild.offsetHeight;
  //     cardRef.style.height = `${contentHeight}px`;
  //   });
  // }, [items]);

  // console.log(cardRefs);

  return (
    <div style={{ width: '1200px', height: '850px' }}>
      <h1>{projectName}: Milestone {currentMilestone}</h1>
      <TopBar />
      {items.length > 0 && <Chrono
        items={items}
        mode="VERTICAL"
        cardHeight="600"
        />}
    </div>
  );
};

export default MilestoneDetails;