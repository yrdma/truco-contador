import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'react-native'

export default function App() {

const[contador,setContador] = useState(0);
const[contador2,setContador2] = useState(0);
  return (
    <View style={styles.container}>
      <Image/>

   <View style ={styles.contadorNos}>
    <Text style={{fontSize: 30,justifyContent:'flex-start'}}>Nós</Text>
    <Text style={{fontSize: 30, marginTop: 30}}>{contador}</Text> 
   
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
         <View style ={styles.truco}>
      <Button  
      color= " #00595E"
      title='TRUCO' 
      onPress={() => setContador (contador + 3)}
      />

      <Button  
      color= "#00225D"
      title='SEISS' 
      onPress={() => setContador (contador + 6)}
      /> 

      <Button  
      color= "#58005E"
      title='NOVEEE' 
      onPress={() => setContador (contador + 9)}
      />

      <Button  
      color= "#5D0000"
      title='DOZI' 
      onPress={() => setContador (contador + 12)}
      />

      </View>
    </View>
    

    <View style ={styles.contadorEles}>
    <Text style={{fontSize: 30, justifyContent: 'flex-end'}}>Eles</Text>
    <Text style={{fontSize: 30, marginTop: 30}}>{contador2}</Text>
    <View style={styles.buttons}>
      <View style ={styles.aumento}>
     <Button  
      color= "#07a32e"
      title='+' 
      onPress={() => setContador2 (contador2 + 1)}
      />
      </View>

      
      <View style ={styles.diminuir}>
      <Button
        
        color= "#ff0000"
        title='-'
         onPress={() => contador2 > 0 && setContador2(contador2 - 1)}
         />
         </View>
      </View>
     <View style ={styles.truco}>
      <Button  
      color= "#00595E"
      title='TRUCO' 
      onPress={() => setContador2 (contador2 + 3)}
      />

      <Button  
      color= "#00225D"
      title='SEISSS' 
      onPress={() => setContador2 (contador2 + 6)}
      /> 

      <Button  
      color= "#58005E"
      title='NOVEEE' 
      onPress={() => setContador2 (contador2 + 9)}
      />

      <Button  
      color= "#5D0000"
      title='DOZI' 
      onPress={() => setContador2 (contador2 + 12)}
      />

      </View>
  </View>

   
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',  
    justifyContent: 'center',
    gap: 30,
  },
  buttons:{
    flexDirection:'row' ,  
    margin: 20,
    gap: 10,
  }
  ,aumento:{
    width: 50 ,
    marginTop: 30
   
  },
  diminuir:{
    width: 50 ,
    marginTop: 30 
  },
  contadorNos:{
    alignItems: 'center',
    marginTop: 30

  },
  contadorEles:{
    alignItems: 'center',
    marginTop: 30
  },
  truco:{
   gap: 10,
   
  }
});

