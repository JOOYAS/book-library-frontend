import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
    const [user, setUser] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('token'))
        // console.log("userDAta: ", data);

        if (data) setUser(data.value)
    }, [])
    console.log("user", user);

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    };

    return (
        <section className='section'>
            <div className='user-account'>
                <h1>User Account</h1>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </section>
    );
};

export default UserAccount