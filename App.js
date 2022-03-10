import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Thiago do Amaral Castro Rodrigues</Text>
      <StatusBar style="auto" />
<Button
  
  title="Resultado"
  color="#black"
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
});
