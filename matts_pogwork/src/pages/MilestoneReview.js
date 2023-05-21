// export default FavoritesPage;

import Card from "../components/ui/Card";
import classes from "./Milestone-review.css";
import { useRef } from "react";

function MilestoneReview(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();
  const imageInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData= {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription
    
  }
  props.onAddMeetup(meetupData)
}
  return (
    <div>
        <h1>Milestone</h1>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Upload File</label>
            <input type="url" required id="image" ref={imageInputRef}/>
          </div>
            <div className={classes.control}>
              <label htmlFor="description">Type In Updates</label>
              <textarea required id="description" rows="5"ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
              <button>View Milestones</button>
              {/* <Link to="/Milestone">View Milestones</Link> */}
            </div>
        </form>
      </Card>
    </div>
  );
}
export default MilestoneReview;
// export default Milestone_review;
