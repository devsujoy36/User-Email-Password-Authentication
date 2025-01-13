import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
const LogIn = () => {
    const btnStyle = "bg-emerald-500 py-2 px-4 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black  font-semibold active:scale-95 cursor-pointer transition-all"

    const [user, setUser] = useState()
    console.log(user);
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showHidePass, setShowHidePass] = useState(true)

    const handleShowHidePass = () => {
        if (showHidePass === true) {
            setShowHidePass(!showHidePass)
        }
        else {
            setShowHidePass(true)
        }
    }

    const handleRegister = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, " ", password);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
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
                setRegisterError(error.message);
                console.log(error.message);
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
        <div className="max-w-screen-2xl lg:my-20 pb-10 lg:mx-auto mx-10">
            <Helmet>
                <title>UEPA | LogIn </title>
            </Helmet>
            <div className="rounded-md shadow-lg my-10 border p-10">
                <form onSubmit={handleRegister} className="flex flex-col gap-5 lg:w-4/12 md:w-6/12 mx-auto   ">
                    <h1 className="text-4xl font-bold text-center text-emerald-600">Log In</h1>
                    <input type="email" name="email" placeholder="Email" className="border rounded-md px-4 py-3" required />
                    <div className='flex justify-between items-center border rounded-md relative'>
                        <input type={showHidePass ? "password" : "text"} name='password' placeholder='Password' className='border  w-full rounded-md px-4 py-3' required />
                        <div onClick={handleShowHidePass} className='absolute right-2 text-xl'>{showHidePass ? <BiSolidHide /> : <BiShow />}</div>
                    </div>
                    <input type="submit" value={"Log In"} className={btnStyle} />
                </form>
                <div>
                <div className="mt-6 flex flex-col gap-3 justify-between">
                        <button onClick={handleGoogleLogin} className={btnStyle} >Continue with Google </button>
                        <button type="" className={btnStyle} >Continue with Github </button>
                        <button type="" className={btnStyle} >Continue with Facebook</button>
                    </div>
                    {registerError && <p className="text-xs text-red-500">{registerError}</p>}
                    {success && <p className="text-xs text-emerald-500">{success}</p>}
                </div>
            </div>
        </div>
    )
}

export default LogIn