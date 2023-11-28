import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './ThucDon.css'; // Đảm bảo có file CSS cho trang ThucDon

function ThucDon() {
  const [monAns, setMonAns] = useState([]);
  const [editingMonAn, setEditingMonAn] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingAccount, setIsAddingAccount] = useState(false);
  let config = {
    headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwicm9sZSI6IlF1YW5UcmlWaWVuIiwibmJmIjoxNzAxMDc3MDU2LCJleHAiOjE3MDE2ODE4NTYsImlhdCI6MTcwMTA3NzA1Nn0.1J_O7Gmu_OcF-QZaRw7nnNBu8CV1CzymgS_pujEF0MM'
    }
};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:44301/api/MonAns',config);
        setMonAns(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleAddAccountClick = () => {
    setEditingMonAn(null);
    setIsModalOpen(true);
    setIsAddingAccount(false);
  };
  const handleEditMonAnClick = (monAn) => {
    setEditingMonAn({ ...monAn });
    setIsModalOpen(true);
    setIsAddingAccount(true);
  };



  const handleSaveEditMonAnClick = async () => {
    try {
      if (editingMonAn.maMon) {
        // Gọi API để cập nhật thông tin món ăn
        await axios.put(`https://localhost:44301/api/MonAns/${editingMonAn.maMon}`, editingMonAn,config);
      } else {
        // Gọi API để thêm mới món ăn
        await axios.post('https://localhost:44301/api/MonAns', editingMonAn,config);
      }

      const updatedMonAns = await axios.get('https://localhost:44301/api/MonAns');
      setMonAns(updatedMonAns.data);
      setEditingMonAn(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving edit:', error);
    }
  };

  const handleDeleteMonAnClick = async (maMons) => {
    try {
      await axios.delete(`https://localhost:44301/api/MonAns/${maMons}`);

      const updatedMonAns = monAns.filter(monAns => monAns.maMon !== maMons);
      setMonAns(updatedMonAns);
    } catch (error) {
      console.error('Error deleting monAn:', error);
    }
  };

  return (
    <div>
      <h2 className='h2'>Danh sách thực đơn</h2>
      <button className='buttonAdd'onClick={() => handleAddAccountClick(true)}>Thêm Món Ăn</button>

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
            <th>Action</th>
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
              <td>
                <button onClick={() => handleEditMonAnClick(monAn)}>Sửa</button>
                <button onClick={() => handleDeleteMonAnClick(monAn.maMon)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Thêm/Sửa Món Ăn */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Thêm/Sửa Món Ăn"
        className="modal-container"
      >

        <table>
          <tbody>
            <tr>
              <td>Tên món:</td>
              <td>
                <input
                  type="text"
                  value={editingMonAn?.tenMon || ''}
                  onChange={(e) => setEditingMonAn({ ...editingMonAn, tenMon: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Giá bán:</td>
              <td>
                <input
                  type="text"
                  value={editingMonAn?.giaBan || ''}
                  onChange={(e) => setEditingMonAn({ ...editingMonAn, giaBan: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Nội dung:</td>
              <td>
                <input
                  type="text"
                  value={editingMonAn?.noiDung || ''}
                  onChange={(e) => setEditingMonAn({ ...editingMonAn, noiDung: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Số lượng tồn:</td>
              <td>
                <input
                  type="text"
                  value={editingMonAn?.soLuongTon || ''}
                  onChange={(e) => setEditingMonAn({ ...editingMonAn, soLuongTon: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Mã loại:</td>
              <td>
                <input
                  type="text"
                  value={editingMonAn?.maLoai || ''}
                  onChange={(e) => setEditingMonAn({ ...editingMonAn, maLoai: e.target.value })}
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <button onClick={handleSaveEditMonAnClick}>
                  {isAddingAccount ? 'Lưu chỉnh sửa' : 'Thêm món ăn'}
                </button>
                <button onClick={() => setIsModalOpen(false)}>Đóng</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  );
}

export default ThucDon;
