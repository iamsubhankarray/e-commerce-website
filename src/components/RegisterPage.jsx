import React, { useState } from 'react'

const RegisterPage = () => {
  const[email,setEmail]=useState("")
  const[password,setpassword]=useState("")
  return (
    <div>
      <input
        type="email"
        name=""
        id=""
        placeholder="enter your email"
        value={email}
        onChange={(text) => setEmail(text.target.value)}
      />
      <input
        type="email"
        name=""
        id=""
        placeholder="enter your password"
        value={password}
        onChange={(text) => setPassword(text.target.value)}
      />
    </div>
  )
}

export default RegisterPage