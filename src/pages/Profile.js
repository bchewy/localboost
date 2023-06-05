import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import galgadotImage from '../components/profile/galgadot.jpg';
import '../components/profile/Profile.css'
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';

const Profile = () => {
    // get signed-in user
    const [firstName, setFirstName] = useState(""); // useState hook to store firstName
    const [lastName, setLastName] = useState("");
    const [availability, setAvailability] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [yoe, setYoe] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");
    const [isCompany, setIsCompany] = useState(false);
    const [skillsHeader, setSkillsHeader] = useState("Skills");
    const [companyName, setCompanyName] = useState("");
    const [uid, setUid] = useState(''); // useState hook to store userId

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUid(uid);
                const db = ref(getDatabase());
                console.log(uid);
                get(child(db, `companies/${uid}`)).then((snapshot) => {
                    // If it is a company
                    if (snapshot.exists()) {
                        console.log("Is a company!");
                        setIsCompany(true);
                        setSkillsHeader("Skills Needed");
                        const firstNameValue = snapshot.val().firstName;
                        setFirstName(firstNameValue); // Assigning value to firstName state
                        const lastNameValue = snapshot.val().lastName;
                        setLastName(lastNameValue);
                        const companyName = snapshot.val().companyName;
                        setCompanyName(companyName);
                        const availabilityValue = snapshot.val().availability;
                        setAvailability(availabilityValue);
                        if (availabilityValue == null) {
                            setAvailability("Not set yet!");
                        };
                        const ageValue = snapshot.val().age;
                        setAge(ageValue);
                        if (ageValue == null) {
                            setAge("Not set yet!");
                        };
                        const locationValue = snapshot.val().location;
                        setLocation(locationValue);
                        if (locationValue == null) {
                            setLocation("Not set yet!");
                        };
                        const yoeValue = snapshot.val().yoe;
                        setYoe(yoeValue);
                        if (yoeValue == null) {
                            setYoe("Not set yet!");
                        }
                        const aboutValue = snapshot.val().about;
                        setAbout(aboutValue);
                        if (aboutValue == null) {
                            setAbout("Not set yet!");
                        }
                        const skillsValue = snapshot.val().skills;
                        setSkills(skillsValue);
                        if (skillsValue == null) {
                            setSkills("Website Creation");
                        }
                     } else {
                            // If it is a student
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
                                        setAvailability("Not set yet!");
                                    };
                                    const ageValue = snapshot.val().age;
                                    setAge(ageValue);
                                    const locationValue = snapshot.val().location;
                                    setLocation(locationValue);
                                    if (locationValue == null) {
                                        setLocation("Not set yet!");
                                    };
                                    const yoeValue = snapshot.val().yoe;
                                    setYoe(yoeValue);
                                    const aboutValue = snapshot.val().about;
                                    setAbout(aboutValue);
                                    if (aboutValue == null) {
                                        setAbout("Not set yet!");
                                    }
                                    const skillsValue = snapshot.val().skills;
                                    setSkills(skillsValue);
                                    if (skillsValue == null) {
                                        setSkills("Website Creation");
                                    }
                                }
                            })
                        }
                }).catch((error) => {
                    console.error(error);
                });
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };
    const handleSignOut = () => {
        const auth = getAuth();
        auth.signOut().then(() => {
            // Sign-out successful.
            navigate('/sign-in');
        }).catch((error) => {
            // An error happened.
        });
    };
    function ViewActiveProjects() {
        navigate('/active-projects');
    }

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="profile-container03">
                <div className="profile-container04">
                    <div className="profile-container01">
                        <img src={galgadotImage} alt="galgadot" className="profile-image" />
                    </div>
                    <div className="profile-container05">
                        <div className="profile-container06">
                            <div className="profile-container07">
                                <span className="profile-text06">{firstName} {lastName}</span>
                                <span className="profile-text99">{companyName}</span>
                                <span className="profile-text07">Website Creation</span>
                                <br />
                            </div>
                            <div className="profile-container08">
                                <button className="profile-button2 button">Resume</button>
                                <button className="profile-button1 button">Contact</button>
                                </div><div className="profile-container07a">
                                <button className="profile-button3 button" onClick = {ViewActiveProjects}>View Active Projects</button>
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
                            <span className="profile-text18">{availability}</span>
                            <span className="profile-text19">{age}</span>
                            <span className="profile-text20">{location}</span>
                            <span className="profile-text21">{yoe}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="profile-container98">
                        <button className="profile-edit-button" onClick={handleEditProfile}>Edit Profile</button>
                    </div>
                    <div className="profile-container98">
                        <button className="profile-edit-button" onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="profile-container15">
                <h2>About</h2>
                <div className="profile-text23">
                    <span>{about}
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <div className="profile-container16">
                <h2>{skillsHeader}</h2>
                <span className="profile-text29">
                    {/* display the skills, which is an array*/}
                    <span className="profile-text29">
                        <span>Website Creation</span>
                        <br></br>
                    </span>
                    <br></br>
                </span>
                {/* <span className="profile-text29">
                    <span>Dogs </span>
                    <br></br>
                </span>
                <span className="profile-text32">
                    <span>Dogs </span>
                    <br></br>
                </span>
                <span className="profile-text35">
                    <span>Dogs </span>
                    <br></br>
                </span> */}
            </div>
        </div>
    )
}

export default Profile
