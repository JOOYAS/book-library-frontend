import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img className='logo-img' src="/book-svgrepo-com.svg" alt="" />
                <span>BooklibrarY</span>
            </div>

            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/books"}>Books</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/user/account"}>Account</Link>
                {/* <Link to={"/user/login"}>login</Link >
                <Link to={"/user/signup"}>signup</Link > */}
            </nav>
        </header>
    )
}

export default Header