import axios from 'axios'
import { schoolURL } from '../configs/endpoints'

export const getSchools = (token) => {
    let config ={
        method: 'get',
        url: schoolURL,
        headers: getHeader(token)
    }
    return axios(schoolURL, config)
}

export const insertSchool = (token, data)=>{
    let config ={
        method: 'post',
        url: schoolURL,
        headers: getHeader(token),
        data: data
    }
    return axios(config)
}

const getHeader = (token) =>{
    return   {
            'x-auth-token': token,
            "Content-Type": "application/json"
        }
}