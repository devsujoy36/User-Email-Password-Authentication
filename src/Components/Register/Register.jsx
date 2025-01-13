import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../Firebase/Firebase.config'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Register = () => {
  const btnStyle =
    'bg-emerald-500 py-2 px-4 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black  font-semibold active:scale-95 cursor-pointer transition-all'

  const [user, setUser] = useState()
  console.log(user)
  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')

  const [showHidePass, setShowHidePass] = useState(true)

 

  const handleRegister = e => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    console.log(email, ' ', password)

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters or longer')
      return
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your Password should have at least one uppercase characters')
      return;
    }
    else if (!/[a-z]/.test(password)) {
      setRegisterError('Your Password should have at least one lowercase characters')
      return;
    }

    setRegisterError('')
    setSuccess('')

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        setUser(res.user)
        setSuccess('User Created Successfully')
      })
      .catch(error => {
        setRegisterError(error.message)
        console.log(error.message)
      })
  }

  const googleProvider = new GoogleAuthProvider()
  const handleGoogleLogin = () => {
    setRegisterError('')
    setSuccess('')
    signInWithPopup(auth, googleProvider)
      .then(res => {
        setUser(res.user)
        setSuccess('User Created Successfully')
      })
      .Catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='max-w-screen-2xl lg:my-20 lg:mx-auto mx-10'>
      <Helmet>
        <title>UEPA | Register </title>
      </Helmet>
      <div className='border p-10 rounded-md shadow-lg my-10  lg:w-4/12 md:w-6/12 mx-auto'>
        <form
          onSubmit={handleRegister}
          className='flex flex-col gap-5 '
        >
          <h1 className='text-4xl font-bold text-center text-emerald-600'>
            Register
          </h1>
          <input type='text' name='name' placeholder='Name' className='border rounded-md px-4 py-3' required />
          <input type='email' name='email' placeholder='Email' className='border rounded-md px-4 py-3' required />
          <input type='number' name='phone' placeholder='Phone' className='border rounded-md px-4 py-3' required />
          <div className='flex justify-between items-center border rounded-md relative'>
            <input type={showHidePass ? "password" : "text"} name='password' placeholder='Password' className='border  w-full rounded-md px-4 py-3' required />
            <div onClick={()=>setShowHidePass(!showHidePass)} className='absolute right-2 text-xl'>
              {showHidePass ? <BiSolidHide /> : <BiShow />}
              </div>
          </div>
          <div className='flex text-xs gap-1 items-center'>
            <input type="checkbox" id='accept'/><label htmlFor='accept'>Accept out Terms and Conditions</label>
          </div>
            <Link className='text-xs hover:underline font-medium transition-all text-center' to={"/login"}>Already Have an Account?</Link>

          <input type='submit' value={'Register'} className={btnStyle} />
        </form>
        <div className="mt-6 flex flex-col gap-3 justify-between">
          <button onClick={handleGoogleLogin} className={btnStyle} >Continue with Google </button>
          <button type="" className={btnStyle} >Continue with Github </button>
          <button type="" className={btnStyle} >Continue with Facebook</button>
        </div>
        {registerError && <p className="text-xs text-red-500">{registerError}</p>}
        {success && <p className="text-xs text-emerald-500">{success}</p>}
      </div>
    </div>
  )
}

export default Register
