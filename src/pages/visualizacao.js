import {WebView} from 'react-native-webview'
import React,{ useState, useEffect, useMemo} from "react"
import { buscaredacao } from '../data/requests'
import { ActivityIndicator, View, Text } from 'react-native'

export default function Visualizacao({route, navigation}){

    const [url, setUrl] = useState(null);
    const [nome, setNome] = useState(null);
    const [dataCriado,setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        console.log(route.params)
        const data = await buscaredacao(route.params.id)
        setNome(data.aluno.nome_completo)
        setData(data.created_at)
        setUrl(data.urls[0].url)
        setLoading(false);
    },[])

    const redacao = useMemo(() => {
        return(
            <View style={{backgroundColor:"#fff", flex:1}}>
                <Text style={{alignSelf:'center', paddingTop:20}}>aluno(a): {nome}</Text>
                <Text style={{alignSelf:'center'}}>criado em: {dataCriado}</Text>
                <WebView
                    source={{uri: url}}
                    style={{
                        marginTop:100
                    }}
                />
            </View>
        )
    }, [url])

    return (
        <View style={{flex:1}}>
            {loading? <ActivityIndicator size='large' color='#7654a1' style={{marginTop:200}}/> :( 
                redacao
            )}
        </View>
    )
}