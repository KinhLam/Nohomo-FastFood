import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

function MainForgot() {
    return (
        <main>
            <div className="p-5 bg-primary text-white hero-forgot">
                <div className="row">
                    <div className="col text-center mt-4">
                        <h3 style={{ fontWeight: 700, fontStyle: 'normal', fontSize: '44px', marginTop: '-10px' }}>Bạn quên mật khẩu rồi?</h3>
                        <p style={{ fontWeight: 700, fontStyle: 'normal', fontSize: '18px' }}>Yên tâm, để chúng tôi giúp bạn!</p>
                    </div>
                </div>
                {/* desktop version */}
                <div className="row d-none d-lg-flex" style={{ marginTop: '4.3rem' }}>
                    <div className="col-1" />
                    <div className="col-7">
                        <input type="email" className="form-control-forgot py-3" id="emailForgot" aria-describedby="emailHelp" placeholder="Nhập địa chỉ email để nhận liên kết khôi phục tài khoản" />
                    </div>
                    <div className="col-3" style={{ marginLeft: '3rem' }}>
                        <Link to="/forgotpassword"><button className="btn btn-warning forgot send" onclick="getData()">Gửi</button></Link>
                    </div>
                    <div className="col-1" />
                </div>
                {/* mobile version */}
                <div className="row d-lg-none" style={{ marginTop: '4.7rem' }}>
                    <div className="col-7" style={{ marginLeft: '-4rem' }}>
                        <input type="email" className="form-control-forgot py-3" id="emailForgotMobile" aria-describedby="emailHelp" placeholder="Nhập địa chỉ email để nhận liên kết khôi phục tài khoản" />
                    </div>
                    <div className="col-3" style={{ marginLeft: '4rem' }}>
                        <Link to="/forgotpassword"><button className="btn btn-warning forgot send" onclick="getDataMobile()" style={{ width: '7rem' }}>Gửi</button></Link>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '75px' }}>
                    <div className="col text-center">
                        <h3 style={{ fontWeight: 700, fontStyle: 'normal', fontSize: '18px', lineHeight: '45px' }}>Nhấn vào đây nếu bạn không nhận được liên kết nào sau<br/> 2 phút</h3>
                    </div>
                </div>
                {/* desktop version */}
                <div className="row d-none d-lg-block" style={{ marginTop: '10px' }}>
                    <div className="col text-center">
                        <div className="btn btn-primary forgot resend">
                            <p style={{ marginTop: '20px' }}>Gửi lại liên kết</p>
                        </div>
                    </div>
                </div>
                {/* mobile version */}
                <div className="row d-lg-none" style={{ marginTop: '10px' }}>
                    <div className="col text-center">
                        <div className="btn btn-primary forgot forgot">
                            <p style={{ marginTop: '20px' }}>Gửi lại liên kết</p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '30px' }}>
                    <div className="col text-center">
                        <h3 style={{ fontWeight: 700, fontStyle: 'normal', fontSize: '18px' }}>01:54</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainForgot