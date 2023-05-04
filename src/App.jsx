import React from 'react'
import useFetch from './hook/useFetch'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import FeedPage from './pages/FeedPage'
import SearchResultsPage from './pages/SearchResultsPage'
import VideoDetails from './pages/VideoDetails'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<FeedPage />}  />
        <Route path='/searchResults/:searchQuery' element={<SearchResultsPage />}  />
        <Route path='/video/:videoId' element={<VideoDetails />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
