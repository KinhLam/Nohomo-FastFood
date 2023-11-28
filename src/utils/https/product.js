// import axios from 'axios';

// const url = 'https://localhost:44301/api/MonAn'; // Đã chỉnh sửa thành '/MonAn' thay vì '/MonAns'

// export const searchList = (filter) => {
//     const urlSearch = `${url}?search=${filter}`; // Chỉnh sửa URL search
//     return axios.get(url);
// };

// export const addProduct = (body, token) => {
//     return axios.post(url, body, {
//         headers: {
//             'x-access-token': token,
//         },
//     });
// };

// export const updateProduct = (id, body, token) => {
//     const urlUpdate = `${url}/${id}`; // Chỉnh sửa URL update
//     return axios.put(urlUpdate, body, {
//         headers: {
//             'x-access-token': token,
//         },
//     });
// };

// export const getDetailProduct = (id) => {
//     const urlDetail = `${url}/${id}`;
//     return axios.get(urlDetail);
// };

// export const deleteProducts = (id, token) => {
//     const urlDelete = `${url}/${id}`; // Chỉnh sửa URL delete
//     return axios.delete(urlDelete, {
//         headers: {
//             'x-access-token': token,
//         },
//     });
// };
