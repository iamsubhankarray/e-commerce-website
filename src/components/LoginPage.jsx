import React, { useState } from "react";
import { account } from "../lib/appwrite";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [logged, setLogged] = useState(null);

  async function getLogin(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      setLogged(await account.get());
      setEmail("")
      setpassword("")
      console.log(logged);
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-96 h-1/2 bg-slate-300 rounded-md shadow-lg">
        <h1 className="text-center text-2xl font-bold text-white ">login</h1>
        <input
          className="w-3/4
          text-center
          shadow-lg
        h-10
        rounded-lg
        my-2"
          type="email"
          name=""
          id="email"
          placeholder="enter your email"
          value={email}
          onChange={(text) => setEmail(text.target.value)}
        />
        <input
          className="w-3/4
          text-center
          shadow-lg        
         h-10
        rounded-lg
        my-2"
          type="password"
          name=""
          id="password"
          placeholder="enter your password"
          value={password}
          onChange={(text) => setpassword(text.target.value)}
        />
        <button onClick={()=>getLogin(email,password)} className="bg-green-500 hover:bg-green-200 w-20 h-10">
          login 
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
