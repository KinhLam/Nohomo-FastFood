
import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import CardHistory from './cardHistory'; 
import UpdateInfoModal from './UpdateInfoModal';

function Main() {
    // Retrieve product order details from localStorage
    const productOrder = JSON.parse(localStorage.getItem('productOrder')) || {};
    
    // Extract relevant information from the product order
    const userId = productOrder.id || '';
    const title = productOrder.title || '';
    const price = parseInt(localStorage.getItem('productPrice')) || 0;
    const quantity = localStorage.getItem('quantity') || 0;
    const taxValue = price * 0.1;
    const totalprice = price + taxValue;

    // State variables for handling modals
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showHistoryModal, setShowHistoryModal] = useState(false);

    // Functions to handle modal visibility
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
            {/* Hero section with buttons for updating information and viewing history */}
            <div className="p-5 bg-primary text-white hero-history">
                <div className="row mt-3">
                    <div className="col text-end">
                        <button className="btn btn-outline-light" onClick={handleUpdateClick} style={{ color: 'black' }}>
                            Cập nhật thông tin
                        </button>
                        <button className="btn btn-outline-light ms-2" onClick={handleViewHistoryClick} style={{ color: 'black' }}>
                            Xem lịch sử mua hàng
                        </button>
                    </div>
                </div>

                {/* Display personal information */}
                <div className="mt-4">
                    <h3>Thông tin cá nhân:</h3>
                    <p><strong>User ID:</strong> {userId}</p>
                    <p><strong>Name:</strong> {productOrder.name}</p>
                    <p><strong>Email:</strong> {productOrder.email}</p>
                    <p><strong>Phone Number:</strong> {productOrder.phoneNumber}</p>
                    <p><strong>Birth Date:</strong> {productOrder.birthDate}</p>
                </div>
            </div>

            {/* Modals for updating information and viewing history */}
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
