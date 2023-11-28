import React from "react";
import Checklist from "../../assets/homepage/checklist.svg";

function SectionTwo() {
  return (
    <section className="section-2">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 d-lg-block d-none">
            <div className="hero-2" />
          </div>
          <div
            className="col-lg-6 col-sm-12 py-5 pe-5"
            style={{ paddingLeft: "5.8rem" }}
          >
            <h4 className="typo-primary">
              Chúng tôi cung cấp đồ ăn ngon <br />
              và lành mạnh
            </h4>
            <p className="typo-secondary py-3">
              Bạn có thể khám phá thực đơn mà chúng tôi cung cấp một cách thú vị
              và <br />
              có hương vị riêng của họ và làm cho ngày của bạn tốt hơn.
            </p>
            <div>
              <img src={Checklist} alt="" />
              <p className="d-inline ps-2 typo-3-s2">Chất lượng tốt nhất</p>
            </div>
            <div className="py-3">
              <img src={Checklist} alt="" />
              <p className="d-inline ps-2 typo-3-s2">
                Bữa ăn lành mạnh, bạn có thể biết được nguyên liệu trong món ăn
              </p>
            </div>
            <div>
              <img src={Checklist} alt="" />
              <p className="d-inline ps-2 typo-3-s2">
                Trao đổi thông tin để có sự trải nghiệm tốt hơn
              </p>
            </div>
            <div className="py-3">
              <img src={Checklist} alt="" />
              <p className="d-inline ps-2 typo-3-s2">
                Miễn phí vận chuyển trong bán kính 10km
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
