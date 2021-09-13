import axios from 'axios';
import { REGISTER_USER } from './types';


function registerUser(dataToSubmit){
    const request = axios.post('/api/users/test',dataToSubmit)
    .then(response => response.data)

    return {
        type:REGISTER_USER,
        payload:request
    }
}

export default registerUser
