import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
export default function Options(){
    const navigator = useNavigation()
    return(
    <View style={style.container}>
        <Text style={style.instrucao}>Escolha uma opção</Text>
        
        <TouchableOpacity style={style.button}
            onPress={()=>navigator.navigate('Redacoes', {op:1})}    
        >
            <Text style={style.text}>Consultar Redações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}
            onPress={()=>navigator.navigate('Redacoes',{op: 2})} 
        >
            <Text style={style.text}>Remover Redação</Text>
        </TouchableOpacity>
    </View>
    )
}

const style = StyleSheet.create({
    button:{
        borderRadius:50,
        backgroundColor:'#7654a1',
        marginBottom:15,
        alignItems: "center",
        width:'100%',
        paddingVertical:10
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:30
    },
    text:{
        color:'white',
        fontSize:16,
        fontWeight:"600"
    },
    instrucao:{
        marginBottom:50,
        fontSize:16,
        color:'#333',
        fontWeight:'700'
    }
})