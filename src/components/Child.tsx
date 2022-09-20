import React, { useState } from 'react'

interface iProps {
  money: number
  setChildDeposit: Function
  setUser: Function
}

export default function Child({ money, setChildDeposit, setUser }: iProps) {
  const [form, setForm] = useState({})

  console.log(form)

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    setForm({...form, [target.name]: target.value})
  }
  

  return (
    <>
      <h3>This is Child ${money}</h3>
      <button onClick={() => setChildDeposit(2000)}>
        Send money to Parent
      </button>

      <h3>Login</h3>
      <form action="">
        <input
          type="email"
          placeholder="Email"
          onClick={handleForm}
        />
        <input
          type="password"
          placeholder="Password"
          onClick={handleForm}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            setUser(form)
          }}>
          Log In
        </button>
      </form>
    </>
  )
}
