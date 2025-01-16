import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const LogIn = () => {
    const btnStyle = "bg-emerald-500 py-1 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black font-semibold active:scale-95 cursor-pointer transition-all"
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
        notify("Login Succesfull")
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, " ", password);
        
    }
    const notify = (text) => toast(text);
    return (
        <div className="max-w-screen-2xl lg:my-20 pb-10 lg:mx-auto mx-10">
            <ToastContainer />
            <Helmet>
                <title>UEPA | LogIn </title>
            </Helmet>
            <div className="rounded-md shadow-lg my-10 border p-10 lg:w-3/12 md:w-6/12 mx-auto">
                <form onSubmit={handleRegister} className="flex flex-col gap-5 ">
                    <h1 className="text-3xl font-bold text-center text-emerald-600">Log In</h1>
                    <input type="email" name="email" placeholder="Email" className="border rounded-md px-4 py-2" required />
                    <div className='flex justify-between items-center border rounded-md relative'>
                        <input type={showHidePass ? "password" : "text"} name='password' placeholder='Password' className='border  w-full rounded-md px-4 py-2' required />
                        <div onClick={handleShowHidePass} className='absolute right-2 text-xl'>{showHidePass ? <BiSolidHide /> : <BiShow />}</div>
                    </div>
                    <div className='flex text-xs gap-1 justify-between items-center'>
                        <Link className="hover:underline font-medium transition-all" to={"/forgottenPass"}>Forgot password?</Link>
                        <Link className="hover:underline font-medium transition-all" to={"/register"}>Create new Account?</Link>
                    </div>
                    <input type="submit" value={"Log In"} className={btnStyle} />
                </form>
                <div>
                    <div className="mt-6 flex flex-col gap-3 justify-between">
                        <button className={btnStyle} >Continue with Google </button>
                        <button type="" className={btnStyle} >Continue with Github </button>
                        <button type="" className={btnStyle} >Continue with Facebook</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LogIn