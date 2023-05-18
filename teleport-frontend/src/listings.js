// import { db } from "./firebase-config";

// import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc,}
// from "firebase/firestore";

// const ListingsCollectionRef = collection(db, "listings");
// class Listings{
//   addListings = (newListing) => {
//     return addDoc(ListingsCollectionRef, newListing);
//   }
//   getAllListings = () => {
//     return getDocs(ListingsCollectionRef);
//   }
//   getListings = (id) => {
//     const listingDoc = doc(db, "listings", id);
//     return getDoc(listingDoc);
//   }
// }

// export default new Listings();

import React, { useEffect, useRef, useState } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import "./App.css";

function App() {
  const listingsNameRef = useRef();
  const listingsCategoryRef = useRef();
  const listingsDescRef = useRef();
  const [listings, setListings] = useState();

  const listingsCollectionRef = collection(db, "listings");

  const createListings = async () => {
    const name = listingsNameRef.current.value;
    const size = listingsCategoryRef.current.value;

    await addDoc(listingsCollectionRef, {
      listingsName: name,
      listingsCategory: category,
      listingsDesc: description,
    });
  };

//   const updateProduct = async (id, size) => {
//     const productDoc = doc(db, "products", id);

//     await updateDoc(productDoc, {
//       productSize: size + 1,
//     });
//   };

//   const deleteProduct = async (id) => {
//     const productDoc = doc(db, "products", id);
//     await deleteDoc(productDoc);
//   };

  useEffect(() => {
    const getAllListings = async () => {
      const data = await getDocs(listingsCollectionRef);
      setListings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAllListings();
  }, []);

  console.log(listings);

  if (!listings) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      Listing Name
      <input type="text" ref={listingsNameRef} />
      <br />
      Listing Category
      <input type="text" ref={listingsCategoryRef} />
      <button onClick={createListings}>Post!</button>
      <p>Listings</p>
      {listings.map((listings) => (
        <div key={listings.id}>
          Name : {listings.listingsName}
          Category : {listings.listingsCategory}
          Description : {listings.listingsDesc}
//           <button
//             onClick={() => {
//               updateProduct(product.id, product.productSize);
//             }}
//           >
//             + 1
//           </button>
//           <button
//             onClick={() => {
//               deleteProduct(product.id);
//             }}
//           >
//             delete
//           </button>
        </div>
      ))}
    </div>
  );
}

export default App;
