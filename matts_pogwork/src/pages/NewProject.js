import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { app } from "./firebase";
import { doc, setDoc, getFirestore } from "firebase/firestore";

function NewProjectPage() {
  const navigate = useNavigate();
  const db = getFirestore(app);
    function addMeetupHandler(meetupData) {
      fetch(
        "https://localboost-f9623-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        navigate("/", { replace: true });
      });
    }

  // function addToFirestore(meetupData) {
  //   const directory = doc(db, "cities/BJ");
  //   setDoc(directory, meetupData);
  // }
  return (
    <section>
      <h1>Add New Listing</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewProjectPage;
