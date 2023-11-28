import React from 'react'
import { Link } from 'react-router-dom'

function SectionOne() {
    return (
        <section className="section-1" style={{marginTop: '6rem'}}>
            <div className="mt-4 p-5 bg-primary text-white hero-1"> {/*Jumbotron*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">
                            <h1 className="pt-5 typo-1-s1">Bắt đầu một ngày mới với<br />Cà phê và một Bữa ăn ngon</h1>
                            <p className="py-2 typo-2-s1 mobile">Chúng tôi cung cấp cho bạn những món ăn và thức uống<br />với chất lượng tuyệt hảo nhất!</p>
                            <Link to="/login"><button className="btn btn-warning typo-3-s1 get-started">Bắt đầu</button></Link>
                        </div>
                        <div className="col-lg-5" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne