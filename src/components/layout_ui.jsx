import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const LayoutUI = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default LayoutUI