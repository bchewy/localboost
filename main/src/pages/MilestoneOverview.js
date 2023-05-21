import React from "react";
import { Grid, Button, TextField } from '@mui/material';
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import "../style.css";
import { Chrono } from "react-chrono";

import RedirectButton from "../components/RedirectButton";

import { app } from './firebase';
import { getFirestore, collection, getDocs, query, serverTimestamp, addDoc, orderBy, doc, where, onSnapshot, updateDoc }
  from "firebase/firestore";

const db = getFirestore(app);

const MilestoneOverview = (props) => {
    const user = "a0001";
    const projectID = "ryD3vfpxfmg7lzuSgak6";
    const [items, setItems] = useState([]);

    const fetchCardData = async () => {
        const docRef = doc(db, "projects", projectID);
        const q = query(
            collection(docRef, "milestones"),
            orderBy("seq_number", "asc"));
        const snapshot = await getDocs(q);

        const newItems = [];
        snapshot.forEach(milestone => {
            const cashOut = milestone.data().renumeration.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

            const payload = milestone.id

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

    return (
        <div style={{ display:'flex', justifyContent:'center', alignItems: 'center' }}>
            <h1>Milestone Overview</h1>
            {items.length > 0 && <Chrono
            items={items}
            mode="HORIZONTAL"
            itemWidth={300}
            showAllCardsHorizontal={true}
            />}
        </div>
    )

};

export default MilestoneOverview;