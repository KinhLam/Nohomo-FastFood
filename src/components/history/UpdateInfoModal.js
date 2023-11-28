
import React, { useState } from 'react';

const UserInfo = ({ name, email, phoneNumber, birthDate }) => (
  <div>
    <p><strong>Họ và tên:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Số điện thoại:</strong> {phoneNumber}</p>
    <p><strong>Ngày sinh:</strong> {birthDate}</p>
  </div>
);

const UpdateInfoModal = ({ show, handleClose, currentName, currentEmail, currentPhoneNumber, currentBirthDate, handleUpdate }) => {
  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [phoneNumber, setPhoneNumber] = useState(currentPhoneNumber);
  const [birthDate, setBirthDate] = useState(currentBirthDate);

  const handleUpdateClick = () => {
   

    // Gọi hàm handleUpdate với các giá trị đã cập nhật
    handleUpdate(name, email, phoneNumber, birthDate);
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cập nhật thông tin khách hàng</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            {show ? (
              <UserInfo
                name={currentName}
                email={currentEmail}
                phoneNumber={currentPhoneNumber}
                birthDate={currentBirthDate}
              />
            ) : (
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Họ và tên:</label>
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Số điện thoại:</label>
                  <input type="tel" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="birthDate" className="form-label">Ngày sinh:</label>
                  <input type="date" className="form-control" id="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpdateClick}>
                  Cập nhật
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfoModal;
