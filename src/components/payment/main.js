

import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';

function Main() {
    const [cartItems, setCartItems] = useState([]);

    const img = localStorage.getItem('productImage');
    const price = parseInt(localStorage.getItem('productPrice'));
    const size = localStorage.getItem('size');
    const quantity = localStorage.getItem('quantity');

    const taxValue = price * 0.1;

    const addToCart = () => {
        const newItem = {
            img,
            price,
            size,
            quantity,
        };

        setCartItems([...cartItems, newItem]);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal() + taxValue;
    };

    return (
        <main style={{ marginTop: '6rem' }}>
            <div className="row">
                <div className="col text-center d-none d-lg-block">
                    <button className="btn btn-secondary" onClick={addToCart}>Thêm vào giỏ hàng</button>
                </div>
                <div className="col d-none d-lg-block">
                    <div className="row">
                        <div className="col">
                            <h3 className="s-1-payment" style={{ margin: '55px 0 0 85px' }}>Tóm tắt giỏ hàng</h3>
                            {cartItems.map((item, index) => (
                                <div key={index} className="row mt-5">
                                    <div className="col">
                                        <img src={item.img} alt="Product" style={{ maxWidth: '100px' }} />
                                    </div>
                                    <div className="col s-4-payment">
                                        <p>Đồng {item.price.toFixed(3)}</p>
                                    </div>
                                    <div className="col s-4-payment">
                                        <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Xóa</button>
                                    </div>
                                </div>
                            ))}
                            <hr style={{ opacity: '0.2', border: '0.5px solid #000000', marginTop: '35px' }} />
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="s-5-payment" style={{ textAlign: 'start' }}>TỔNG CỘNG</p>
                                </div>
                                <div className="col">
                                    <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '63px' }}>IDR {calculateSubtotal().toFixed(3)}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="s-5-payment" style={{ textAlign: 'start' }}>THUẾ & PHÍ</p>
                                </div>
                                <div className="col">
                                    <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '63px' }}>IDR {taxValue.toFixed(3)}</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <h3 className="s-6-payment" style={{ textAlign: 'start' }}>TỔNG CỘNG</h3>
                                </div>
                                <div className="col">
                                    <h3 className="s-6-payment" style={{ textAlign: 'start' }}>Đồng {calculateTotal().toFixed(3)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/payment">
                        <button className="btn btn-primary payment mt-3">Xác nhận và Thanh toán</button>
                    </Link>
                </div>
                <div className="col d-block d-lg-none mt-4">
                    <button className="btn btn-secondary mobile" onClick={addToCart}>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </main>
    );
}

export default Main;
