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
      const meetupCollection = collection(db, "projects"); // change "meetups" to your collection id
      const docRef = await addDoc(meetupCollection, meetupData);
      console.log("Document written with ID: ", docRef.id);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }


  return (
    <section>
      <h1>Add New Listing</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewProjectPage;
