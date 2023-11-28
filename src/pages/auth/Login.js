import React, { useEffect } from 'react'
import MainLogin from '../../components/auth/login/main'
import Footer from '../../components/home/footer-home'
import InfoPanel from '../../components/auth/infopanel'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    // Nếu đã đăng nhập thì chuyển qua trang sản phẩm
    useEffect(() => {
        if (localStorage.getItem('@userLogin')) {
            navigate('/products')
        }
    }, [navigate])
    return (
        <main>
            <MainLogin />
            <Footer />
            <InfoPanel />
        </main>
    )
}

export default Login