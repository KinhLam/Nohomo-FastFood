import React from 'react';

function CardHistory() {
     // Lấy dữ liệu từ local storage
    const orders = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

    /// Render các thẻ (card) cho mỗi đơn hàng
    return (
        <div className="row">
            {orders.map((order, index) => (
                <div key={index} className="col-lg-4 col-6">
                    <div className="card card-style-history">
                        <div className="row">
                            <div className="col-4">
                            // Hiển thị hình ảnh sản phẩm 
                                <img src={order.productImage} className="img-product-history" alt="Product" style={{ marginTop: '0.5rem' }} />
                            </div>
                            <div className="col">
                                <div className="row" style={{ paddingTop: '20px' }}>
                                    <div className="col">
                                        <h4 className="s-1-history">{order.title}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p className="s-2-history">IDR {order.totalPrice}</p>
                                            <p className="s-3-history">Status: {order.status}</p>
                                        </div>
                                        {/* Checkbox start */}
                                        <div className="col-2 form-check-position">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id={`flexCheckDefault${index}`} />
                                                <label className="form-check-label" htmlFor={`flexCheckDefault${index}`} />
                                            </div>
                                        </div>
                                        {/* Checkbox end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardHistory;

