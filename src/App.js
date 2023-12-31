import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './global.css'
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Products from './pages/product/Product';
import Order from './pages/order/Order';
import Payment from './pages/userOnly/Payment';
import History from './pages/userOnly/History';
import Profile from './pages/userOnly/Profile';
import Chat from './pages/userOnly/Chat';
import LoginAdmin from './pages/admin/LoginAdmin';
import Dashboard from './pages/admin/Dashboard';

import InvalidRoute from './pages/InvalidRoute';
import ScrollToTop from './components/utility/ScrollToTop';

import { Provider } from "react-redux"
import configureStore from "./redux/store"

function App() {
    const { store } = configureStore()
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    {/* Public Route */}
                    {/* <Route element={<PublicRoute />}> */}
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='forgotpassword' element={<ForgotPassword />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='LoginAdmin' element={<LoginAdmin />} />
                    {/* </Route> */}

                    {/* <Route element={<UserOnly />}> */}
                    <Route path='payment' element={<Payment />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='chat' element={<Chat />} />
                    <Route path='history' element={<History />} />
                    {/* </Route> */}

                    <Route path='404' element={<InvalidRoute />} />
                    <Route path='*' exact element={<Navigate to='404' />} />
                    <Route path='/' element={<Home />}></Route>
                    <Route path='products' element={<Products />} />
                    <Route path='products/detail/:id' element={<Order />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App