import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavbar, user } from "@nextui-org/react";
import { Button } from "antd";



function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const signupUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(() => {
        navigate('/Signin')
        alert("chal")

      })
    }
    catch (err) {
      console.log(err);
      // setLoading(false)
    }
  }

  //  sign in with goagle 
  function handleSigninWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('result', result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', error)
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

































   return(

     <section className=" dark:bg-gray-900 py-16 ">
  <div className="flex flex-col  items-center justify-center px- py- mx-auto md:h-screen lg:py-0">
    
    <div className="w-full bg-dark rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="font-bold leading-tight tracking-tight  md:text-4xl text-sky-500">
          Create an account
        </h1>

        <div className="flex justify-center font-bold text-3xl  text-sky-500">Sign up</div>
        
        <div className="mb-5 mt-8">
        <input className="input text-gray-900   text-md rounded-lg w-full p-3 placeholder:font-semibold"  type="name"  id="" placeholder="username" 
          required value={username} name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
          
        <div className="mb-5 mt-8">
        <input className="input text-gray-900  text-md rounded-lg w-full p-3  placeholder:font-semibold"  type="email"  id="" placeholder="email" 
          required value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-5 mt-8">
        <input className="input text-gray-900 border-gray-700 text-md rounded-lg w-full p-3  placeholder:font-semibold"  type="password"   id="" placeholder="password" 
          required value={password} name="password" onChange={(e) =>setPassword (e.target.value)} />
        </div>


   <Button className="w-full bg-blue-600 text-white text-xl p-5 font-bold" onClick={signupUser}>signup</Button>



          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a 
              
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
             <Link to={'/Signin'}>login here</Link>
            </a>
          </p> 




  /* 
          <button onClick={handleSigninWithGoogle}
            type="submit"
            className="w-full text-white  bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Signin with goagle
          </button>
      </div>
    </div> 
  </div>
</section> 
            
          
)

}

export default Signup;


