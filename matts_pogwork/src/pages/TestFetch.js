import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import React, { useEffect, useState } from "react";

async function TestFetch() {
  const db = getFirestore(app);
  const collectionRef = collection(db,'cities');
  // const querySnapshot = await getDocs(collection(db, "cities"));
  // const fetchedData = querySnapshot.docs.map((doc) => {
  //    console.log(doc.id, " => ", doc.data());
  // });
//   console.log(fetchedData);

getDocs(collectionRef)
  .then((querySnapshot) => {
    const fetchedData =[];
    querySnapshot.docs.forEach((doc) => {
      fetchedData.push({
        id: doc.id,
        data: doc.data()
      });
    });

    console.log("Fetched data:", fetchedData);
  })
  .catch((error) => {
    // Handle any errors that occurred during fetching the data
    console.error("Error fetching data:", error);
  });
}
export default TestFetch;
