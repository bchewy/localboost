import React from "react";
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

  return (
    <div style={{ width: '500px', height: '950px' }}>
      {items.length > 0 && <Chrono items={items} mode="VERTICAL" />}
    </div>
  )
}

export default TimelineTest;