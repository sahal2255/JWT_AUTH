import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'

const UserRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default UserRoute
