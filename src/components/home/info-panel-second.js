import React from 'react'
import { Link } from 'react-router-dom'

function InfoPanelSecond() {
    return (
        <>
            <div className="container">
                <div className="row info-panel-footer">
                    <div className="col">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg">
                                        <h4 className="typo1-secondpanel mobile">Xem thực đơn ngay bây giờ!</h4>
                                        <p className="typo2-secondpanel mobile">Khám phá kho tàng món ăn & thức uống của chúng tôi!</p>
                                    </div>
                                    <div className="col col-lg see-promo-btn">
                                        <Link to="/products"><button className="btn btn-warning home px-5 py-3">Xem thực đơn</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoPanelSecond