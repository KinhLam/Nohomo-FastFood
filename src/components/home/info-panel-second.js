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
                                        <h4 className="typo1-secondpanel mobile">Theo dõi khuyến mãi <br />ngay hôm nay!</h4>
                                        <p className="typo2-secondpanel mobile">Hãy xem các giao dịch và chọn của bạn!</p>
                                    </div>
                                    <div className="col col-lg see-promo-btn">
                                        <Link to="/products"><button className="btn btn-warning home px-5 py-3">Xem khuyến mãi</button></Link>
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