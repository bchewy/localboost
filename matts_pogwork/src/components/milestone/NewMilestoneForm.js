import Card from "../ui/Card";
import classes from "../ui/Form.module.css";
import { useRef } from "react";
import { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../pages/firebase";
import { v4 } from "uuid";
import { getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function NewMilestone(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const [imageUpload, setImage] = useState(null);
  const storage = getStorage(app);
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const milestoneData = {
      title: enteredTitle,
      description: enteredDescription,
    };
    props.onAddMeetup(milestoneData);
  }
  function handleUpload() {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("file uploaded");
    });
  }
  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              id="title"
              ref={titleInputRef}
              placeholder="provide a sequential naming that is easy to understand. example: Update 1.0"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              required
              id="description"
              rows="5"
              ref={descriptionInputRef}
              placeholder="provide a description of the update. example: This update will add a new feature that allows users to create a profile."
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Listing</button>
            <input
              type="file"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            />
            <button onClick={handleUpload}>Upload</button>
          </div>
        </form>
      </Card>
    </div>
  );
}
export default NewMilestone;
