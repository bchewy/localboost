import React, { useEffect } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import { db } from '../firebase-config';
import {collection, addDoc, query, serverTimestamp, onSnapshot, orderBy, doc}
from "firebase/firestore";

const ChatWidget = () => {

  const currentUser = "a0001"; // TODO: use authentication to check the current user uid
  const recipientUser = "a0002"; //TODO: use the current project to get the recipient user uid

  var documentId = [currentUser, recipientUser].sort().join("-"); // Chatroom ID is the concatenation of the two user IDs, sorted alphabetically separated by a hyphen

  const docRef = doc(db, "messages", documentId);

  useEffect(() => {
    const q = query(
      collection(docRef, "history"),
      orderBy("timestamp", "asc")
    );

    let chatHistoryLoaded = false;

    // Listen for new messages
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!chatHistoryLoaded) {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            if (change.doc.data().user !== currentUser) {
              addResponseMessage(change.doc.data().text);
            }else{
              addUserMessage(change.doc.data().text);
            }
          }
        
        chatHistoryLoaded = true;
        });
      }else{
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            if (change.doc.data().user !== currentUser) {
              addResponseMessage(change.doc.data().text);
            }
          }
        });
      }
    });

    return () => unsubscribe();

  }, []);

  const handleNewUserMessage = (newMessage) => {
    // Save new message to Firestore
    addDoc(collection(docRef, "history"), {
      user: currentUser,
      text: newMessage,
      timestamp: serverTimestamp()
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