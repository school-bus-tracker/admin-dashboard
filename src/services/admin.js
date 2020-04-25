import axios from 'axios'
import { schooladminURL } from './constants'

export const getAdmin = (token) => {

    var headers = {
        'headers': {
            'x-auth-token': token,
            "Content-Type": "application/json"
        }
    }
    return axios.get(schooladminURL, headers)
}
