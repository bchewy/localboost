import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import galgadotImage from '../components/profile/galgadot.jpg';
import { useHistory } from 'react-router-dom';
import '../components/profile/EditProfile.css'
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const EditProfile = () => {
    const [firstName, setFirstName] = useState(''); // useState hook to store firstName
    const [lastName, setLastName] = useState('');
    const [availability, setAvailability] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [yoe, setYoe] = useState('');
    const [about, setAbout] = useState('');
    const [skills, setSkills] = useState('');
    const animatedComponents = makeAnimated();
    const [uid, setUid] = useState(''); // useState hook to store userId
    const [error, setError] = useState(''); // State for storing errors
    const availabilityOptions = [
        { value: 'weekends-only', label: 'Weekends only' },
        { value: 'weekdays-only', label: 'Weekdays only' },
        { value: 'any-day', label: 'Any day' }
    ];
    const skillOptions = [
        { value: 'Website Creation', label: 'Website Creation' },
        { value: 'Mobile App Design', label: 'Mobile App Design' },
        { value: 'Social Media', label: 'Social Media' },
        { value: 'AI Content Creation', label: 'AI Content Creation' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Excel', label: 'Excel' },
        { value: 'Branding', label: 'Branding' }
    ];
    useEffect(() => {
        // get the signed-in user
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUid(uid);
                const db = ref(getDatabase());
                // if it is a student
                get(child(db, `students/${uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log("Is a student!");
                        const firstNameValue = snapshot.val().firstName;
                        setFirstName(firstNameValue); // Assigning value to firstName state
                        const lastNameValue = snapshot.val().lastName;
                        setLastName(lastNameValue);
                    }})
    }});
    }, []);

    const handleAvailabilityChange = (e) => {
        setAvailability(e.target.value);
    };
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };
    const handleYoeChange = (e) => {
        setYoe(e.target.value);
    };
    const handleAboutChange = (e) => {
        setAbout(e.target.value);
    };
    const handleSkillsChange = (e) => {
        setSkills(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setAvailability("Weekends only");
        // setAge("22");
        // setLocation("Singapore");
        // setYoe("2");
        // setAbout("I am a student at SMU, and with a flair for web development!");
        // setSkills("Website Creation");
        const db = getDatabase();
        const newStudent = {
            firstName: firstName,
            lastName: lastName,
            availability: "Weekends only",
            age: age,
            location: location,
            yoe: yoe,
            about: about,
            skills: "Website Creation"
        }
        set(ref(db, 'students/' + uid), newStudent);
        setError("Successfully updated profile!")
    };
    const navigate = useNavigate();

    return (
        <div className="profile-container">
            <form className="edit-profile-form" onSubmit={handleSubmit}>
            <div className="profile-container15">
                <h1>Edit Profile</h1>
            </div>
                <div className="profile-container03">
                    <div className="profile-container04">
                        <div className="profile-container01">
                            <img src={galgadotImage} alt="galgadot" className="profile-image" />
                        </div>
                        <div className="profile-container05">
                            <div className="profile-container06">
                                <div className="profile-container07">
                                    <span className="profile-text06">{firstName} {lastName}</span>
                                    <span className="profile-text07">Website Creation</span>
                                    <br />
                                </div>
                                <div className="profile-container08">
                                    <button className="profile-button2 button">Resume</button>
                                    <button className="profile-button1 button">Contact</button>
                                </div>
                            </div>
                        </div>
                        <div className="profile-container09">
                            <div className="profile-container10">
                                <div className="profile-container11">
                                    <span className="profile-text08">Availability: </span>
                                    <span className="profile-text09">
                                        <span>Age: </span>
                                        <br></br>
                                    </span>
                                    <span className="profile-text12">
                                        <span>Location:</span>
                                        <br></br>
                                    </span>
                                    <span className="profile-text15">
                                        <span>Years of experience:</span>
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-container12">
                        <div className="profile-container13">
                            <div className="profile-container14">
                                <span className="profile-text18">
                                    <Select
                                        required
                                        className="availability"
                                        name="availability"
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        options={availabilityOptions}
                                    />
                                </span>
                                <span className="profile-text19">
                                    <input type="number" name="age" className="age" value={age} onChange={handleAgeChange} />
                                </span>
                                <span className="profile-text20">
                                    <input type="text" name="location" className="location" value={location} onChange={handleLocationChange} />
                                </span>
                                <span className="profile-text21">
                                    <input type="number" name="yoe" className="yoe" value={yoe} onChange={handleYoeChange} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="profile-container02">
                            <button className="profile-finish-button">Finish Changes</button>
                        </div>
                    </div>

                    <div className="profile-edit-container">

                    </div>
                </div>
                <div className="profile-container15">
                    <h2 className="profile-text22">About</h2>
                    <span className="profile-text23">
                        <span>
                            <input type="text" placeholder="Tell others what kind of projects you are interested in!" className="input-about" value={about} onChange={handleAboutChange} />
                        </span>
                        <br></br>
                        <br></br>
                        <br></br>
                    </span>
                </div>
                <div className="profile-container15">
                    <h2 className="profile-text22">Skills</h2>
                    <span className="profile-text29">
                        <Select
                            required
                            className="skills"
                            name="skills"
                            closeMenuOnSelect={false}
                            isMulti
                            components={animatedComponents}
                            options={skillOptions}
                        />
                    </span>
                </div>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <p>{error}</p>
        </div>
    )
}
// }
export default EditProfile
