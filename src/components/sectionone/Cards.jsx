/* eslint-disable react/prop-types */
import "./Section.css"
export const Cards = (props) => {
    return (
        <div className="card my-5 mb-4 border-0 shadow-sm">
            <img src={props.img} className="card-img-top" alt="Post" />
            <div className="card-body">
                <p className="text-muted mb-1">📜 Article</p>
                <div className="d-flex justify-content-between align-items-start">
                    <h5 className="card-title fw-bold">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                </div>
                <p className="card-text text-muted" style={{ fontSize: "14px" }}>
                    Ive worked in UX for the better part of a decade. From now on, I plan to reimagine...
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img
                            src={props.user}
                            alt="Author"
                            className="rounded-circle me-2"
                        />
                        <span className="fw-bold">Sarthak Kamra</span>
                    </div>
                    <div className="d-flex align-items-center text-muted" style={{ fontSize: "14px" }}>
                        <span>1.4k views</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
