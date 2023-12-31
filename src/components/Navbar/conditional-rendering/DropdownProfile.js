// import edit from '../../../assets/profile/editDropdown.png';
import inbox from '../../../assets/profile/envelope.png';
import settings from '../../../assets/profile/settings.png';
import help from '../../../assets/profile/question.png';
import logout from '../../../assets/profile/log-out.png';
import user from "../../../assets/profile/ava.png"

import './DropdownProfile.css';

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function DropdownProfile(setIsLogin) {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  // User information from local storage
  const userLogin = JSON.parse(localStorage.getItem('@tenTaiKhoan'))
  const emailUser = (userLogin);
  const roleUser = ("Khách hàng");

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger mobile' onClick={() => { setOpen(!open) }}>
          <img src={user} alt='img'></img>
        </div>

        <div className={`dropdown-menu-profile mobile ${open ? 'active' : 'inactive'}`} >
          <h3 className='profile-title text-center' style={{ marginLeft: '-0.5rem' }}>{emailUser}</h3>
          <p className='profile-status'>{roleUser}</p>
          <ul className='dropdown-list-item'>
            <DropdownItem img={user} text={"Thông tin"} link={"/profile"} />
            {/* <DropdownItem img = {edit} text = {"Edit Profile"} link = {"/"}/> */}
            <DropdownItem img={settings} text={"Cài đặt"} link={"#"} />
            <DropdownItem img={logout} text={"Đăng xuất"} link={"/products"}
              onClick={() => {
                localStorage.clear();
                setIsLogin(false)
              }} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem({ img, link, onClick, text }) {
  return (
    <li className='dropdownItem'>
      <img src={img} alt='img'></img>
      <Link to={link} onClick={onClick}>{text}</Link>
    </li>
  );
}

export default DropdownProfile;
