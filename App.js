import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Image } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [ganhou, setGanhou] = useState(0);
  const [ganhou2, setGanhou2] = useState(0);





  function addGanhou(time, tipoTruco) {
    if (time === 1) {
      switch (tipoTruco) {
        case 3:
          setContador(contador + 3);
          break;
        case 6:
          setContador(contador + 6);
          break;
        case 9:
          setContador(contador + 9);
          break;
        case 12:
          setContador(contador + 12);
          break;
        default:
          setContador(contador + 1);
          break;
      }

      if (contador >= 12) {
        setGanhou(ganhou + 1);
        setContador(0);
        setContador2(0);
      }
    }
    if (time === 2) {
      switch (tipoTruco) {
        case 3:
          setContador2(contador2 + 3);
          break;
        case 6:
          setContador2(contador2 + 6);
          break;
        case 9:
          setContador2(contador2 + 9);
          break;
        case 12:
          setContador2(contador2 + 12);
          break;
        default:
          setContador2(contador2 + 1);
          break;
      }

      if (contador2 >= 12){
        setGanhou2(ganhou2 + 1);
        setContador2(0);
        setContador(0);
      }
    }
  }
   function reiniciarPartida() {
    setContador(0);
    setContador2(0);
  }

  function novoJogo() {
    reiniciarPartida();
    setGanhou(0);
    setGanhou2(0);
  }

  return (
    <View style={styles.container}>
      
  <Image 
    source={require("./assets/logo.webp")}
    style={{width:100}}
    width={250}
    height={80}
  />

   <View style={styles.containerDados}>

      <View style={styles.contadorNos}>
        <Text style={{ fontSize: 30, justifyContent: "flex-start" }}>Nós</Text>
        <Text style={{ fontSize: 30, marginTop: 30 }}>{contador}</Text>
        <Text style={{ fontSize: 30, marginTop: 30 }}>Ganhou:{ganhou}</Text>
        <View style={styles.buttons}>
          <View style={styles.aumento}>
            <Button color="#07a32e" title="+" onPress={() => addGanhou(1)} />
          </View>
          <View style={styles.diminuir}>
            <Button
              color="#ff0000"
              title="-"
              onPress={() => contador > 0 && setContador(contador - 1)}
            />
          </View>
        </View>
        <View style={styles.truco}>
          <Button
            color=" #00595E"
            title="TRUCO"
            onPress={() => addGanhou(1, 3)}
          />

          <Button
            color="#00225D"
            title="SEISS"
            onPress={() =>  addGanhou(1, 6)}
          />

          <Button
            color="#58005E"
            title="NOVEEE"
            onPress={() => addGanhou(1 , 9)}
          />

          <Button
            color="#5D0000"
            title="DOZI"
            onPress={() => addGanhou(1, 12)}
          />
        </View>
      </View>

      <View style={styles.contadorEles}>
        <Text style={{ fontSize: 30, justifyContent: "flex-end" }}>Eles</Text>
        <Text style={{ fontSize: 30, marginTop: 30 }}>{contador2}</Text>
        <Text style={{ fontSize: 30, marginTop: 30 }}>Ganhou:{ganhou2}</Text>
        <View style={styles.buttons}>
          <View style={styles.aumento}>
            <Button color="#07a32e" title="+" onPress={() => addGanhou(2)} />
          </View>

          <View style={styles.diminuir}>
            <Button
              color="#ff0000"
              title="-"
              onPress={() => contador2 > 0 && setContador2(contador2 - 1)}
            />
          </View>
        </View>
        <View style={styles.truco}>
          <Button
            color="#00595E"
            title="TRUCO"
            onPress={() => addGanhou(2, 3)}
          />

          <Button
            color="#00225D"
            title="SEISSS"
            onPress={() =>addGanhou(2, 6)}
          />

          <Button
            color="#58005E"
            title="NOVEEE"
            onPress={() => addGanhou(2, 9)}
          />

          <Button
            color="#5D0000"
            title="DOZI"
            onPress={() => addGanhou(2, 12)}
          />
        </View>
      </View>
    </View>
         <View style={styles.parte5}>
      <Button
        color="#5D0000"
        title="REINICIAR"
        onPress={() => reiniciarPartida()}
      />
      <Button color="#5D0000" 
      title="NOVO JOGO" 
      onPress={() => novoJogo()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
 paddingTop: 50,
    justifyContent: "center",
  },
  containerDados: {
  flex: 1,
    backgroundColor: "#fff",

flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  buttons: {
  flexDirection:"row",
    margin: 20,
    gap: 10,
  },
  aumento: {
    
    width: 50,
    marginTop: 30,
  },
  diminuir: {
    width: 50,
    marginTop: 30,
  },
  contadorNos: {
    alignItems: "center",
    marginTop: 30,
  },
  contadorEles: {
    alignItems: "center",
    marginTop: 30,
  },
  truco: {
    gap: 10,
  },
   parte5:{
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  }
});
