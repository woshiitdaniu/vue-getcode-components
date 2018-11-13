import Axios from 'axios';
//全局配置请求url
//Axios.defaults.baseURL = 'http://192.168.36.120:8084/wisechain-app-backstage';
Axios.defaults.baseURL = 'https://localhost:8080';//这里统一配置请求头

export default Axios