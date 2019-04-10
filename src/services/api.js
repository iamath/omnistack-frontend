import axios from 'axios'

const api = axios.create({
    baseURL: 'https://iamath-omnistack-backend.herokuapp.com'
})

export default api
