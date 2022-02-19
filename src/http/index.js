import axios from 'axios'
const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'applications/json',
        'Content': 'appplication/json'
    }
})
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function(erro){
    return Promise.reject(erro)
}
)
export default http