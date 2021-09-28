import React,{useState} from "react";
import{View, Text, TextInput, TouchableOpacity, Image, Keyboard, Pressable, ScrollView} from "react-native";
import {login} from "../data/requests/";
import styles from "./Style"

export default function LoginPage({navigation}){
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null)
    const [email, setEmail] = useState("");

    const submit = async () =>{
        const verify = await login(email, password)
        verify ? (
            setMessage(null),
            navigation.navigate('Options')
        ) : setMessage("Email ou senha incorretos")
    }
    
    return(
        <View style={styles.container}>
         <ScrollView contentContainerStyle={{alignItems:'center', paddingTop:50}} keyboardShouldPersistTaps="never" showsVerticalScrollIndicator={false} > 
            <Image
                style={styles.image}
                source={require('../image/mwS_VmNP_400x400.jpg')}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor="#7654a1"
                textAlign="center"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                textAlign="center"
                placeholderTextColor="#7654a1"
                onChangeText={setPassword}
                value={password}
            />
            <Text>{message}</Text>
            <TouchableOpacity style = {styles.enterLogin} onPress={submit}>
                <Text style={styles.enterText}>Entrar</Text>
            </TouchableOpacity>
         </ScrollView> 
        </View>
    );
}