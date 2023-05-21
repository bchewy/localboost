import React from "react";
import { Grid, Button, TextField } from '@mui/material';
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import "../style.css";
import { Chrono } from "react-chrono";

import RedirectButton from "../components/RedirectButton";
import ChatWidget from "../components/ChatWidget";

import { app } from './firebase';
import { getFirestore, collection, getDocs, query, getDoc, orderBy, doc }
  from "firebase/firestore";

const db = getFirestore(app);

const MilestoneOverview = (props) => {
    const user = "a0001";
    const projectID = "ryD3vfpxfmg7lzuSgak6";
    const [items, setItems] = useState([]);    
    const [users, setUsers] = useState([]);

    const fetchCardData = async () => {
        const docRef = doc(db, "projects", projectID);

        const userSnap = await getDoc(docRef);
        setUsers(userSnap.data().users);

        let chatRecipient = null;
        if (users[0] !== user) {
            chatRecipient = users[0];
        } else {
            chatRecipient = users[1];
        }

        const q = query(
            collection(docRef, "milestones"),
            orderBy("seq_number", "asc"));
        
        const snapshot = await getDocs(q);

        const newItems = [];
        snapshot.forEach(milestone => {
            const cashOut = milestone.data().renumeration.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

            const payload = {
                milestoneID: milestone.id,
                senderUser: user,
                recipientUser: chatRecipient,
            }

            newItems.push({
                title: milestone.data().seq_number,
                cardTitle: milestone.data().title,
                cardSubtitle: cashOut,
                timelineContent:
                    <div>
                        <p>{milestone.data().summary}</p>
                        <RedirectButton link="/milestone-details" text="View Details" data={payload} />
                    </div>
            });
        });

        setItems(newItems);
    };

    useEffect(() => {
        fetchCardData();
    }, []);

    let chatRecipient = null;
    if (users[0] !== user) {
        chatRecipient = users[0];
    } else {
        chatRecipient = users[1];
    }

    return (
        <div style={{ display:'flex', justifyContent:'center', alignItems: 'center' }}>
            <h1>Milestone Overview</h1>
            {items.length > 0 && <Chrono
            items={items}
            mode="HORIZONTAL"
            itemWidth={300}
            showAllCardsHorizontal={true}
            />}
            <ChatWidget sender={user} recipient={chatRecipient}/>
        </div>
    )

};

export default MilestoneOverview;