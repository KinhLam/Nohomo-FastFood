
import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import CardHistory from './cardHistory'; 
import UpdateInfoModal from './UpdateInfoModal';

function Main() {
// Lấy thông tin đơn hàng từ localStorage
    const productOrder = JSON.parse(localStorage.getItem('productOrder')) || {};
    
   // Trích xuất thông tin liên quan từ đơn hàng
    const userId = productOrder.id || '';
    const title = productOrder.title || '';
    const price = parseInt(localStorage.getItem('productPrice')) || 0;
    const quantity = localStorage.getItem('quantity') || 0;
    const taxValue = price * 0.1;
    const totalprice = price + taxValue;

    // Các biến trạng thái để quản lý modals
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showHistoryModal, setShowHistoryModal] = useState(false);

    // Các hàm để xử lý sự kiện hiển thị modals
    const handleUpdateClick = () => {
        setShowUpdateModal(true);
    };

    const handleCloseModal = () => {
        setShowUpdateModal(false);
    };

    const handleViewHistoryClick = () => {
        setShowHistoryModal(true);
    };

    const handleCloseHistoryModal = () => {
        setShowHistoryModal(false);
    };

    return (
        <main style={{ marginTop: '6rem' }}>
            {/*Phần hero với nút để cập nhật thông tin và xem lịch sử */}
            <div className="p-5 bg-primary text-white hero-history">
                <div className="row mt-3">
                    <div className="col text-end">
                        <button className="btn btn-outline-light" onClick={handleUpdateClick} style={{ color: 'white' }}>
                            Cập nhật thông tin
                        </button>
                        <button className="btn btn-outline-light ms-2" onClick={handleViewHistoryClick} style={{ color: 'white' }}>
                            Xem lịch sử mua hàng
                        </button>
                    </div>
                </div>

                {/* Hiển thị thông tin cá nhân*/}
                <div className="mt-4">
                    <h3>Thông tin cá nhân:</h3>
                    <p><strong>User ID:</strong> {userId}</p>
                    <p><strong>Name:</strong> {productOrder.name}</p>
                    <p><strong>Email:</strong> {productOrder.email}</p>
                    <p><strong>Phone Number:</strong> {productOrder.phoneNumber}</p>
                    <p><strong>Birth Date:</strong> {productOrder.birthDate}</p>
                </div>
            </div>

            {/* Modals để cập nhật thông tin và xem lịch sử */}
            <UpdateInfoModal
                show={showUpdateModal}
                handleClose={handleCloseModal}
                userId={userId}
                currentName={productOrder.name}
                currentEmail={productOrder.email}
                currentPhoneNumber={productOrder.phoneNumber}
                currentBirthDate={productOrder.birthDate}
            />
            <CardHistory show={showHistoryModal} handleClose={handleCloseHistoryModal} userId={userId} />
        </main>
    );
}

export default Main;
