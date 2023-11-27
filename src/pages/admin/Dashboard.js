
import React, { useState } from 'react';
import NavbarLeft from './NavbarAdmin/NavbarLeft';
import TaiKhoanQuanTri from './TaiKhoanQuanTri'; //
import DanhMuc from './DanhMuc'; 
import ThucDon from './ThucDon'; 
import KhachHang from './KhachHang'; 
import './Dashboard.css';
function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState('KhachHang');
  const handleMenuClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="dashboard1">
      <NavbarLeft onMenuClick={handleMenuClick} />
      <div>
        {selectedComponent === 'TaiKhoanQuanTri' && <TaiKhoanQuanTri />}
        {selectedComponent === 'DanhMuc' && <DanhMuc />}
        {selectedComponent === 'ThucDon' && <ThucDon />}
        {selectedComponent === 'KhachHang' && <KhachHang />}
      </div>
    </div>
  );
}

export default Dashboard;
