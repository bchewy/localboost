import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './registration-company.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getDatabase, ref, set } from "firebase/database";

const RegistrationCompany = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for storing errors
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const animatedComponents = makeAnimated();
    const skillOptions = [
        { value: 'Website Design', label: 'Website Design' },
        { value: 'Mobile App Design', label: 'Mobile App Design' },
        { value: 'Social Media Marketing', label: 'Social Media Marketing' }
    ];
    const registrationCompany = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const db = getDatabase();
                const newCompany = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    skills: skillOptions //don't know how to get this to work properly
                }
                set(ref(db, 'companies/' + userCredential.user.uid), newCompany);
            }).catch((error) => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className='registration-company-container'>
            <h1>
                <span>Register as a Company!</span>
                <br></br>
            </h1>
            <form className="registration-company-form" onSubmit={registrationCompany}>
                <div className="registration-company-container1">
                    <div className="registration-company-container2">
                        <label className="registration-company-text03">First Name</label>
                        <br />
                        <label className="registration-company-text04">Last Name</label>
                        <br />
                        <label className="registration-company-text05">Email</label>
                        <br />
                        <label className="registration-company-text06">Password</label>
                        <br />
                        <label className="registration-company-text07">
                            <span>Confirm Password</span>
                        </label>
                        <br />
                        <label className="registration-company-text11">
                            <span>What do you need?</span>
                        </label>
                        <br />
                    </div>
                </div>

                <div className="registration-company-container3">
                    <div className="registration-company-container4">
                        <div className="registration-company-container5">
                            <div className="registration-company-container6">
                                <div className="registration-company-container7">
                                    <div className="registration-company-container8">
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
                                            className="registration-company-textinput1 input"
                                            name="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            className="registration-company-textinput2 input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            name="email"
                                        />
                                        <br />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="registration-company-input input"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <br />
                                        <input
                                            type="password"
                                            placeholder="Re-enter your password"
                                            className="registration-company-input1 input"
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
                                {/* <select
                                    multiple
                                    required
                                    className="registration-company-select"
                                >
                                    <option value="Option 1">Website Design</option>
                                    <option value="Option 2">Mobile App Design</option>
                                    <option value="Option 3">Social Media Marketing</option>
                                </select> */}
                            </div>
                            <br />

                        </div>

                    </div>
                    <br />

                    <button className="button" type="submit">Register</button>
                </div>
            </form>
            <p>{error}</p>
        </div>

    )
}

export default RegistrationCompany;