import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

const UserRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default UserRoute
