import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const btnStyle = "bg-emerald-500 py-2 px-4 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black  font-semibold active:scale-95 cursor-pointer transition-all"

    const navigate = useNavigate()
    const goBackHandler = () => {
        navigate(-1)
    }

    return (
        <div className="min-h-[70vh] flex justify-center items-center flex-col">
            <Helmet>
                <title>UEPA | Error </title>
            </Helmet>
            <h1 className="text-5xl font-semibold text-red-500 my-10 ">ErrorFound</h1>
            <button onClick={goBackHandler} className={btnStyle}>Go back</button>
        </div>
    )
}

export default ErrorPage