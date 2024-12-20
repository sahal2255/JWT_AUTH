import React from 'react'
import Navbar from '../components/Navbar'

const UserLayout = ({Children}) => {
  return (
    <div className='layout'>
      <Navbar />
      <main className='main-content'>
        {Children}
      </main>
    </div>
  )
}

export default UserLayout
