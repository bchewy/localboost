import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import Card from "../ui/Card";

function MeetupList(props) {
  return (
    <Card>
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
    </Card>
  );
}

export default MeetupList;


