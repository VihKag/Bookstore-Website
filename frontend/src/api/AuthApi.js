import axios from 'axios';
const API_LOGIN ="https://localhost:7105/api/Auth/Login";
const API_SIGNUP = "https://localhost:7105/api/Auth/Register";
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
const signup = async ({ username, name, password, phone, email, confirm }) => {
    try {
      if (password !== confirm) {
        alert("Passwords do not match");
        console.log("step 0");
        throw new Error();
      }
      console.log("step 1");
      const response = await axios.post(API_SIGNUP, {
        username,
        name,
        phone,
        email,
        password,
        
      });
      console.log("step 2");
      if (response.data.success) {
        return login({ username, password });
      } else {
        console.log("step 3");
        return false;
      }
    } catch (error) {
      console.log("Signup failed", error);
      return false;
    }
  };
const logout = () => {
    localStorage.removeItem('token');
};
  
  const getToken = ({prop}) => {
    return localStorage.getItem({prop});
};
export { login,signup, logout, getToken };