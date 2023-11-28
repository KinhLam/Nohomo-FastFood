import axios from "axios"
const url = 'https://localhost:44301/api/MonAns'

const getAllproductsRequest = () => { return { type: 'GET_ALL_PRODUCT_REQUEST' } }
const getAllproductsSuccess = (data) => { return { type: 'GET_ALL_PRODUCT_SUCCESS', payload: data } }
const getAllproductsFail = (err) => { return { type: 'GET_ALL_PRODUCT_FAIL', payload: err } }

export const getAllproducts = () => {
    return (dispatch) => {
        dispatch(getAllproductsRequest())
        return axios.get(`${url}`)
            .then((res) => {
                dispatch(getAllproductsSuccess(res.data))
            }).catch((err) => {
                dispatch(getAllproductsFail(err.response.data))
            })
    }
}