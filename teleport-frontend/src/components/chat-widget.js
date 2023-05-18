import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import { db } from '../firebase-config';
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, serverTimestamp,}
from "firebase/firestore";

const ChatWidget = (props) => {
//   useEffect(() => {
//     addResponseMessage('Welcome to this awesome chat!');
//   }, []);
  const handleNewUserMessage = async (message) => {
    console.log(`New message incoming! ${message}`);
    await addDoc(collection(db, "messages"), {
        text: message,
        created_at: serverTimestamp(),
        uid: 'aaa'
    });
};

return (
    <div className="ChatWidget">
        <Widget
            handleNewUserMessage={handleNewUserMessage}
        />
    </div>
  );
}

export default ChatWidget;