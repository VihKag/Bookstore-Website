import axios from 'axios';
const API_LOGIN ="https://localhost:7105/api/Auth/Login";
const login = async ({username, password})=>{
    try{
        const response = await axios.post(API_LOGIN,{username, password});
        const { token } = response.data;
        localStorage.setItem('token',token);
        return true;
    }catch (error){
        console.log("Login failed",error);
        return false;
    }
}
const logout = () => {
    localStorage.removeItem('token');
};
  
  const getToken = ({prop}) => {
    return localStorage.getItem({prop});
};
export { login, logout, getToken };