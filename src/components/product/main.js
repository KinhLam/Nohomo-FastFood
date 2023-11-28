import React, { useEffect, useState } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Promo_1 from "../../assets/product/promo-1.svg"
import Promo_2 from "../../assets/product/promo-2.svg"
import Promo_3 from "../../assets/product/promo-3.svg"
import Promo_4 from "../../assets/product/promo-4.svg"
// import productImg from '../../assets/product-detail/hero.png';
import Search from "../../assets/product/search.svg"
import LoadingProduct from './errorHandling/loadingProduct'
import DataNotFound from './errorHandling/dataNotFound'
// url backend
const url = 'https://localhost:44301'
const urlImage = process.env.REACT_APP_IMG
// console.log(url);
// console.log(urlImage);

function Main() {
    // Load data product
    // const [dataProduct, setDataProduct] = useState([])
  const [monAns, setMonAns] = useState([]);

    // Load search data product
    const [searchData, setSearchData] = useState([]);
    const [keyword, setKeyword] = useState('');
    // Pagination
    const [pageLimit] = useState(12) //set page limit
    const [currentPage, setCurrentPage] = useState(1)

    // get data product
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/api/MonAns`);
        // axios automatically throws an error for non-2xx responses, so no need for explicit check

        setMonAns(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    // get sort data product - Sắp xếp
    // const handleSort = async (e) => {
    //     let value = e.target.value
    //     return await axios
    //         .get(`${url}/api/products?search=${keyword}&sortBy=${value}&limit=${pageLimit}&page=1`)
    //         .then((response) => {
    //             setSearchData(response.data.data)
    //         })
    //         .catch((err) => console.log(err))
    // }

    // Danh mục
    // const category = async (value) => {
    //     return await axios
    //         .get(`${url}/api/products?category=${value}`)
    //         .then((response) => {
    //             setSearchData(response.data.data)
    //         })
    //         .catch((err) => console.log(err))
    // }
    // Pagination and search
    // useEffect(() => {
    //     loadProductData(pageLimit, 1, 0)
    // }, [keyword])
    // const loadProductData = async (limit, page, increase) => {
    //     return await axios
    //         .get(`${url}/api/products?search=${keyword}&limit=${limit}&page=${page}`)
    //         .then((res) => {
    //             setSearchData(res.data.data);
    //             setCurrentPage(currentPage + increase)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    const renderPagination = () => {

        const rulesOne = (currentPage > pageLimit - 1 && searchData.length === pageLimit)
        const rulesTwo = (currentPage < pageLimit - 1 && searchData.length === pageLimit)

        if (currentPage === 1) {
            // console.log(currentPage);
            return (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link to="#" className="page-link">1</Link>
                        </li>
                        <li className="page-item">
                            {/* <Link to="#" className="page-link" onClick={() => loadProductData(pageLimit, 2, 1)}>Tiếp</Link> */}
                            <Link to="#" className="page-link">Tiếp</Link>
                        </li>
                    </ul>
                </nav>
            )
        } else if (rulesOne || rulesTwo) {
            // console.log(currentPage);
            return (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            {/* <Link to="#" className="page-link" onClick={() => loadProductData(pageLimit, (currentPage - 1), -1)}>Trước</Link> */}
                            <Link to="#" className="page-link">Trước</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link">{currentPage}</Link>
                        </li>
                        <li className="page-item">
                            {/* <Link to="#" className="page-link" onClick={() => loadProductData(pageLimit, (currentPage + 1), 1)}>Tiếp</Link> */}
                            <Link to="#" className="page-link">Tiếp</Link>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            // console.log(currentPage);
            return (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            {/* <Link to="#" className="page-link" onClick={() => loadProductData(pageLimit, (currentPage - 1), -1)}>Trước</Link> */}
                            <Link to="#" className="page-link">Trước</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link">{currentPage}</Link>
                        </li>
                    </ul>
                </nav>
            )
        }
    }

    // Handle server error or data not found!
    const isLoad = () => {
        if (monAns.length === 0) {
            return (<LoadingProduct />)
        } else if (searchData.length === 0) {
            return (<DataNotFound />)
        }
    }
    // Danh sách món ăn
    const loopCard = () => {
        return (
            <div className="container" style={{ marginTop: '-1rem' }}>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {searchData.length === 0 ? isLoad() : searchData.map((monAn) => {
                        // Use the anhMonAn property to set the image source
                        const imgSrc = monAn.anhMonAn ? `${urlImage}/${monAn.anhMonAn}` : 'placeholder-image-url';
    
                        return (
                            <div key={monAn.maMon} className="col-lg-3 col-6 text-start my-5 popup">
                                <Link to={`/products/detail/${monAn.maMon}`}>
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={imgSrc} alt="product" className="card-img-product" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>{monAn.tenMon}</h5>
                                            <p className="s-4-product" style={{ marginTop: '-10px' }}>{monAn.giaBan}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
    

    // ADMIN 
    const editPromoAdmin = () => {
        const role = localStorage.getItem('@userRole')
        if (role === 'admin') {
            return (
                <div className='text-start' style={{ marginTop: '3.5rem', paddingBottom: '3rem' }}>
                    <Link to='/editpromo'><h5 className='edit-product-admin'>Edit promo</h5></Link>
                    <Link to='/addpromo'><h5 className='edit-product-admin'>Add new promo</h5></Link>
                </div>
            )
        } else {
            return ('')
        }
    }
    const editProductAdmin = () => {
        const role = localStorage.getItem('@userRole')
        if (role === 'admin') {
            return (
                <div className='text-start' style={{ marginTop: '3.5rem', marginLeft: '1rem' }}>
                    <Link to='/productlist'><h5 className='edit-product-admin'>Edit product</h5></Link>
                    <Link to='/addproducts'><h5 className='edit-product-admin'>Add new product</h5></Link>
                </div>
            )
        } else {
            return ('')
        }
    }
    return (
        <main style={{ marginTop: '6rem' }}>
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-lg-4 border-end border-2 text-center ms-3 ms-lg-0">
                        <h4 className="s-1-product me-4 me-lg-0" style={{ marginTop: '60px' }}>Khuyễn mãi hôm nay</h4>
                        <p className="s-2-product pt-3 me-4 me-lg-0" style={{ marginBottom: '60px' }}>Chương trình sẽ cập nhật hàng tuần <br />Hãy theo dõi!</p>

                        {/* Promo Card Start */}
                        <div>
                            <div className="box-card-1-product popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-2" src={Promo_1} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-3">
                                            <p><b>Chào mừng ngày nhà giáo!</b><br />Nhận miễn phí một trong những thực đơn yêu thích của chúng tôi!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-card-2-product my-4 popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-2" src={Promo_2} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-3">
                                            <p><b>Nhận được một ly cà phê miễn phí vào chủ nhật</b><br />Chỉ từ 7h đến 9h sáng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-card-3-product my-4 popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-1" src={Promo_4} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-2">
                                            <p><b>Chào mừng HALLOWEEN!</b>
                                                <br />Bạn có thích cánh gà không? <br />
Nhận 1 miễn phí chỉ khi bạn mua lời hứa hồng hào</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Promo Card End */}
                        <Link to="#">
                            <button className="btn btn-warning product" style={{ margin: '50px 20px 90px 0px' }}>Áp dụng</button>
                        </Link>
                        <p className="text-start s-3-product" style={{ marginTop: '-1rem' }}>
                            
<b>Điều khoản và Điều kiện</b><br />
                            1. Bạn chỉ có thể áp dụng 1 phiếu giảm giá mỗi ngày<br />
                            2. Chỉ dùng bữa tại<br />
                            3. Mua 1 tặng 1 chỉ dành cho người dùng mới<br />
                            4. Nên làm thẻ thành viên để áp dụng coupon<br />
                        </p>
                        {/* {editPromoAdmin()} */}
                    </div>


                    {/* RIGHT SIDE */}
                    <div className="col-lg-8">

                        {/* Sắp xếp giá */}
                        {/* <select className="form-select product mobile" aria-label="Default select example" onChange={handleSort}> */}
                        <select className="form-select product mobile" aria-label="Default select example">
                            <option selected>Sắp xếp giá theo</option>
                            <option value="asc">Giá thấp nhất</option>
                            <option value="desc">Giá cao nhất</option>
                        </select>
                        {/* sort by end */}

                        {/* Thanh tìm kiếm */}
                        <div className="searchBox mobile">
                            <input type="text" placeholder="Tìm kiếm mọi thứ bạn muốn..." onChange={(e) => setKeyword(e.target.value)} />
                            <img src={Search} alt="searchBox" />
                        </div>
                        {/* search bar end */}

                        {/* Phần danh mục*/}
                        <ul className="nav justify-content-center mt-4">
                            <li className="nav-item">
                                {/* <Link to="#" onClick={() => loadProductData(pageLimit, 1, 0)} className='nav-link products'>Favorite &amp; Promo</Link> */}
                                <Link to="#" className='nav-link products'>Yêu thích &amp; khuyến mãi</Link>
                            </li>
                            <li className="nav-item mx-3">
                                {/* <Link to="#" onClick={() => category("Coffee")} className='nav-link products'>Coffee</Link> */}
                                <Link to="#" className='nav-link products'>Nước uống</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="#" onClick={() => category("Non Coffee")} className='nav-link products'>Non Coffee</Link>
                                <Link to="#" className='nav-link products'>Đồ khô</Link>
                            </li> */}
                            <li className="nav-item mx-3">
                                {/* <Link to="#" onClick={() => category("Foods")} className='nav-link products'>Foods</Link> */}
                                <Link to="#" className='nav-link products'>Thức ăn</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="#" onClick={() => category("add-on")} className='nav-link products'>Add-on</Link>
                                <Link to="#" className='nav-link products'>Add-on</Link>
                            </li> */}
                        </ul>
                        {/* Navs & Tabs End */}

                        {/* Hàm gọi danh sách món ăn */}
                        {loopCard()}

                        {/* Phần chuyển trang */}
                        {renderPagination()}

                        {/* Card-Product End */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main