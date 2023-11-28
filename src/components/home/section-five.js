import React from 'react'
import Testi1 from "../../assets/homepage/testi1.svg"
import Testi4 from "../../assets/homepage/me.png"
import Testi2 from "../../assets/homepage/testi2.svg"
import Testi3 from "../../assets/homepage/testi3.svg"
import Netflix from "../../assets/homepage/sponsored-netflix.png"
import Reactjs from "../../assets/homepage/sponsored-react.png"
import VisualCode from "../../assets/homepage/s.png"
import Nodejs from "../../assets/homepage/sponsored-nodejs.png"
import Visual from "../../assets/homepage/sponsored-vs-removebg-preview.png"
import Figma from "../../assets/homepage/sponsored-figma-a.png"

function SectionFive() {
    return (
        <section className="section-5 mobile">
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <h4 className="typo-primary">Công nghệ sử dụng</h4>
                        <div className="width-based mobile">
                            <div className="row width-based-product mobile">
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Figma}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Nodejs}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Visual}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Reactjs}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                                {/* <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={VisualCode}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="sponsored mobile" /> */}
            </div>
            <div className="row text-center">
                <div className="col">
                    <h4 className="typo-primary mobile">Thành viên <br />tham gia dự án chung</h4>
                    <p className="typo-secondary py-3">Đây là những thành viên tiêu biểu để thành lập ra một trang web <br />Respect.</p>
                </div>
            </div>
            {/* Testimonial : Sliding Carousel Start */}
            <div className="testimonials">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="single-item">
                                <div className="row" style={{marginLeft: '8rem'}}>
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi4} alt="" style={{width: '200px', height: '200px'}}/>
                                            </div>
                                            <div className="bio">
                                                <h2>Lâm Đức Kính</h2>
                                                <h4>20CT111</h4>
                                                <h4>Frontend</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi4} alt="" style={{width: '200px', height: '200px'}}/>
                                            </div>
                                            <div className="bio">
                                                <h2>Lâm Đức Kính</h2>
                                                <h4>20CT111</h4>
                                                <h4>Frontend</h4>
                                            </div>
                                        </div>
                                    </div>
/
                                </div>
                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="single-item">
                            <div className="row" style={{marginLeft: '8rem'}}>
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi4} alt="" style={{width: '200px', height: '200px'}}/>
                                            </div>
                                            <div className="bio">
                                                <h2>Lâm Đức Kính</h2>
                                                <h4>20CT111</h4>
                                                <h4>Frontend</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi4} alt="" style={{width: '200px', height: '200px'}}/>
                                            </div>
                                            <div className="bio">
                                                <h2>Lâm Đức Kính</h2>
                                                <h4>20CT111</h4>
                                                <h4>Frontend</h4>
                                            </div>
                                        </div>
                                    </div>
/
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="single-item">
                            <div className="row" style={{marginLeft: '8rem'}}>
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi4} alt="" style={{width: '200px', height: '200px'}}/>
                                            </div>
                                            <div className="bio">
                                                <h2>Lâm Đức Kính</h2>
                                                <h4>20CT111</h4>
                                                <h4>Frontend</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi4} alt="" style={{width: '200px', height: '200px'}}/>
                                            </div>
                                            <div className="bio">
                                                <h2>Lâm Đức Kính</h2>
                                                <h4>20CT111</h4>
                                                <h4>Frontend</h4>
                                            </div>
                                        </div>
                                    </div>
/
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Testimonial : Sliding Carousel End */}
        </section>
    )
}

export default SectionFive