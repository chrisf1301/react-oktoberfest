import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import "./css/App.css";

const Layout = () => {
    return (
        <div id="content">
            <Navbar />
            
            <Outlet />

        </div>
    );
};

export default Layout;
