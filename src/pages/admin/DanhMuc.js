import React, { useState, useEffect } from 'react';

function DanhMuc() {
    const [danhMuc, setDanhMuc] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedDanhMuc, setSelectedDanhMuc] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:44301/api/Loais');
                const data = await response.json();
                setDanhMuc(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddAccountClick = (danhMuc) => {
        setShowDetails(true);
        setSelectedDanhMuc(danhMuc);
    };

    return (
        <div>
            <h2>Danh mục</h2>

            {!showDetails ? (
                <table>
                    <thead>
                        <tr>
                            <th>Mã loại</th>
                            <th>Tên loại</th>
                            <th>Loại cha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {danhMuc.map((danhMuc, index) => (
                            <tr key={index}>
                                <td>{danhMuc.maLoai}</td>
                                <td>{danhMuc.tenLoai}</td>
                                <td>{danhMuc.loaiCha}</td>
                                <td>
                                    <button onClick={() => handleAddAccountClick(danhMuc)}>
                                        Sửa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>
                    <h3>Thông tin chi tiết:</h3>
                    {selectedDanhMuc && (
                        <table>
                            <tbody>
                                <tr>
                                    <td>Tên loai:</td>
                                    <td>{selectedDanhMuc.tenLoai}</td>
                                </tr>
                                <tr>
                                    <td>Loai cha:</td>
                                    <td>{selectedDanhMuc.loaiCha}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
}

export default DanhMuc;
