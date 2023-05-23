import React from "react";
import { useState, useEffect } from "react";

import { app } from './firebase';
import { getFirestore, collection, getDocs, query, where }
from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get, set } from "firebase/database";

import { Link, useNavigate } from 'react-router-dom';

import { Grid, Card, CardActionArea, CardHeader, CardContent } from '@mui/material';

const db = getFirestore(app);

const MyProjects = (props) => {
    const [isCompany, setIsCompany] = useState(false);
    const [items, setItems] = useState([]);
    const [firstName, setFirstName] = useState(""); // useState hook to store firstName
    const [userID, setUserID] = useState("");

    const fetchCardData = async () => {
        console.log(userID);
    
        const q = query(
            collection(db, "projects"),
            where("users", "array-contains", userID),
        );
        
        const snapshot = await getDocs(q);
        const newItems = [];
        snapshot.forEach(project => {
            let status = project.data().status;
            let bgColor = null;
            let textColor = null;
            if (status === "unmatched") {
                status = "Unmatched";
                bgColor = "#D61F1F";
                textColor = "#F0F0F0";
            } else if (status === "pending_milestones") {
                status = "Pending Milestones";
                bgColor = "#FFD301";
                textColor = "#000000";
            } else if (status === "in_progress") {
                status = "In Progress";
                bgColor = "#7BB662"
                textColor = "#F0F0F0";
            } else {
                status = "Completed"
                bgColor = "#006B3D";
                textColor = "#F0F0F0";
            }
    
            newItems.push({
                name: project.data().name,
                description: project.data().description,
                projectID: project.id,
                status: status,
                bgColor: bgColor,
                textColor: textColor
            });
        });
        setItems(newItems);
    };

    useEffect(() => {
        fetchCardData(userID);
    }, []);

    const navigate = useNavigate();
    const handleCardClick = (props) => {
    
        return () => {
            const payload = {
                projectID: props.projectID,
                user: props.user,
                isCompany: props.isCompany
            }

            navigate('/milestone-overview', { state:payload });
        }
    }

    return (
        <div>
            <h1>My Projects</h1>
            <p>Click into the project to view milestones</p>
            <Grid container spacing={2}>
            {items.map((card, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea onClick={handleCardClick({ projectID:card.projectID, user:userID, isCompany:isCompany })}>
                            <CardHeader title={card.name} />
                            <CardContent>
                                <p>{card.description}</p>
                            </CardContent>
                            <CardContent style={{ color: card.textColor, backgroundColor:card.bgColor}}>
                                <b>{card.status}</b>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </div>
    );
};

export default MyProjects;
