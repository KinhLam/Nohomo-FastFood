import React, { useState, useEffect } from 'react';

function ThucDon() {
  const [monAns, setMonAns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:44301/api/MonAns');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMonAns(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Danh sách món ăn</h2>
      <table>
        <thead>
          <tr>
            <th>Mã món</th>
            <th>Tên món</th>
            <th>Giá bán</th>
            <th>Nội dung</th>
            <th>Số lượng tồn</th>
            <th>Mã loại</th>
            <th>Ảnh món ăn</th>
          </tr>
        </thead>
        <tbody>
          {monAns.map((monAn) => (
            <tr key={monAn.maMon}>
              <td>{monAn.maMon}</td>
              <td>{monAn.tenMon}</td>
              <td>{monAn.giaBan}</td>
              <td>{monAn.noiDung}</td>
              <td>{monAn.soLuongTon}</td>
              <td>{monAn.maLoai}</td>
              <td>{monAn.anhMonAn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ThucDon;
