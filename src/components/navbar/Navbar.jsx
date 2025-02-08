import { useState } from "react"
import logo from "../../assets/logo.svg"
import createimg from "../../assets/createimg.png";

import "./Navbar.css"
export const Navbar = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    const [view, setview] = useState("none")
    return (
        <>
            <div className="container-fluid  my-3">
                <div className="nav d-flex justify-content-around">
                    <img className=" logo img-fluid" src={logo} alt="" />
                    <input
                        type="text"
                        className="  nav-input "
                        placeholder="Search for your favorite groups in ATG"
                    />
                    <ul className="my-1 rgt-txt">
                        <li>create account. <span onClick={() => setview("block")} style={{ color: "blue" }} >Its free!</span></li>
                    </ul>

                </div>
            </div>
            <div className=" c-ard bg-light position-absolute top-50 start-50 translate-middle " style={{  display: view }}>
                <div className=" d-flex justify-content-center align-items-center vh-110">
                    <div className="card p-4 shadow-lg w-100" >
                        <i onClick={() => setview("none")} className="cross d-flex flex-row-reverse ri-close-line"></i>
                        <div className="crdtxt text-center text-success fw-bold py-2">
                            Lets learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="cardhead fw-bold">Create Account</h2>
                            <p className="cardpara mb-0">Already have an account? <a href="#" className="text-primary">Sign In</a></p>
                        </div>
                        <div className="container d-flex justify-content-between align-items-center mb-3">
                            <div className="left-side container ">
                                <form >
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <input type="text" className=" forminp form-control" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <input type="text" className="forminp form-control" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <input type="email" className="forminp form-control mb-2" placeholder="Email" />
                                    <div className="input-group mb-2">
                                        <input type={showPassword ? "text" : "password"} className="forminp form-control" placeholder="Password" />
                                        <button className="btn btn-outline-secondary" type="button" onClick={togglePassword}>
                                            {showPassword ? <i className="ri-eye-fill"></i> : <i className="ri-eye-off-fill"></i>}
                                        </button>
                                    </div>
                                    <input type="password" className="forminp form-control mb-3" placeholder="Confirm Password" />
                                    <button className=" forminp btn btn-primary w-100">Create Account</button>
                                </form>
                                <hr />
                                <button className="btn downbts btn-outline-primary w-100 mb-2">
                                    <i className="ri-facebook-circle-fill"></i>Sign up with Facebook
                                </button>
                                <button className="btn downbts btn-outline-danger w-100">
                                    <i className="ri-google-fill"></i>Sign up with Google
                                </button>
                            </div>
                            <div className="right-side container justify-content-center align-items-center d-flex flex-column">
                                <img className="right-card-img" src={createimg} alt="" />
                                <p className="cardpara">By signing up, you are agree to our terms & conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
