import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-red-600 rounded-4xl p-20'>
        <form 
        onSubmit={(e) => {
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input 
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            required className="bg-transparent text-black outline-none border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mx-15 mt-10" type="email" placeholder='Enter your email'></input>
            <input 
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            required className="bg-transparent text-black outline-none border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-3" type="password" placeholder='Enter your password'></input>
            
            <button className='px-28 py-3 bg-emerald-600 mt-3 mb-10 rounded-4xl'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
