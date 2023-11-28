import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DonDatHang() {
    const [donDatHangs, setDonDatHangs] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedDonDatHang, setSelectedDonDatHang] = useState(null);

    let config = {
        headers: {
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwicm9sZSI6IlF1YW5UcmlWaWVuIiwibmJmIjoxNzAxMTA1ODcyLCJleHAiOjE3MDE3MTA2NzIsImlhdCI6MTcwMTEwNTg3Mn0.BoXm4YKXVj-qacKIqNrg4IdRvvjcvDFpheunP8EBPrA'
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44301/api/DonDatHangs', config);
                setDonDatHangs(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleViewDetailsClick = (donDatHang) => {
        setShowDetails(true);
        setSelectedDonDatHang(donDatHang);
    };

    return (
        <div>
            <h2>Danh sách đơn đặt hàng</h2>

            {!showDetails ? (
                <table>
                    <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Ngày đặt</th>
                            <th>Ngày giao</th>
                            <th>Tổng đơn hàng</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donDatHangs.map((donDatHang, index) => (
                            <tr key={index}>
                                <td>{donDatHang.maDonHang}</td>
                                <td>{donDatHang.ngayDat}</td>
                                <td>{donDatHang.ngayGiao}</td>
                                <td>{donDatHang.tongDonHang}</td>
                                <td>
                                    <button onClick={() => handleViewDetailsClick(donDatHang)}>
                                        Xem chi tiết
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>
                    <h3>Thông tin chi tiết đơn đặt hàng:</h3>
                    {selectedDonDatHang && (
                        <table>
                            <tbody>
                                <tr>
                                    <td>Mã đơn hàng:</td>
                                    <td>{selectedDonDatHang.maDonHang}</td>
                                </tr>
                                <tr>
                                    <td>Ngày đặt:</td>
                                    <td>{selectedDonDatHang.ngayDat}</td>
                                </tr>
                                <tr>
                                    <td>Ngày giao:</td>
                                    <td>{selectedDonDatHang.ngayGiao}</td>
                                </tr>
                                <tr>
                                    <td>Mã khách hàng:</td>
                                    <td>{selectedDonDatHang.maKh}</td>
                                </tr>
                                <tr>
                                    <td>Tổng các món:</td>
                                    <td>{selectedDonDatHang.tongCacMon}</td>
                                </tr>
                                <tr>
                                    <td>Phí vận chuyển:</td>
                                    <td>{selectedDonDatHang.phiVanChuyen}</td>
                                </tr>
                                <tr>
                                    <td>Khuyến mãi:</td>
                                    <td>{selectedDonDatHang.khuyenMai}</td>
                                </tr>
                                <tr>
                                    <td>Tổng đơn hàng:</td>
                                    <td>{selectedDonDatHang.tongDonHang}</td>
                                </tr>
                                <tr>
                                    <td>Ghi chú:</td>
                                    <td>{selectedDonDatHang.ghiChu}</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
}

export default DonDatHang;
