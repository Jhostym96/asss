import {  Outlet } from "react-router";
import { Link } from "react-router-dom";

const MainLayout = () => {



    return (
        <div>
                <div className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#8cbc34",}}>
                    <div className="container-fluid container" >
                        <a className="navbar-brand" href="#">Alquila tu cancha</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={"/landing"} className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/login"  className="nav-link active" aria-current="page">
                                        <i className="bi bi-box-arrow-in-right"></i> Login</Link>
                                </li>

                                <li className="nav-item dropdown ">

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            <Outlet />
        </div>
    );
};

export default MainLayout;
