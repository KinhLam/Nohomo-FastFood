import React from "react";
import CoffeeLogo from "../../assets/coffeeLogo.svg";
import Facebook from "../../assets/Facebook.svg";
// import Twitter from "../../assets/Twitter.svg";
import Github from "../../assets/Github.svg"
import Instagram from "../../assets/Instagram.svg";
import { Link } from "react-router-dom";
import Scroll from "../../assets/up.svg";

function FooterHome() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <img onClick={scrollTop} id="scrollTop" src={Scroll} alt="up" />
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-9 pt-footer">
              <Link to="/">
                <img src={CoffeeLogo} alt="logo" className="pb-2" />
                <p className="d-inline ps-2 footer-name-tag">NO HOMO</p>
              </Link>
              <p className="mt-3 footer-p">
                Cửa hàng NoHomo bán những đồ ăn <br />
                nhanh và dinh dưỡng. Chúng tôi
                <br />
                cam kết chất lượng sản phẩm.
              </p>
              <div className="d-lg-flex">
                <a
                  href="https://www.facebook.com/lam.kinh.2810"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "-20px" }}
                >
                  <img src={Facebook} alt="Facbook" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "-15px" }}
                >
                  <img src={Github} alt="Github" />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "-15px" }}
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
              </div>
              <p
                style={{ color: "#AFB5C0", fontSize: "16px", fontWeight: 400 }}
              >
                ©2023FastFoodStore
              </p>
            </div>
            <div className="col-lg-2 col-3 pt-footer">
              <h5 className="mb-4 footer-h5">Sản Phẩm</h5>
              <a href="/">
                <p>Tải Về</p>
              </a>
              <a href="/">
                <p>Giá Trị</p>
              </a>
              <a href="/">
                <p>Địa Chỉ</p>
              </a>
              <a href="/">
                <p>Bài viết</p>
              </a>
            </div>
            <div className="col-lg-2 pt-footer d-lg-block d-none">
              <h5 className="mb-4 footer-h5">Thông Tin</h5>
              <a href="/">
                <p>NoHomo Team?</p>
              </a>
              <a href="/">
                <p>Phản Hồi</p>
              </a>
              <a href="/">
                <p>Liên Hệ</p>
              </a>
              <a href="/">
                <p>Chính Sách Bảo Mật</p>
              </a>
              <a href="/">
                <p>Điều khoản dịch vụ</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterHome;
