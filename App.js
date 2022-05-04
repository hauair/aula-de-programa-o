import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {
  const [darkMode, setdarkMode] = useState(false)
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    results:{
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
 },
 resultText: {
   margin: 10,
   fontSize: 25
 },
 themeButton: {
   backgroundColor: darkMode ? "#7b8084" :"#e5e5e5"
 }

  });
  
  return (
    <View>
     <View style={styles.results}>
       <TouchableOpacity style={styles.themeButton}></TouchableOpacity>
       <Text style={styles.resultText}>2 + 2 = 5</Text>
     </View>
     <View style={styles.buttons}>
      
      </View>
     </View>
          
  );
}



