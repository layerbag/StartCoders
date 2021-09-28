import AsyncStorage from "@react-native-async-storage/async-storage"
import { ACCESSTOKEN, ALUNOID } from "../constantes/constante"
import axios from "axios"

const preparaRequest = async() =>{
    try{
        const authorization = await AsyncStorage.getItem(ACCESSTOKEN)
        const axiosInst = axios.create({
            baseURL: 'https://desafio.pontue.com.br',
            timeout: 10000,
            headers:{
                'Authorization' : authorization ? 'Bearer ' + authorization : null
            }
        })
        return axiosInst
    }catch(e){
        console.log(e)
    }
}

export const login = async (email, password) => {
    try{
        const instance = await preparaRequest()
        const retorno = await instance.post("/auth/login",{email:email, password:password})
        await AsyncStorage.setItem(ACCESSTOKEN, retorno.data.access_token),
        await AsyncStorage.setItem(ALUNOID, retorno.data.aluno_id)
        return retorno.status === 200 ? true : false
    }
    catch(error){
        console.log("id 1: " + error);
    };
}

export const buscaRedacoes = async () => {
    try{
        const instance = await preparaRequest()
        var string = "/index/aluno/" + await AsyncStorage.getItem('ALUNOID')
        const redacoes = await instance.get(string)
        return redacoes.data.data
    }catch(error){
        console.log("id 2: " + error)
    }
}

export const buscaredacao = async (props) => {
    try{
        const instance = await preparaRequest()
        const redacao = await instance.get("/redacao/" + props)
        return redacao.data.data
    }catch(error){
        console.log("id 3: " + error)
    }
}

export const deletaRedacao = async(props) => {
    const instance = await preparaRequest();
    await instance.delete("/redacao/" + props + "/delete").then(res => {
        return res.status == 200 ? true : false
    })
}
