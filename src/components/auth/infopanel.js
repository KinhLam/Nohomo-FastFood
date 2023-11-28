import React from 'react'
import './infopanel.css'

function InfoPanel() {
    return (
        <div className="container d-none d-lg-block">
            <div className="row info-panel-auth">
                <div className="col">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h4 className="typo-primary s-md-auth" >Đăng ký tài khoản ngay hôm nay!</h4>
                                    <p className="typo-secondary s-sm-auth" >Để được thưởng thức những mỹ vị độc nhất từ chúng tôi.</p>
                                </div>
                                <div className="col">
                                    <a href="/signup"><button className="btn btn-warning auth rounded-4  px-5 py-3 s-lg-auth" style={{ fontSize: '16px' }}>Tham gia ngay</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanel