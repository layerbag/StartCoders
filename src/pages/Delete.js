import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { deletaRedacao } from "../data/requests";

export default function Delete({route}){

    const [boolean, setBool] = useState(false)

    useEffect(async () => {
        console.log(route.params.id)
        await deletaRedacao(route.params.id).then(res => {
            setBool(true)
        } )
    }, [])

    return(
        <View style={styles.container}>
            {boolean ? 
                (console.log(route.params.title),
                <Text style={styles.text}>Redação {route.params.title} excluída</Text>)
            : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        justifyContent: 'center'
    },
    text:{
        fontSize:30
    }
})