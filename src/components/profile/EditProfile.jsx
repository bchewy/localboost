import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import ReactDOM from "react-dom";
import galgadotImage from '../../images/galgadot.jpg';
import { useHistory } from 'react-router-dom';
import './EditProfile.css'
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const EditProfile = () => {
    const auth = getAuth();
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
        const currentUser = auth.currentUser;
        if (currentUser) {
            const uid = currentUser.uid;
            setUid(uid);
            const db = ref(getDatabase());
            console.log(uid);
            // if it is a company
            get(child(db, `companies/${uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("Is a company!");
                    const firstNameValue = snapshot.val().firstName;
                    setFirstName(firstNameValue); // Assigning value to firstName state
                    const lastNameValue = snapshot.val().lastName;
                    setLastName(lastNameValue);
                    const aboutValue = snapshot.val().about;
                    setAbout(aboutValue);
                    const skillsValue = snapshot.val().skills;
                    setSkills(skillsValue);
                }
                // if it is a student
                else {
                    get(child(db, `students/${uid}`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            console.log("Is a student!");
                            const firstNameValue = snapshot.val().firstName;
                            setFirstName(firstNameValue); // Assigning value to firstName state
                            const lastNameValue = snapshot.val().lastName;
                            setLastName(lastNameValue);
                            const availabilityValue = snapshot.val().availability;
                            setAvailability(availabilityValue);
                            if (availabilityValue == null) {
                                setAvailability(" ");
                            };
                            const ageValue = snapshot.val().age;
                            setAge(ageValue);
                            if (ageValue == null) {
                                setAge("Not set yet!");
                            };
                            const locationValue = snapshot.val().location;
                            setLocation(locationValue);
                            if (locationValue == undefined) {
                                setLocation("");
                            };
                            const yoeValue = snapshot.val().yoe;
                            setYoe(yoeValue);
                            if (yoeValue == undefined) {
                                setYoe("Not set yet!");
                            }
                            const aboutValue = snapshot.val().about;
                            setAbout(aboutValue);
                            if (aboutValue == undefined) {
                                setAbout("");
                            }
                        }
                    })
                }
            }).catch((error) => {
                console.error(error);
            });
        }
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
        const db = getDatabase();
        const user = auth.currentUser;
        const uid = user.uid;
        // if is a company
        if (user) {
            get(child(db, `companies/${uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    db.ref('companies/' + uid).update({
                        firstName: firstName,
                        lastName: lastName,
                        about: about,
                        skills: skills
                    })
                }
                // if is a student
                else {
                    const updateStudent = {
                        // firstName: firstName,
                        // lastName: lastName,
                        // availability: availability,
                        age: age,
                        location: location,
                        yoe: yoe,
                        about: about
                        // skills: skills
                    }
                    db.ref('students/' + uid).update(updateStudent);
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    };

        // onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         const uid = user.uid;
        //         const db = ref(getDatabase());
        //         console.log(uid);
        //         get(child(db, `companies/${uid}`)).then((snapshot) => {
        //             // If it is a company
        //             if (snapshot.exists()) {
        //                 console.log("Is a company!");
        //                 const firstNameValue = snapshot.val().firstName;
        //                 setFirstName(firstNameValue); // Assigning value to firstName state
        //                 const lastNameValue = snapshot.val().lastName;
        //                 setLastName(lastNameValue);
        //                 // const aboutValue = snapshot.val().about;
        //                 // setAbout(aboutValue);
        //                 // const skillsValue = snapshot.val().skills;
        //                 // setSkills(skillsValue);
        //             } else {
        //                 // If it is a student
        //                 get(child(db, `students/${uid}`)).then((snapshot) => {
        //                     if (snapshot.exists()) {
        //                         console.log("Is a student!");
        //                         console.log(snapshot.val());
        //                         const firstNameValue = snapshot.val().firstName;
        //                         setFirstName(firstNameValue); // Assigning value to firstName state
        //                         const lastNameValue = snapshot.val().lastName;
        //                         setLastName(lastNameValue);
        //                         // const availabilityValue = snapshot.val().availability;
        //                         // setAvailability(availabilityValue);
        //                         // if (availabilityValue == null) {
        //                         //     setAvailability("Not set yet!");
        //                         // };
        //                         // const ageValue = snapshot.val().age;
        //                         // setAge(ageValue);
        //                         // if (ageValue == null) {
        //                         //     setAge("Not set yet!");
        //                         // };
        //                         // const locationValue = snapshot.val().location;
        //                         // setLocation(locationValue);
        //                         // if (locationValue == undefined) {
        //                         //     setLocation("Not set yet!");
        //                         // };
        //                         // const yoeValue = snapshot.val().yoe;
        //                         // setYoe(yoeValue);
        //                         // if (yoeValue == undefined) {
        //                         //     setYoe("Not set yet!");
        //                         // }
        //                         // const aboutValue = snapshot.val().about;
        //                         // setAbout(aboutValue);
        //                         // if (aboutValue == null) {
        //                         //     setAbout("Not set yet!");
        //                         // }
        //                         // const skillsValue = snapshot.val().skills;
        //                         // setSkills(skillsValue);
        //                         // console.log(skillsValue);
        //                         // if (skillsValue == null) {
        //                         //     setSkills("Website Creation");
        //                         // }
        //                     }
        //                 })
        //             }

        //         }).catch((error) => {
        //             console.error(error);
        //         });
        //         // ...
        //     } else {
        //         // User is signed out
        //         // ...
        //     }
        // });

    const navigate = useNavigate();

    return (
        <div className="profile-container">
            <form className="edit-profile-form" onSubmit={handleSubmit}>
                <h1>Edit Profile</h1>
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
                                    <input type="number" name="age" className="age" value={age} onChange={handleAgeChange}/>
                                </span>
                                <span className="profile-text20">
                                    <input type="text" name="location" className="location" value={location} onChange={handleLocationChange}/>
                                </span>
                                <span className="profile-text21">
                                    <input type="number" name="yoe" className="yoe" value={yoe} onChange={handleYoeChange}/>
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
                            <input type="text" placeholder="Tell others what kind of projects you are interested in!" className="input-about" value={about} onChange={handleAboutChange}/>
                        </span>
                        <br></br>
                        <br></br>
                        <br></br>
                    </span>
                </div>
                <div className="profile-container15">
                    <h2 className="profile-text28">Skills</h2>
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
        </div>
    )
}
// }
export default EditProfile
