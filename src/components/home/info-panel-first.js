import React from 'react'
import Staff from "../../assets/homepage/user.svg"
import Stores from "../../assets/homepage/location.svg"
import Customers from "../../assets/homepage/Server.png"

function InfoPanelFirst() {
    return (
        <div className="container">
            <div className="row">
                <div className="col info-panel mobile">
                    <div className="row">
                        <div className="col-3 col-lg panel-first-mobile">
                            <img src={Staff} alt="icon" className="float-lg-start" />
                            <h4>5</h4>
                            <p>Thành viên</p>
                        </div>
                        <div className="col-3 col-lg panel-first-mobile">
                            <img src={Stores} alt="icon" className="float-lg-start" />
                            <h4>K20</h4>
                            <p>Đại học Lạc Hồng</p>
                            <div className="vertical-line d-none d-lg-block" />
                        </div>
                        <div className="col-3 col-lg panel-first-mobile">
                            <img src={Customers} alt="icon" className="float-lg-start" />
                            <h4>+++++</h4>
                            <p>Web ReactJs</p>
                            <div className="vertical-line d-none d-lg-block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanelFirst