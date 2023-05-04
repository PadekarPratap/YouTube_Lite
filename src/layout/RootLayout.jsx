import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <>
    <header className='sticky top-0'>
        <Navbar />
    </header>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default RootLayout