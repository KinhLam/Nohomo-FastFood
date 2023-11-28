import React from 'react'
import CoffeeLogo from "../../assets/coffeeLogo.svg"
import Facebook from "../../assets/Facebook.svg"
import Twitter from "../../assets/Twitter.svg"
import Instagram from "../../assets/Instagram.svg"
import { Link } from 'react-router-dom'
import Scroll from '../../assets/up.svg'

function FooterHome() {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer>
            <img onClick={scrollTop} id="scrollTop" src={Scroll} alt="up" />
            <div className="container-fluid footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-9 pt-footer">
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
                                    <img src={Instagram} alt="Instagram" />
                                </a>
                            </div>
                            <p style={{ color: '#AFB5C0', fontSize: '16px', fontWeight: 400 }}>©2023NoHomo</p>
                        </div>
                        <div className="col-lg-2 col-3 pt-footer">
                        </div>
                        <div className="col-lg-2 pt-footer d-lg-block d-none">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterHome