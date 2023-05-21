// // export default FavoritesPage;

// import Card from "../components/ui/Card";
// import classes from "./MilestoneReview.css";
// import { useRef } from "react";
// import { useState } from "react";
// import { getStorage, ref, uploadBytes } from "firebase/storage";
// import { app } from "./firebase";

// function MilestoneReview(props) {
//   const titleInputRef = useRef();
//   const descriptionInputRef = useRef();
//   const addressInputRef = useRef();
//   const imageInputRef = useRef();
//   const [imageUpload, setImage] = useState(null);
//   const storage = getStorage(app);

//   function handleUpload() {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       alert("file uploaded");
//     });
//   }
//   function submitHandler(event) {
//     event.preventDefault();
//     const enteredTitle = titleInputRef.current.value;
//     const enteredImage = imageInputRef.current.value;
//     const enteredAddress = addressInputRef.current.value;
//     const enteredDescription = descriptionInputRef.current.value;

//     const meetupData = {
//       title: enteredTitle,
//       image: enteredImage,
//       address: enteredAddress,
//       description: enteredDescription,
//     };
//     props.onAddMeetup(meetupData);
//   }
//   return (
//     <div>
//       <h1>Milestone</h1>
//       <Card>
//         <form className={classes.form} onSubmit={submitHandler}>
//           <div className={classes.control}>
//             <label htmlFor="title">Upload File</label>
//             <input type="url" required id="image" ref={imageInputRef} />
//             <input
//               type="file"
//               onChange={(event) => {
//                 setImage(event.target.files[0]);
//               }}
//             />
//             <button onClick={handleUpload}>Upload</button>
//           </div>
//           <div className={classes.control}>
//             <label htmlFor="description">Type In Updates</label>
//             <textarea
//               required
//               id="description"
//               rows="5"
//               ref={descriptionInputRef}
//             ></textarea>
//           </div>
//           <div className={classes.actions}>
//             <button>View Milestones</button>
//             {/* <Link to="/Milestone">View Milestones</Link> */}
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// }
// export default MilestoneReview;
// // export default Milestone_review;
import { useNavigate } from "react-router-dom";
import NewMilestoneForm from "../components/milestone/NewMilestoneForm";
import { app } from "./firebase";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

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
    function addMilestoneHandler(meetupData) {
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
      <h1>Add New Milestone</h1>
      <NewMilestoneForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewProjectPage;
