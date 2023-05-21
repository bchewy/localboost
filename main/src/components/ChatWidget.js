import React, { useEffect } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import { app } from "../pages/firebase";
import {collection, addDoc, query, serverTimestamp, onSnapshot, orderBy, doc, getFirestore}
from "firebase/firestore";

const db = getFirestore(app);

const ChatWidget = (props) => {

  const senderUser = props.sender;
  const recipientUser = props.recipient;

  var documentId = [senderUser, recipientUser].sort().join("-"); // Chatroom ID is the concatenation of the two user IDs, sorted alphabetically separated by a hyphen

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
            if (change.doc.data().user !== senderUser) {
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
            if (change.doc.data().user !== senderUser) {
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
      user: senderUser,
      text: newMessage,
      timestamp: serverTimestamp()
    });
  };

  const title = "Chat with " + recipientUser;

  return (
    <div className="ChatWidget">
        <Widget
            handleNewUserMessage={handleNewUserMessage}
            title={title}
            subtitle=""
            emojis="false"
            showBadge="false"
        />
    </div>
  );
}

export default ChatWidget;