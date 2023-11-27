import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginAdmin.css';

const LoginAdmin = () => {
    const [loginForm, setLoginForm] = useState({
        email: 'admin@dangnhap.com',
        password: 'admin',
    });

    const [validate, setValidate] = useState({
        error: false,
        message: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Kiểm tra tên đăng nhập và mật khẩu cứng
        if (!loginForm.email || !loginForm.password) {
            setValidate({ error: true, message: 'Please enter both email and password.' });
        } else if (!isValidEmail(loginForm.email)) {
            setValidate({ error: true, message: 'Please enter a valid email address.' });
        } else if (loginForm.email !== 'admin@dangnhap.com' || loginForm.password !== 'admin') {
            setValidate({ error: true, message: 'Invalid email or password.' });
        } else {
            // Lưu thông tin đăng nhập vào localStorage hoặc Redux
            localStorage.setItem('isLoggedIn', 'true');

            // Chuyển hướng đến trang dashboard
            navigate('/dashboard');
        }
    };

    const isValidEmail = (email) => {
        // Hàm kiểm tra định dạng email, bạn có thể thay thế bằng hàm kiểm tra email phức tạp hơn nếu cần
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="row">
            {/* LEFT SIDE */}
            <div className="col d-none d-lg-block">
                <div className="bg-primary text-white hero-auth" />
            </div>
            {/* RIGHT SIDE */}
            <div className="col">
                <div className="container w-75">
                    <div className="row">
                        <div className="col text-center form-title-auth pt-5">
                            <h3>Login</h3>
                        </div>
                    </div>
                    {/* FORM START */}
                    <form onSubmit={handleLogin} name="loginForm">
                        {validate.error && (
                            <div className="alert alert-danger" role="alert" style={{ borderRadius: '15px', marginTop: '-2rem' }}>
                                {validate.message}
                            </div>
                        )}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label s-md-auth">Email Address :</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control py-3"
                                aria-describedby="emailHelp"
                                placeholder="Enter your email address"
                                value={loginForm.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label s-md-auth">Password :</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control py-3"
                                placeholder="Enter your password"
                                value={loginForm.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3 form-check">
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to="/forgotpassword" className="s-lg-auth"><p style={{ marginTop: '-45px' }}><u>Forgot password?</u></p></Link>
                            </div>
                        </div>
                        {/* desktop version */}
                        <input type="submit" value="Login" className="btn btn-warning auth rounded-4 s-lg-auth py-4 input-login d-lg-block d-none" style={{ fontSize: '20px' }} />
                        {/* mobile version */}
                        <input type="submit" value="Login" className="btn btn-warning auth rounded-4 s-lg-auth py-3 d-lg-none" style={{ fontSize: '20px', width: '70vw' }} />
                    </form>
                    {/* FORM END */}
                </div>
            </div>
        </div>
    );
};

export default LoginAdmin;
