import Card from "../components/ui/Card";
import classes from "./Milestone.css";
import { useRef } from "react";
import "../style.css";
import { Chrono } from "react-chrono";

function Milestone(props) {
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
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
        type: "IMAGE",
        source: {
            url: "http://someurl/image.jpg"
        }
        }
    }];
  return (
    <div>
        <h1>Milestones</h1>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          {/* <div className={classes.control}>
            <label htmlFor="title">Upload File</label>
            <input type="url" required id="image" ref={imageInputRef}/>
          </div>
            <div className={classes.control}>
              <label htmlFor="description">Type In Updates</label>
              <textarea required id="description" rows="5"ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
              <button>View Milestones</button>
            </div> */}
            <div style={{ width: '500px', height: '950px' }}>
            <Chrono items={items} mode="VERTICAL" />
            </div>
        </form>
      </Card>
    </div>
  );
}
export default Milestone;


