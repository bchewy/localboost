import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import '../components/auth/registration-student.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getDatabase, ref, set } from "firebase/database";


const RegistrationStudent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for storing errors
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const auth = getAuth(app);
    const skillOptions = [
        { value: 'Website Design', label: 'Website Design' },
        { value: 'Mobile App Design', label: 'Mobile App Design' },
        { value: 'Social Media Marketing', label: 'Social Media Marketing' }
    ];
    const animatedComponents = makeAnimated();
    const [portfolioLink, setPortfolioLink] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [transcripts, setTranscripts] = useState('');
    const registrationStudent = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const db = getDatabase();
                const newStudent = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    skills: skillOptions, //don't know how to get this to work properly
                    portfolioLink: portfolioLink,
                    portfolio: portfolio,
                    transcripts: transcripts
                }
                set(ref(db, 'students/' + userCredential.user.uid), newStudent);
                setError("Successfully created account!")
            }).catch((error) => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className='registration-student-container'>
            <h1>
                <span>Register as a Student</span>
                <br></br>
            </h1>
            <form className="registration-student-form" onSubmit={registrationStudent}>
                <div className="registration-student-container1">
                    <div className="registration-student-container2">
                        <label className="registration-student-text03">First Name</label>
                        <br />
                        <label className="registration-student-text04">Last Name</label>
                        <br />
                        <label className="registration-student-text05">Email</label>
                        <br />
                        <label className="registration-student-text06">Password</label>
                        <br />
                        <label className="registration-student-text07">
                            <span>Confirm Password</span>
                        </label>
                        <br />
                        <label className="registration-student-text11">
                            <span>Select Your Skills</span>
                        </label>
                        <br />
                        <label className="registration-student-text15">
                            <span>Upload Certifications/Transcripts</span>
                        </label>
                        <br />
                        <label className="registration-student-text21">
                            <span>Link Your Portfolio</span>
                        </label>
                        <br />
                        <label className="registration-student-text27">
                            <span>Upload Your Portfolio</span>
                        </label>
                    </div>
                </div>

                <div className="registration-student-container3">
                    <div className="registration-student-container4">
                        <div className="registration-student-container5">
                            <div className="registration-student-container6">
                                <div className="registration-student-container7">
                                    <div className="registration-student-container8">
                                        <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="input"
                                            name="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="registration-student-textinput1 input"
                                            name="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            className="registration-student-textinput2 input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            name="email"
                                        />
                                        <br />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="registration-student-input input"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <br />
                                        <input
                                            type="password"
                                            placeholder="Re-enter your password"
                                            className="registration-student-input1 input"
                                            name="password"
                                        />
                                    </div>
                                </div>
                                <br />
                                <Select
                                    required
                                    className="registration-student-select"
                                    name="skills"
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    options={skillOptions}
                                />
                            </div>
                            <br />
                            <br />

                            <input
                                type='file'
                                className="registration-student-file"
                                name='transcripts'
                                value={transcripts}
                                onChange={(e) => setTranscripts(e.target.value)}
                            />
                            <br />

                        </div>
                        <input
                            type="text"
                            placeholder="Enter your portfolio link"
                            className="registration-student-textinput3 input"
                            name="portfolioLink"
                            value={portfolioLink}
                            onChange={(e) => setPortfolioLink(e.target.value)}
                        />
                        <br />

                    </div>
                    <input type='file'
                        className="registration-student-file"
                        name="portfolio"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                    />
                    <br />
                    <br />
                    <br />

                    <button className="button" type="submit">Register</button>
                </div>
            </form>
            <p>{error}</p>
        </div>

    )
}

export default RegistrationStudent;