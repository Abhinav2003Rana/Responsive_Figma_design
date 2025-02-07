import logo from "../../assets/logo.svg"
import "./Navbar.css"
export const Navbar = () => {
    return (
        <>
            <div className="container-fluid  my-3">
                <div className="nav d-flex justify-content-around">
                    <img src={logo} alt=""  />
                    <input
                        type="text"
                        className=" input "
                        placeholder="Search for your favorite groups in ATG"
                    />
                    <ul className="my-1">
                        <li>create account. <a href="#">Its free!</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
