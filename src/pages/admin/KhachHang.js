import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KhachHang() {
    const [customers, setCustomers] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

        let config = {
            headers: {
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwicm9sZSI6IlF1YW5UcmlWaWVuIiwibmJmIjoxNzAxMDc3MDU2LCJleHAiOjE3MDE2ODE4NTYsImlhdCI6MTcwMTA3NzA1Nn0.1J_O7Gmu_OcF-QZaRw7nnNBu8CV1CzymgS_pujEF0MM'
            }
        }
   
        useEffect(() => {
            const fetchData = async () => {
                try {
                    // Sử dụng axios thay vì fetch
                    const response = await axios.get('https://localhost:44301/api/KhachHangs', config);
                    setCustomers(response.data);

                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }, []);

        const handleAddAccountClick = (customer) => {
            setShowDetails(true);
            setSelectedCustomer(customer);
        };

        return (
            <div>
                <h2>Quản lý khách hàng</h2>


                {!showDetails ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Tên tài khoản</th>
                                <th>Họ và tên</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr key={index}>
                                    <td>{customer.tenTaiKhoan}</td>
                                    <td>{customer.hoTen}</td>
                                    <td>
                                        <button onClick={() => handleAddAccountClick(customer)}>
                                            Thêm tài khoản
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div>
                        <h3>Thông tin chi tiết:</h3>
                        {selectedCustomer && (
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Tên tài khoản:</td>
                                        <td>{selectedCustomer.tenTaiKhoan}</td>
                                    </tr>
                                    <tr>
                                        <td>Họ và tên:</td>
                                        <td>{selectedCustomer.hoTen}</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>{selectedCustomer.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại:</td>
                                        <td>{selectedCustomer.sdt}</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày sinh:</td>
                                        <td>{new Date(selectedCustomer.ngaySinh).toLocaleDateString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        );
    }

    export default KhachHang;
