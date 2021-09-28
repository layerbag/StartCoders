import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        paddingHorizontal:30,
        backgroundColor: "#fff"
    },
    image:{
        resizeMode:"cover" , 
        width:170,
        height:170,
        marginBottom: 60,
    },
    enterLogin:{
        backgroundColor : "#7654a1",
        width : 150,
        alignItems: "center",
        paddingBottom : 5,
        bottom: 20,
        borderRadius : 50,
        marginTop : 40,
    },
    pressable:{
        width: "100%",
        height: "auto",
        alignItems: 'center',
    },
    enterText: {
        fontSize : 30,
        color : "#fff",
        fontWeight : "bold"

    },
    textInput: {
        borderWidth: 1,
        borderRadius: 50,
        marginTop : 5,
        bottom: 20,
        width:"100%",
        color:"#000"
    },
    item : {
        borderRadius: 50,
        alignItems: 'center',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    numero: {
        fontSize: 32,
    },
});

export default styles;