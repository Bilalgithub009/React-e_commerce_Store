import { useState } from "react";
import { auth } from "../utilis/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
    


function Signin(){


    const [email , setEmail] = useState("")   
    const [password , setPassword] = useState("")  
  //  const [loading , setLoading] = useState(true)
   const navigate = useNavigate()
 
  const signincheck = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('user' , user)
      navigate('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert('error.message')
    });
    
    

  }


return(
<>

<div className="  flex-col   justify-center  py-16 ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm me-5">
    
    <h2 className="mt- text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">
      Sign in to your account
      <br />
      Welcome to Ecommerce Store 
    </h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6 " action="#" method="POST">
      <div>
        
        <div className="mt-2 font-bold   ">
          <input
            id="email"
            placeholder="Email"
            name="email"
            // label= "email"
            value={email}
            onChange={(e)=> setEmail (e.target.value)}
            type="email"
            // autoComplete="email"
            required=""
            className="block w-full p-4 pt-2 pb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2 font-bold ">
          <input
            id="password"
            placeholder="password"
            name="password"
            label= "password"
            value={password}
            onChange={(e)=> setPassword (e.target.value)}
            type="password"
            autoComplete="current-password"
            required=""
            className="block w-full p-4 pt-2 pb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <Link onClick={signincheck}
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </Link>
        

        
        
      </div>
    </form>
    
  </div>
</div>





</>



)

}

export default Signin;