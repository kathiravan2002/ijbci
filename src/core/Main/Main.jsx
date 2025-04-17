import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"


export default function Main() {
    return (

        <div>
            <Header />

            <main className={`w-auto mx-auto lg:mt-[145px] mt-[105px] px-3 max-w-[90rem] lg:mb-6 mb-3 min-h-[85vh] `}>

                <Outlet />
            </main>
            <Footer />
        </div>


    );
}
