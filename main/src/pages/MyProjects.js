import React from "react";
import { useState, useEffect } from "react";

import { app } from './firebase';
import { getFirestore, collection, getDocs, query, where }
from "firebase/firestore";

import { Link } from 'react-router-dom';

import { Grid, Card, CardActionArea, CardHeader, CardContent } from '@mui/material';

const db = getFirestore(app);

const MyProjects = (props) => {
    const user = "a0001";
    const [items, setItems] = useState([]);

    const fetchCardData = async () => {
        const q = query(
            collection(db, "projects"),
            where("users", "array-contains", user),
        );
        
        const snapshot = await getDocs(q);
        const newItems = [];
        snapshot.forEach(project => {
            newItems.push({
                name: project.data().name,
                description: project.data().description,
                projectID: project.id,
            });
        });
        setItems(newItems);
    };

    useEffect(() => {
        fetchCardData();
    }, []);

    // const cardData = [
    //     { title: 'Card 1', content: 'Lorem ipsum dolor sit amet' },
    //     { title: 'Card 2', content: 'Consectetur adipiscing elit' },
    //     { title: 'Card 3', content: 'Sed do eiusmod tempor incididunt' },
    //     // Add more card data as needed
    // ];
    
    return (
        <div>
            <h1>My Projects</h1>
            <Grid container spacing={2}>
            {items.map((card, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea component={Link} to="/milestone-overview" state={{id: card.projectID, user: user}}>
                            <CardHeader title={card.name} />
                            <CardContent><p>{card.description}</p></CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </div>
    );
};

export default MyProjects;
