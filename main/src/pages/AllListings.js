import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { app } from "./firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";


// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllListings() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProjs, setLoadedProjs] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    setIsLoading(true);
    const fetchProjs = async () => {
      const meetupCollection = collection(db, "projects"); // change "meetups" to your collection id
      const meetupSnapshot = await getDocs(meetupCollection);
      const meetupList = meetupSnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }));
      setIsLoading(false);
      setLoadedProjs(meetupList);
    };

    fetchProjs();
  }, [db]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Listings</h1>
      <MeetupList meetups={loadedProjs} />
    </div>
  );
}
export default AllListings;
