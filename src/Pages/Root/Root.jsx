import { Outlet } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { Helmet } from "react-helmet-async"

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Authentication | Home</title>
            </Helmet>
            <Header />
                <Outlet />
            <Footer />
        </div>
    )
}

export default Root