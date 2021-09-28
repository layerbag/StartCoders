import axios from "axios"

class Axios{
    
    instance = axios.create({
        baseURL: 'https://desafio.pontue.com.br',
        timeout: 10000,
        headers: {}
    })

}
const http = new Axios();
export default http