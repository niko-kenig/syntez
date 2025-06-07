import Header from "../Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.tsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;