import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { app } from "./firebase";
import { doc, setDoc, getFirestore, collection, addDoc } from "firebase/firestore";

function NewProjectPage() {
  const navigate = useNavigate();
  const db = getFirestore(app);
  // real time db alternative, works!
  // function addMeetupHandler(meetupData) {
  //   fetch(
  //     "https://localboost-f9623-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(meetupData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   ).then(() => {
  //     navigate("/", { replace: true });
  //   });
  // }

  // firestore alternative, works!
  async function addMeetupHandler(meetupData) {
    try {
      const meetupCollection = collection(db, "projects");
      const docRef = doc(meetupCollection); // Create a new doc reference with a generated ID
  
      // Add the document ID to meetupData
      meetupData.docId = docRef.id;
  
      // Set the document data
      await setDoc(docRef, meetupData);
  
      console.log("Document written with ID: ", docRef.id);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  


  return (
    <section>
      <h1>Add New Listing</h1>
      <p>As a small, home-based or even a micro enterprise, create a project listing, and get recommended a student. Nuture your next future employee!</p>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewProjectPage;
