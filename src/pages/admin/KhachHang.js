import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './KhachHang.css'
function KhachHang() {
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
                const response = await axios.get('https://localhost:44301/api/KhachHangs', config);
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddCustomerClick = () => {
        setEditingCustomer(null);
        setIsModalOpen(true);
        setIsAddingAccount(true);
    };


    const handleEditCustomerClick = (customer) => {
        setEditingCustomer({ ...customer });
        setIsModalOpen(true);
        setIsAddingAccount(false);
    };

    const handleSaveEditClick = async () => {
        try {
            if (isAddingAccount) {
                // Thêm mới khách hàng
                await axios.post('https://localhost:44301/api/KhachHangs', editingCustomer, config);
            } else {
                // Cập nhật thông tin khách hàng
                await axios.put(`https://localhost:44301/api/KhachHangs/${editingCustomer.maKh}`, editingCustomer, config);
            }

            const response = await axios.get('https://localhost:44301/api/KhachHangs', config);
            setCustomers(response.data);
            setEditingCustomer(null);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error saving edit:', error);
        }
    };

    const handleDeleteCustomerClick = async (customerId) => {
        try {
            await axios.delete(`https://localhost:44301/api/KhachHangs/${customerId}`, config);
            const updatedCustomers = customers.filter(customer => customer.maKh !== customerId);
            setCustomers(updatedCustomers);
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };


    return (
        <div>
            <h2>Quản lý khách hàng</h2>
            <button onClick={handleAddCustomerClick}>Thêm khách hàng</button>

            <table>
                <thead>
                    <tr>
                        <th>Mã khách hàng</th>
                        <th>Tên tài khoản</th>
                        <th>Họ và tên</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.maKh}</td>
                            <td>{customer.tenTaiKhoan}</td>
                            <td>{customer.hoTen}</td>
                            <td>
                                <button onClick={() => handleEditCustomerClick(customer)}>
                                    Sửa
                                </button>
                                <button onClick={() => handleDeleteCustomerClick(customer.maKh)}>
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
                <h3>{isAddingAccount ? 'Chỉnh sửa thông tin' : 'Thêm khách hàng'}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Tên tài khoản:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.tenTaiKhoan || ''}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, tenTaiKhoan: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Họ và tên:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.hoTen || ''}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, hoTen: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Mật khẩu:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.matKhau || ''}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, matKhau: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>email:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.email || ''}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, email: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>ttnhchinh:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.ttnhchinh || ''}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, ttnhchinh: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>sdt:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.sdt || ''}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, sdt: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>ngày sinh:</td>
                            <td>
                                <input
                                    type="text"
                                    value={editingCustomer?.ngaySinh || ''}
                                    onChange={(e) => setEditingCustomer({ ...editingCustomer, ngaySinh: e.target.value })}
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

export default KhachHang;
