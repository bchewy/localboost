import { db } from "./firebase-config";

import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc,}
from "firebase/firestore";

const ListingsCollectionRef = collection(db, "listings");
class Listings{
  addListings = (newListing) => {
    return addDoc(ListingsCollectionRef, newListing);
  }
  getAllListings = () => {
    return getDocs(ListingsCollectionRef);
  }
  getListings = (id) => {
    const listingDoc = doc(db, "listings", id);
    return getDoc(listingDoc);
  }
}

export default new Listings();
