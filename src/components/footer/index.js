import React from 'react'
import CoffeeLogo from "../../assets/coffeeLogo.svg"
import Facebook from "../../assets/Facebook.svg"
import Twitter from "../../assets/Twitter.svg"
import Instagram from "../../assets/Instagram.svg"
import './footer.css'
import { Link } from 'react-router-dom'
import Scroll from "../../assets/up.svg"

function Footer() {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer>
            <img onClick={scrollTop} id="scrollTop" src={Scroll} alt="up" />
            <div className="container-fluid footer-global" style={{ height: '466px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-8 pt-footer-global">
                            <Link to="/">
                                <img src={CoffeeLogo} alt="logo" className="pb-2" />
                                <p className="d-inline ps-2 footer-name-tag">NoHomo</p>
                            </Link>
                            <p className="mt-3 footer-p">
                                Cửa hàng thức ăn nhanh NoHomo
                            </p>
                            <div className="d-lg-flex">
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={{ marginLeft: '-20px' }}>
                                    <img src={Facebook} alt="Facbook" />
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer" style={{ marginLeft: '-15px' }}>
                                    <img src={Twitter} alt="Twitter" />
                                </a>
                                <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{ marginLeft: '-15px' }}>
                                    <img src={Instagram} alt="instagram logo" />
                                </a>
                            </div>
                            <p style={{ color: '#AFB5C0', fontSize: '16px', fontWeight: 400 }}>©2023NoHomo</p>
                        </div>
                        <div className="col-2 pt-footer-global">
                        </div>
                        <div className="col-2 pt-footer-global d-none d-lg-block">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer