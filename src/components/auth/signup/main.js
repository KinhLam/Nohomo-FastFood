import React, { useState } from 'react'
import '../login/main.css'
import { Link, useNavigate } from 'react-router-dom'
import CoffeeLogo from "../../../assets/coffeeLogo.svg"
import GoogleLogo from "../../../assets/login/googleLogo.svg"
import axios from 'axios'

function MainSignup() {
    const url = "https://localhost:44301"
    const [signupForm, setSignupForm] = useState({
        hoTen: '',
        tenTaiKhoan: '',
        email: '',
        matkhau: '',
    })
    const [validate, setValidate] = useState({ error: false, message: '' })
    const navigate = useNavigate()

    const handleSignup = async (event) => {
        event.preventDefault()

        //bỏ input vào data, từ json chuyển nó thành kiểu string
        let data = JSON.stringify({
            TenTaiKhoan: signupForm.tenTaiKhoan,
            MatKhau: signupForm.matkhau,
            Email: signupForm.email,
            HoTen: signupForm.hoTen
        })

        return await axios({
            url: `${url}/api/DangNhapKy`,
            method: 'POST',
            data: data,
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            console.log(res);
            alert("Đăng ký tài khoản thành công, mời bạn đăng nhập!")
            navigate('/login')
        }).catch((err) => {
            console.log(err);
            //setValidate({ error: true, message: err.response.data.errors })
        })
    }

    return (
        <main>
            <div className="row">
                {/* LEFT SIDE */}
                <div className="col d-none d-lg-block">
                    <div className="bg-primary text-white hero-auth" />
                </div>
                {/* RIGHT SIDE */}
                <div className="col">
                    <div className="row">
                        <div className="col">
                            {/* navbar start */}
                            {/* desktop version */}
                            <div className="container mt-5 d-none d-lg-block">
                                <nav className="navbar navbar-expand-lg my-4">
                                    <div className="container-fluid">
                                        <Link to="/" className="navbar-brand">
                                            <img src={CoffeeLogo} alt="logo" className="pb-2" />
                                            <p className="d-inline ps-2 s-lg-auth">NO HOMO</p>
                                        </Link>
                                        <Link to="/login">
                                            <div className="btn btn-warning signup-nav rounded-pill px-4 py-2 s-md-auth" style={{ fontSize: '16px' }}><p style={{ marginTop: '2px' }}>Đăng nhập</p></div>
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                            {/* mobile version */}
                            <div className="container mt-5 d-lg-none">
                                <nav className="navbar navbar-expand-lg my-4">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-7">
                                                <Link to="/" className="navbar-brand">
                                                    <img src={CoffeeLogo} alt="logo" className="pb-2" />
                                                    <p className="d-inline ps-2 s-lg-auth">NO HOMO</p>
                                                </Link>
                                            </div>
                                            <div className="col-5">
                                                <Link to="/login">
                                                    <div className="btn btn-warning signup-nav rounded-pill py-2 s-md-auth" style={{ fontSize: '16px' }}>
                                                        <p style={{ marginTop: '2px' }}>Đăng nhập</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            {/* navbar end */}
                        </div>
                    </div>
                    <div className="container w-75">
                        <div className="row">
                            <div className="col text-center form-title-auth pt-5">
                                <h3>Đăng ký</h3>
                            </div>
                        </div>
                        {/* FORM START */}
                        <form onSubmit={handleSignup} name="signUpForm">
                            {validate.error && (
                                <div className="alert alert-danger" role="alert" style={{ borderRadius: '15px', marginTop: '-2rem' }}>
                                    {validate.message}
                                </div>
                            )}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label s-md-auth">Họ và tên:</label>
                                <input name="hoTen" type="text" className="form-control py-3" id="hoTenSignUp" aria-describedby="emailHelp" placeholder="Nhập họ tên"
                                    onChange={(e) => setSignupForm({
                                        ...signupForm,
                                        hoTen: e.target.value
                                    })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label s-md-auth">Tên tài khoản:</label>
                                <input name="tenTaiKhoan" type="text" className="form-control py-3" id="tenTaiKhoanSignUp" aria-describedby="emailHelp" placeholder="Nhập tên tài khoản"
                                    onChange={(e) => setSignupForm({
                                        ...signupForm,
                                        tenTaiKhoan: e.target.value
                                    })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label s-md-auth">Địa chỉ email:</label>
                                <input name="email" type="email" className="form-control py-3" id="emailSignUp" aria-describedby="emailHelp" placeholder="Nhập địa chỉ email"
                                    onChange={(e) => setSignupForm({
                                        ...signupForm,
                                        email: e.target.value
                                    })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label s-md-auth">Mật khẩu:</label>
                                <input name="matKhau" type="password" className="form-control py-3" id="matKhauSignUp" placeholder="Nhập mật khẩu"
                                    onChange={(e) => setSignupForm({
                                        ...signupForm,
                                        matKhau: e.target.value
                                    })} />
                            </div>
                            <div className="mb-3 form-check" />
                            {/* desktop version */}
                            <input type="submit" value="Đăng ký" className="btn btn-warning auth rounded-4 s-lg-auth py-4 input-signup d-none d-lg-block" style={{ fontSize: '20px' }} />
                            {/* mobile version */}
                            <input type="submit" value="Đăng ký" className="btn btn-warning auth rounded-4 s-lg-auth py-3 d-lg-none" style={{ fontSize: '20px', width: '70vw' }} />
                            {/* desktop version */}
                            <div className="row d-none d-lg-block">
                                <div className="col mt-4">
                                    <Link to="#">
                                        <div className="btn btn-light d-flex rounded-4">
                                            <img src={GoogleLogo} alt="google" style={{ marginLeft: '120px' }} />
                                            <p className="s-1-auth" style={{ marginTop: '19px', marginLeft: '10px' }}>Đăng ký bằng Google</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/* mobile version */}
                            <div className="row d-lg-none mb-5">
                                <div className="col mt-4">
                                    <Link to="#">
                                        <div className="btn btn-light d-flex rounded-4">
                                            <img src={GoogleLogo} alt="google" style={{ marginLeft: '20px' }} />
                                            <p className="s-1-auth" style={{ marginTop: '19px', marginLeft: '10px' }}>Đăng ký bằng Google</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </form>
                        {/* FORM END */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainSignup