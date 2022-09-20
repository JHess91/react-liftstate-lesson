import { useState } from "react";
import Child from "./Child";

interface IUser {
  email: string
  password: string
}

export default function Parent() {
  const [parentSend, setParentSend] = useState(0)
  const [childDeposit, setChildDeposit] = useState(0)
  const [user, setUser] = useState<IUser>({ email: '', password: ''})

  return (
    <>
     <h3>This is parent, has ${childDeposit}</h3>
     <h4>User is {user.email}</h4>
      <button onClick={() => setParentSend(600)}>Send money to Child</button>
      ---------------------

     <Child 
     money={parentSend} 
     setChildDeposit={setChildDeposit} 
     setUser={setUser} />
    </>
  )
}