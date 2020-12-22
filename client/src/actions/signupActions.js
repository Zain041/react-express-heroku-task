import Axios from "axios";

export function userSignUpRequest(userData){
    return dispatch=>{
        return Axios.post('http://localhost:5000/api/signup',userData);
    }
}