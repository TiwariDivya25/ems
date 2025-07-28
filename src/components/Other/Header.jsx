import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1>Hello, <br/><span className='text-3xl'>Divya👋</span></h1>
      <button className='bg-emerald-600 p-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header
