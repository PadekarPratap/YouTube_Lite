import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'

const RootLayout = () => {

    const isSideBarOpen = useSelector((state) => state.Youtube.isSidebarOpen)

  return (
    <>
    <header className='sticky top-0 z-50'>
        <Navbar />
    </header>
    <aside className={`h-[calc(100vh-3.5rem)] fixed z-50 ${isSideBarOpen ? 'left-0' : 'left-[-100%]'} md:left-0 duration-500`}>
        <Sidebar />
    </aside>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default RootLayout