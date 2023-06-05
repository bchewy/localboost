import Card from "../ui/Card";
import classes from "../ui/Form.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const tagsInputRef = useRef();
  const imageInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredTags = tagsInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData= {
        name: enteredTitle,
        image: enteredImage,
        address: enteredTags,
        description: enteredDescription,
        status: "unmatched"
  }
  props.onAddMeetup(meetupData)
}
  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Listing Name</label>
            <input type="text" required id="name" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Listing Image</label>
            <input type="url" required id="image" ref={imageInputRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="tags">Category / Skills</label>
            <input type="text" required id="tags" ref={tagsInputRef}/>
            <div className={classes.control}>
              <label htmlFor="description">Description</label>
              <textarea required id="description" rows="5"ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
              <button>Add Listing</button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}
export default NewMeetupForm;
