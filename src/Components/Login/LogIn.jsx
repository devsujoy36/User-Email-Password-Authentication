import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
    const btnStyle = "bg-emerald-500 py-2 px-4 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black  font-semibold active:scale-95 cursor-pointer transition-all"

    const [user, setUser] = useState()
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState('')

    console.log(user);

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

    return (
        <div className="max-w-screen-2xl lg:my-20 pb-10 lg:mx-auto mx-10">
            <Helmet>
                <title>UEPA | LogIn </title>
            </Helmet>
            <div>
                <form onSubmit={handleRegister} className="flex flex-col gap-5 lg:w-4/12 md:w-6/12 mx-auto border p-10 rounded-md shadow-lg my-10">
                    <h1 className="text-4xl font-bold text-center text-emerald-600">Log In</h1>
                    <input type="email" name="email" placeholder="Email" className="border rounded-md px-4 py-3" required />
                    <input type="password" name="password" placeholder="Password" className="border rounded-md px-4 py-3" required />
                    <input type="submit" value={"Register"} className={btnStyle} />
                    <div className="mt-6 flex flex-col gap-3 justify-between">
                        <button type="submit" className={btnStyle} >Continue with Google </button>
                        <button type="submit" className={btnStyle} >Continue with Github </button>
                        <button type="submit" className={btnStyle} >Continue with Facebook</button>
                    </div>
                    {registerError && <p className="text-xs text-red-500">{registerError}</p>}
                    {success && <p className="text-xs text-emerald-500">{success}</p>}
                </form>
            </div>
        </div>
    )
}

export default LogIn