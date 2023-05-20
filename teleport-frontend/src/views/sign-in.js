import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './sign-in.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for storing errors
    const auth = getAuth();
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        }
    });
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                setError('Signed in successfully!');
                navigate("/profile");
            }).catch((error) => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className="sign-in-container">
            <h1>
                <br></br>
                <span>Log in to your account</span>
                <br></br>
                <br></br>
            </h1>
            <div>
                <form className="sign-in-form" onSubmit={signIn}>
                    <div className="sign-in-container1">
                        <label className="sign-in-text05">Username</label>
                        <label className="sign-in-text06">Password</label>
                    </div>
                    <div className="sign-in-container2"></div>
                    <div className="sign-in-container3">
                        <div className="sign-in-container4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="sign-in-textinput input"
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="sign-in-textinput1 input"
                            />
                        </div>
                        <span className="sign-in-text07">Forgot password?</span>
                        <button className="sign-in-button button" type="submit">Sign In</button>
                    </div>
                </form>
                <p>{error}</p>
            </div>
            <span className="sign-in-text08">OR</span>
            <div className="sign-in-container5">
                <div className="sign-in-container6">
                    <div className="sign-in-container7">
                        <button className="sign-in-button1 button">Google</button>
                        <button className="sign-in-button2 button">Apple</button>
                    </div>
                    <button className="sign-in-button3 button">Singpass</button>
                </div>
                <button className="button">Facebook</button>
            </div>
            <span className="sign-in-text09">
                <span>
                    New to LocalBoost?
                    <span
                        dangerouslySetInnerHTML={{
                            __html: ' ',
                        }}
                    />
                </span>
                <span className="sign-in-text11">Join Now</span>
            </span>
        </div>
    )
}

export default SignIn;