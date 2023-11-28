import React, { useEffect } from 'react'
import MainSignup from '../../components/auth/signup/main'
import Footer from '../../components/home/footer-home'
import InfoPanel from '../../components/auth/infopanel'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('@userLogin')) {
            navigate('/products')
        }
    }, [navigate])
    return (
        <>
            <MainSignup />
            <Footer />
            <InfoPanel />
        </>
    )
}

export default Signup