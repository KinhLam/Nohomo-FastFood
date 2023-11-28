// NavbarLeft.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLeft.css';

function NavbarLeft({ onMenuClick }) {
  return (
    <div className="NavbarLeft">
      <div>
        <div className='textHeader'>NoHomo</div>
      </div>
      <ul>
        <li>
          <button type="button" className="ButtonMenu" onClick={() => onMenuClick('TaiKhoanQuanTri')}>
            Tài khoản quản trị
          </button>
        </li>
        <li>
          <button type="button" className="ButtonMenu" onClick={() => onMenuClick('DanhMuc')}>
            Danh mục
          </button>
        </li>
        <li>
          <button type="button" className="ButtonMenu" onClick={() => onMenuClick('ThucDon')}>
            Thực đơn
          </button>
        </li>
        <li>
          <button type="button" className="ButtonMenu" onClick={() => onMenuClick('DonDatHang')}>
            Đơn đặt hàng
          </button>
        </li>
        <li>
          <button type="button" className="ButtonMenu" onClick={() => onMenuClick('KhachHang')}>
            Khách hàng
          </button>
        </li>
        <hr className="hr1" />
        <li>
          {/* Sử dụng thẻ Link để chuyển hướng đến trang chủ */}
          <Link to="/">
            <button type="button" className="ButtonMenu">
              Đăng xuất
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarLeft;
