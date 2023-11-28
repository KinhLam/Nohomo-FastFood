import React from 'react'
import Checklist from "../../assets/homepage/checklist.svg"

function SectionTwo() {
    return (
        <section className="section-2">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-lg-6 d-lg-block d-none">
                        <div className="hero-2" />
                    </div>
                    <div className="col-lg-6 col-sm-12 py-5 pe-5" style={{ paddingLeft: '5.8rem' }}>
                        <h4 className="typo-primary">Chúng tôi có một thực đơn<br />tuyệt hảo!</h4>
                        <p className="typo-secondary py-3">Chắc thế.</p>
                        <div>
                            <img src={Checklist} alt="" />
                            <p className="d-inline ps-2 typo-3-s2">Thức ăn ngon</p>
                        </div>
                        <div className="py-3">
                            <img src={Checklist} alt="" />
                            <p className="d-inline ps-2 typo-3-s2">Sạch sẽ, đảm bảo an toàn vệ sinh thực phẩm</p>
                        </div>
                        <div>
                            <img src={Checklist} alt="" />
                            <p className="d-inline ps-2 typo-3-s2">Thức uống đa dạng</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo