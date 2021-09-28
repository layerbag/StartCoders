import React,{useEffect, useState} from "react";
import{Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import { buscaRedacoes } from "../data/requests";
import styles from "./Style/"

export default function Redacoes({route,navigation}){
  const [data, setData] = useState(null)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(async () => {
    setData(await buscaRedacoes())
    //console.log(data)
  },[])

  const SelectRedacao = (props) =>{
    props.id ?(
      setSelectedId(props.id),
      route.params.op == 1 ?
        navigation.navigate('Visualizacao', {id:props.id, title:props.num})
      :
      navigation.navigate('Delete', {id:props.id, title:props.num} )
    ): null
  }
    
  const Item = ({item, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={() => SelectRedacao({id:item.id, num:item.numero})} style={[styles.item, backgroundColor]}>
      <Text style={[styles.numero,textColor]}>
        {item.numero}
      </Text>
      <Text>
        {item.created_at}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? "#0099d6" : "#7654a1";
    const color = item.id === selectedId ? 'white' : 'black';
    
    return(
      <Item
        item={item}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    )
  }

  return(
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
}
