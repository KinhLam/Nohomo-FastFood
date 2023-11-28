import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './TaiKhoanQuanTri.css';

function TaiKhoanQuanTri() {
    const [customers, setCustomers] = useState([]);
    const [editingCustomer, setEditingCustomer] = useState(null);
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
                const response = await axios.get('https://localhost:44301/api/QuanTriViens', config);
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    const handleAddAccountClick = () => {
        
        setEditingCustomer(null);
        setIsModalOpen(true);
        setIsAddingAccount(true);
    };

    const handleEditAccountClick = (customer) => {
        setEditingCustomer({ ...customer });
        setIsModalOpen(true);
        setIsAddingAccount(false);
    };
    const handleSaveEditClick = async () => {
        try {
            if (isAddingAccount) {
                // Gọi API để thêm mới tài khoản
                await axios.post('https://localhost:44301/api/QuanTriViens', editingCustomer, config);
            } else {
                // Gọi API để cập nhật thông tin tài khoản
                await axios.put(`https://localhost:44301/api/QuanTriViens/${editingCustomer.maTaiKhoan}`, editingCustomer, config);
            }

            // Sau khi thêm mới hoặc chỉnh sửa, tải lại dữ liệu
            const response = await axios.get('https://localhost:44301/api/QuanTriViens', config);
            setCustomers(response.data);
            setEditingCustomer(null);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error saving edit:', error);
        }
    };


    const handleDeleteAccountClick = async (customerId) => {
        try {
            await axios.delete(`https://localhost:44301/api/QuanTriViens/${customerId}`, config);

            const updatedCustomers = customers.filter(customer => customer.maTaiKhoan !== customerId);
            setCustomers(updatedCustomers);
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    return (
        <div>
            <h2>Tài khoản quản trị</h2>
            <button onClick={handleAddAccountClick}>Thêm tài khoản</button>

            <table>
                <thead>
                    <tr>
                        <th>Mã tài khoản</th>
                        <th>Tên tài khoản</th>
                        <th>Chức vụ</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.maTaiKhoan}</td>
                            <td>{customer.tenTaiKhoan}</td>
                            <td>{customer.hoTen}</td>
                            <td>
                                <button onClick={() => handleEditAccountClick(customer)}>
                                    Sửa
                                </button>
                                <button onClick={() => handleDeleteAccountClick(customer.maTaiKhoan)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Example Modal"
                className="modal-container"
            >
                <h3>{isAddingAccount ? 'Thêm tài khoản' : 'Chỉnh sửa thông tin'}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Tên tài khoản:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.tenTaiKhoan}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, tenTaiKhoan: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Chức vụ:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.hoTen}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, hoTen: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Mật khẩu:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.matKhau}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, matKhau: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={handleSaveEditClick}>
                                    {isAddingAccount ? 'Thêm tài khoản' : 'Lưu chỉnh sửa'}
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

export default TaiKhoanQuanTri;
