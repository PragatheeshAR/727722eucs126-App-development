import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'; 
import '../assets/Login.css';
const quotes = [
    "Plan with ease, schedule with Poise.",
    "Organize your day, elevate your life.",
    "Efficiency meets simplicity in scheduling.",
    "Your time, your schedule, your way."
];
const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};
const Login = () => {
    const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuote(getRandomQuote());
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    return(
        <div className='maindiv'>
            <div>
                <div className='login-logo'><p></p></div>
                <div className='login-quote'><p>{currentQuote}</p></div>
                <Link to='/SignUp'><button className='login-top-signup'>Sign Up</button></Link>
            </div>
            <div className="logindiv">
                <h1>Login</h1>
                {error && <p className="error">{error}</p>}
                <form>
                    <div className="formelements">
                        <input
                            type="email"
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="details" 
                        />
                    </div>
                    <div className="formelements">
                        <input
                            type="password"
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="details" 
                        />
                    </div>
                    <Link to='/'><button type="submit" className="submitbutton">Login</button></Link>
                </form>
                <p>
                    Don't have an account?
                    <Link to='/SignUp'><button className="signup-button">Sign Up</button></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;