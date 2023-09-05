import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Tarefa from '../model/Tarefa';

export default function Apresentacao() {
  const [dataE, setDataE] = useState([]);
  const [dataC, setDataC] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const responseE = await fetch("http://192.168.1.7:3001/tarefasExe");
        const dataE = await responseE.json();
        setDataE(dataE);

        // Suponha que você tenha uma rota diferente para obter os dados de tarefas concluídas
        const responseC = await fetch("http://192.168.1.7:3001/tarefasCon");
        const dataC = await responseC.json();
        setDataC(dataC);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleEliminar = (id) => {
    fetch(`http://192.168.1.7:3001/tarefasCon/${id}`, { method: "DELETE" })
      .then(() => {
        setDataC(dataC.filter((tarefa) => tarefa.id !== id));
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tarefas em execução {'\n'}</Text>
      
      {dataE.map((item) => (
        <View key={item.id}>
          <Tarefa name={item.name} value={item.value} percentage={item.percentage} detail={item.detail} date={item.data} />
          <Text>------------------------------------------------------------------------------</Text>
          
        </View>
      ))}
      
      <Text style={styles.title}>Lista de tarefas concluídas {'\n'}</Text>
      {dataC.map((item) => (
        <View key={item.id}>
        <Tarefa key={item.id} name={item.name} value={item.value} percentage={item.percentage} detail={item.detail} date={item.data} />
        <TouchableOpacity onPress={() => handleEliminar(item.id)}>
            <Text style={styles.eliminar}>
              Eliminar
            </Text>
          </TouchableOpacity>
          <Text>------------------------------------------------------------------------------</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  eliminar:{
    color: "white",
    textDecorationStyle:"solid",
    borderColor: '#50C2C9',
    backgroundColor: '#50C2C9', 
    borderWidth: 1,
    borderRadius: 100,
    width:70,
    height:20,
    textAlign: "center",
  },
});

