import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {
  const [darkMode, setdarkMode] = useState(false)
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <View>
    <View style={styles.results}>
     <TouchableOpacity style={styles.themeButton}></TouchableOpacity>
      </View>
      <View style={styles.buttons}>
      
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
  results:{
    backgroundColor: darkMode ? "#282f3b" : "f5f5f5",
    width: '100%',
    minHeight: 300,

  }

});
