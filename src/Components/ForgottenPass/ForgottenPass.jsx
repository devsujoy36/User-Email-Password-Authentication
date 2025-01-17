
import { sendPasswordResetEmail } from "firebase/auth";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../Firebase/Firebase.config";
const ForgottenPass = () => {
    const btnStyle = "bg-emerald-500 py-1 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black font-semibold active:scale-95 cursor-pointer transition-all"
    const [logInError, setLoginError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRef = useRef(null)

    const handleRegister = (e) => {
        e.preventDefault()
        setSuccess('')

        const email = emailRef.current.value;
        console.log(email);
        if (!email && !emailRegex.test(email)) {
            console.log("Please provide a valid email", email);
            notify("Please provide a valid email")
            setLoginError("Please provide a valid email", email);
            return;
        }

        notify(`Check your inbox on ${email}`)

        sendPasswordResetEmail(auth, email)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                setLoginError(`Check your inbox on ${email}`)
                console.log(error);
            })
    }

    const notify = (text) => toast(text);
    return (
        <div className="max-w-screen-2xl  md:my-40 my-48 lg:mx-auto mx-10 ">
            <ToastContainer />
            <Helmet>
                <title>UEPA | Forgot Pass </title>
            </Helmet>
            <div className="rounded-md shadow-lg my-10 border p-10 lg:w-3/12 md:w-6/12 mx-auto">
                <form onSubmit={handleRegister} className="flex flex-col gap-5 ">
                    <h1 className="text-3xl font-bold text-center text-emerald-600">Forgotten Password</h1>
                    <input type="text" ref={emailRef} name="emailPhone" placeholder="Enter Email or Phone" className="border rounded-md px-4 py-2" required />
                    <div className='flex text-xs gap-1 justify-between items-center'>
                        <Link className="hover:underline font-medium transition-all" to={"/register"}>Create new Account?</Link>
                    </div>
                    <input type="submit" value={"Send Code"} className={btnStyle} />
                </form>
                <div className="mt-1">
                    {logInError && <p className="text-xs text-red-500">{logInError}</p>}
                    {success && <p className="text-xs text-emerald-500">{success}</p>}
                </div>
            </div>
        </div>
    )
}

export default ForgottenPass