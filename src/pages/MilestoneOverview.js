import React from "react";
import { Grid, Button, TextField } from '@mui/material';
import { Link, useLocation } from "react-router-dom";

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
    const location = useLocation();
    const projectID = location.state.projectID;
    const user = location.state.user;
    const isCompany = location.state.isCompany;

    const [items, setItems] = useState([]);    
    const [chatRecipient, setChatRecipient] = useState("");

    const fetchRecipientUser = async () => {
        const docRef = doc(db, "projects", projectID);
        const userSnap = await getDoc(docRef);
        const users = userSnap.data().users;

        if (users[0] !== user) {
            setChatRecipient(users[0]);
        } else {
            setChatRecipient(users[1]);
        }
    }

    // console.log("Recipient is", chatRecipient);

    const fetchCardData = async () => {
        const docRef = doc(db, "projects", projectID);

        // const userSnap = await getDoc(docRef);
        // setUsers(userSnap.data().users);

        // let chatRecipient = null;
        // if (users[0] !== user) {
        //     chatRecipient = users[0];
        // } else {
        //     chatRecipient = users[1];
        // }

        // console.log(users);

        const q = query(
            collection(docRef, "milestones"),
            orderBy("seq_number", "asc"));
        
        const snapshot = await getDocs(q);

        console.log(props.recipient);

        const newItems = [];
        snapshot.forEach(milestone => {
            const cashOut = milestone.data().pay.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

            const payload = {
                projectID: projectID,
                milestoneID: milestone.id,
                senderUser: user,
                recipientUser: chatRecipient,
                isCompany: isCompany
            }

            newItems.push({
                title: milestone.data().seq_number,
                cardTitle: milestone.data().name,
                cardSubtitle: cashOut,
                timelineContent:
                    <div>
                        <p>{milestone.data().description}</p>
                        <RedirectButton link="/milestone-details" text="View Details" data={payload} />
                    </div>
            });
        });

        setItems(newItems);
    };

    useEffect(() => {
        fetchRecipientUser();
        fetchCardData();
    }, []);

    return (
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center' }}>
            <h1>Milestone Overview</h1>
            <RedirectButton link="/projects" text="Back to projects"/>
            {items.length > 0 && <Chrono
            items={items}
            mode="HORIZONTAL"
            itemWidth={300}
            cardHeight={300}
            showAllCardsHorizontal={true}
            />}
            <ChatWidget sender={user} recipient={chatRecipient}/>
        </div>
    )

};

export default MilestoneOverview;