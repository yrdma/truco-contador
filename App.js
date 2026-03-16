import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'react-native'

export default function App() {

const[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Image/>
      <Text style={{fontSize: 40}}>Marcador</Text>
      

      <Text>{contador}</Text>

   <View style={styles.buttons}>
    <View style ={styles.aumento}>
      <Button  
      color= "#07a32e"
      title='+' 
      onPress={() => setContador (contador + 1)}
      />
      </View>
      <View style ={styles.diminuir}>
      <Button
        
        color= "#ff0000"
        title='-'
         onPress={() => contador > 0 && setContador(contador - 1)}
         />
  </View>
   </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },buttons:{
    flexDirection:'row' ,  
    margin: 10,
    gap: 10
  },aumento:{
    width: 75
  },diminuir:{
    width: 75
  }
});

