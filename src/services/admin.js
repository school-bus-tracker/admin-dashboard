import axios from 'axios'
import { schooladminURL } from '../configs/endpoints'

export const getAdmin = (token) => {

    var headers = {
        'headers': {
            'x-auth-token': token,
            "Content-Type": "application/json"
        }
    }
    return axios.get(schooladminURL, headers)
}
