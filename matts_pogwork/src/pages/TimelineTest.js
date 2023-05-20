import React from "react";
import "../style.css";
import { Chrono } from "react-chrono";

import { db } from './firebase-store';
import {collection, addDoc, query, serverTimestamp, onSnapshot, orderBy, doc}
from "firebase/firestore";



const TimelineTest = (props) => {
  // TODO: use authentication to check the current user uid
  const user = "a0001";

  

  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];

  return (
    <div style={{ width: '500px', height: '950px' }}>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  )
}

export default TimelineTest;