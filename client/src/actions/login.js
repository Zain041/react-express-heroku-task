import axios from 'axios';

export function login(data){
    return dispatch =>{
        return axios.post('http://localhost:4000/api/signin',data).then(
         res =>  {
            const token = res.data.token;
            localStorage.setItem('jwtToken',token);
         } 
        );
    }
}