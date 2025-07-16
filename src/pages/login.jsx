import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { setItemWithExpiry } from '../components/localStorage';


const Login = () => {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target))

        axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`, formData, {
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
                console.error("login page:", error);
            });
    }

    return (
        <>
            <section className='section'>
                <h1 className='heading'>Login</h1>
                <form className='auth-form' onSubmit={handleSubmit}>
                    <label htmlFor='email'>
                        Email
                        <input type="email" id="email" name='email' placeholder='Enter your Email' required />
                    </label>
                    <br />
                    <label htmlFor='password'>
                        Password
                        <input type="password" id="password" name='password' placeholder='* * * * * * * *' required />
                    </label>
                    <br />
                    <button type="submit">Login</button>
                    <p>Create new account <Link to={'/user/signup'}>Signup</Link></p>
                </form>
            </section>

        </>
    )
}

export default Login