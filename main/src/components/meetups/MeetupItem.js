import classes from "./MeetupItem.module.css";
import { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../pages/firebase";
import { getFirestore,doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


function MeetupItem(props) {
  const auth = getAuth(app);
  const db = getFirestore(app)
  function ApplyforProj() {
    alert("You have been selected for this project!");
    console.log(auth.currentUser.uid);
    console.log(props.title);
    
  }

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorites</button>
        
      </div>
    </li>
  );
}

export default MeetupItem;