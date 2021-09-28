import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack'
import LoginPage from "./pages/login/";
import Redacoes from "./pages/redacoes/";
import Visualizacao from "./pages/visualizacao/";
import Options from "./pages/Options/";
import Delete from "./pages/Delete/";
import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Redacoes" component={Redacoes}
          options={{title: 'Redações'}}
        />
        <Stack.Screen name="Visualizacao" component={Visualizacao}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen name="Options" component={Options}/>
        <Stack.Screen name="Delete" component={Delete}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}

