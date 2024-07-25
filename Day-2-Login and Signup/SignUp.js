import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/SignUp.css';
const quotes = [
    "Plan with ease, schedule with Poise.",
    "Organize your day, elevate your life.",
    "Efficiency meets simplicity in scheduling.",
    "Your time, your schedule, your way."
];

const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};
const SignUp= () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3001/users', formData);
          console.log('User registered:', response.data);
        } catch (error) {
          console.error('Error registering user:', error);
        }
      };
    const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuote(getRandomQuote());
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [error, setError] = useState('');
    return (
        <div>
            <div>
                <div className='signup-logo'></div>
                <div className='signup-quote'><p>{currentQuote}</p></div>
                <Link to='/Login'><button className='signup-top-login'>LogIn</button></Link>
            </div>
            <div className="signupdiv">
                <h2>SignUp</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="SformGroup">
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="Sinput" autoFocus
                        />
                    </div>
                    <div className="SformGroup">
                        <input
                            type="text"
                            name='username'
                            placeholder='UserName'
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="Sinput" autoFocus
                            />
                    </div>
                    <div className="SformGroup">
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="Sinput" />
                    </div>
                 <button type="submit" className="signup-submitbutton">Create Account</button>
                </form>
                <p>
                    Already have an account?
                    <Link to='/Login'><button className="login-button">LogIn</button></Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;