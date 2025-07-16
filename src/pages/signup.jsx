import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { setItemWithExpiry } from '../components/localStorage';

const SignUp = () => {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target))

        axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/signup`, formData, {
            withCredentials: true
        })
            .then(res => res.data)
            .then(data => {
                console.log("loginpage response:", data);
                if (data.name && data.email) {
                    setItemWithExpiry("token", data) //just used localStorage instead of redux to devolop faster
                    navigate('/');
                }
                throw new Error(data);

            })
            .catch((error) => {
                console.error("signup page:", error);
            });
    }

    return (
        <section className='section'>
            <h1 className='heading'>Sign Up</h1>
            <form className='auth-form' onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Email
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Password
                    <input type="password" name="password" required />
                </label>
                <br />
                <button type="submit">Create Account</button>
                <p>Already have account? <Link to={'/user/login'}>Login</Link></p>
            </form>
        </section>
    )
}

export default SignUp