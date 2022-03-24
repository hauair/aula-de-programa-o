import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



export default function App() {
  return (
    <View style={styles.container}>
          <Text>Thiago do Amaral Castro Rodrigues</Text>
          <Text>Resultado</Text>
          <Text>Digite o valor 1</Text>
          <Text>Digite o valor 2</Text>
          <Text>Selecione a operação</Text>
      <StatusBar style="auto" />
<Button
  
  title="Calcular"
  color="#ff0000"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#black',
    alignItems: 'center',
    justifyContent: 'center',
  },
header: {
  width: width,
  height: 350,
}

});
