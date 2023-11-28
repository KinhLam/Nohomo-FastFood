import React from 'react'
import { Link } from "react-router-dom";
import errorLoading from "../assets/loading-coffee.gif"

function InvalidRoute() {
    return (
        <div id="InvalidRoute" className="text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }} >
            <img src={errorLoading} alt="CoffeeLoading" style={{ width: '250px', height: '250px' }} />
            <h1>Oops!</h1>
            <p>
                <i>404 Không Tìm Thấy</i>
            </p>
            <p>Xin lỗi, chúng tôi không tìm được trang bạn muốn tới.</p>
            <Link to="/">
                <button className="btn btn-warning px-5 py-3" style={{ fontWeight: '500', borderRadius: '20px' }}>Go to Home</button>
            </Link>
        </div>
    );
}

export default InvalidRoute

