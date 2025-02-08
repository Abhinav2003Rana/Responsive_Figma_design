import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import user from "../../assets/user.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import "./Section.css";
import { Cards } from "./Cards.jsx";
export const Section = () => {
    return (
        <div className="container-fluid   d-flex justify-content-around">
            <div className="left-sec  md-5 col-5 ">
                <div className="row mb-3">
                    <div className="col">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    All Posts(32)
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Article
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Event
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Education
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Job
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Cards img={card1} user={user} />
                <Cards img={card2} user={user2} />
                <Cards img={card3} user={user3} />
            </div>
            <div className="right-sec m-0 col-3 d-flex flex-column align-items-start md-5 ">
                <div className=" d-flex justify-content-center text-end">
                    <div className="dropdown">
                        <a
                            className="btn mx-3  dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Write a Post
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li>
                                <a className="dropdown-item" href="#">
                                    write
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary"> Join Group</button>
                </div>
                <div className="my-5 align-items-start mx-3 ">
                    <div className="card cd p-3">
                        <h6>
                            📍 Noida, India
                            <span style={{ float: "right", cursor: "pointer" }}>✏️</span>
                        </h6>
                        <p className="text-muted cd" style={{ fontSize: "small" }}>
                            Your location will help us serve better and extend a personalised
                            experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
