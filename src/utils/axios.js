import ElementUI from 'element-ui'
import axios from 'axios'
import router from '../router'
import conf from '../router/config'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = conf.api;
axios.loading = null;

axios.cleanLoad = ()=>{
    setTimeout(axios.loading,200);
    axios.loading = null;
}
//http request 拦截器
axios.interceptors.request.use(
	request => {
		if(!axios.loading){
	        ElementUI.Message('哈哈提示一下子');
		}

		return request;
	},
	error => {
		return Promise.reject(error)
	}
)

//http response 拦截器
axios.interceptors.response.use(
	response => {
		axios.cleanLoad();
		return response.data;
	},
	error => {
		axios.cleanLoad();

		if(error.response){
	        ElementUI.Message('哈哈提示一下子');
		}
		return Promise.reject(error)
	}
)


export default axios;




