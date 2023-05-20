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

  const docRef = doc(db, "projects", projectID);

  const q = query(
    collection(docRef, "milestones"),
    where("milestone_number", "==", currentMilestone),
    orderBy("timestamp", "asc"));

  const getChangelog = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(item => {
      setItems(items => [...items, {
        title: item.data().timestamp,
        cardTitle: item.data().subject,
        cardDetailedText: "something"}]);
    });
  };

  useEffect(() => {
    getChangelog();
  }, []);


  // const getChangelog = async () => {
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach(item => {
  //     const data = [];
  // for(const key in )
  //     setItems(items => [...items, {
  //       title: item.data().timestamp,
  //       cardTitle: item.data().subject,
  //       cardDetailedText: "something"
  //     }]);
  //   });
  // };

  // useEffect(() => {
  //   getChangelog();
  // }, []);

  // onSnapshot(q, (snapshot) => {
  //   const arr = [];
  //   snapshot.forEach((doc) => {
  //     console.log(doc.id, '=>', doc.data());
  //     arr.push(doc.data());
  //   });
  //   setItems(arr);
  // });


  // useEffect(() => {
  //   getDocs(q, (snapshot) => {
  //     const arr = [];
  //     snapshot.forEach((doc) => {
  //       console.log(doc.id, '=>', doc.data());
  //       arr.push(doc.data());
  //     });

  //     setItems(arr);
  //   });
  // }, []);



  //   return arr;
  //   setItems(items => [...items, {
  //     title: doc.data().timestamp,
  //     cardTitle: doc.data().title}]);
  // });

  

  // const items = [{
  //   title: "May 1940",
  //   cardTitle: "Dunkirk",
  //   url: "http://www.history.com",
  //   cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  //   cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  //   media: {
  //     type: "IMAGE",
  //     source: {
  //       url: "http://someurl/image.jpg"
  //     }
  //   }
  // }];
  console.log(items);
  return (
    <div style={{ width: '500px', height: '950px' }}>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  )
}

export default TimelineTest;