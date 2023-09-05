import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from "react";


export default function Tarefa({name, value, percentage, detail, date}) {

  
  

  return (
    <View>
      <Text style={styles.title}> Nome: {name} {'\n'} Valor: {value}  {'\n'} Percentagem: {percentage} {'\n'} Descrição: {detail} {'\n'} Data: {date} </Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
  },

  
});