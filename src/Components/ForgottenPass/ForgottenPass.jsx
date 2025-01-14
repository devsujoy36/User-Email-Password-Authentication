
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ForgottenPass = () => {

    const btnStyle = "bg-emerald-500 py-1 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black font-semibold active:scale-95 cursor-pointer transition-all"

    const [loginError, setLogInError] = useState('')
    const [success, setSuccess] = useState('')

    

    const handleRegister = (e) => {
        setLogInError('')
        setSuccess('')
        e.preventDefault()
        notify("Submitted Request Successfuly")

        const email = e.target.emailPhone.value;

        console.log(email);

        
        setLogInError('')
        setSuccess('')
    }

    const notify = (text) => toast(text);

    return (
        <div className="max-w-screen-2xl lg:my-20 pb-10 lg:mx-auto mx-10">
            <ToastContainer />
            <Helmet>
                <title>UEPA | Forgot Pass </title>
            </Helmet>
            <div className="rounded-md shadow-lg my-10 border p-10 lg:w-3/12 md:w-6/12 mx-auto">
                <form onSubmit={handleRegister} className="flex flex-col gap-5 ">
                    <h1 className="text-3xl font-bold text-center text-emerald-600">Forgotten Password</h1>
                    <input type="text" name="emailPhone" placeholder="Enter Email or Phone" className="border rounded-md px-4 py-2" required />
                    <div className='flex text-xs gap-1 justify-between items-center'>
                        
                        <Link className="hover:underline font-medium transition-all" to={"/register"}>Create new Account?</Link>
                    </div>

                    <input type="submit" value={"Submit"} className={btnStyle} />
                </form>
                    <div className="mt-1">
                        {loginError && <p className="text-xs text-red-500">{loginError}</p>}
                        {success && <p className="text-xs text-emerald-500">{success}</p>}
                    </div>
            </div>
        </div>
    )
}

export default ForgottenPass