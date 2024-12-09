import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";


const Root = () => {
    return (
        <div>
            <h1>Root</h1>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;