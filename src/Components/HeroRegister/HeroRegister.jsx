import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const HeroRegister = () => {
    const [user, setUser] = useState()
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
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
        <div className="lg:px-0 px-10 bg-white border-2">
            <Helmet>
                <title>UEPA | Hero Register </title>
            </Helmet>
            <div className="hero  min-h-[80vh] ">
                <div className=" flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat  fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {registerError && <p className="text-xs text-red-500">{registerError}</p>}
                            {success && <p className="text-xs text-emerald-500">{success}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroRegister