import React from "react";
import { Grid, Button } from '@mui/material';

import { useState, useEffect } from "react";
import "../style.css";
import { Chrono } from "react-chrono";

import { app } from './firebase';
import { getFirestore, collection, getDocs, query, serverTimestamp, onSnapshot, orderBy, doc, where }
  from "firebase/firestore";

const db = getFirestore(app);

const TimelineTest = (props) => {
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
      orderBy("timestamp", "desc")
    );
    const querySnapshot = await getDocs(q);

    const newItems = [];
    querySnapshot.forEach(item => {
      const urlArray = item.data().upload_url;
      const description = item.data().description;

      const Uploads = ({ urlArray }) => {
        if (urlArray === undefined) return null;
        return (
        <div>
          <p><b>Uploads</b></p>
          {urlArray.map((url, index) => (
            <p style={{align: "left"}} key={index}>
              <a href={url}>{url}</a>
            </p>
          ))}
        </div>
        );
      };

      const DownloadButton = () => {

        const handleDownload = () => {
          urlArray.forEach((url) => {
            const link = document.createElement("a");
            link.href = url;
            link.download = url;
            link.click();
          });
        };

        return (
          <Button size="small" variant="contained" onClick={handleDownload} color='primary'>
            Download
          </Button>
        );
      };

      const Content = () => {
        return (
          <Grid container spacing={6} width="1000px" justifyContent="center" alignItems="flex-start">
            <Grid item width="100px" sx={{ mr:5 }}>
              <DownloadButton />
            </Grid>
            <Grid item width="400px" zeroMinWidth>
              <p>{description}</p>
            </Grid>
          </Grid>
        );
      };

      newItems.push({
        title: item.data().timestamp.toDate().toLocaleString(),
        cardTitle: item.data().subject,
        // timelineContent: <div>
        //   <p>Uploads</p>
        //   <hr></hr>
        //   {urlArray.map(url => <p><a href={url}>{url}</a></p>)}</div>,
        timelineContent: <Content />
        
      });
    
    setItems(newItems);
    });
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  console.log(items.length);

  return (
    <div style={{ width: '1200px', height: '800px' }}>
      <h1>Project {projectID}: Milestone {currentMilestone}</h1>
      {items.length > 0 && <Chrono items={items} mode="VERTICAL" cardHeight="100" cardWidth="800" />}
    </div>
  )
}

export default TimelineTest;