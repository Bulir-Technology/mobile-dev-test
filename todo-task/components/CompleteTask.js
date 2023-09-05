import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

export default function CompleteTask({ route }) {
  const [tarefas, setTarefas] = useState([]);
  const [tarefasExcluidas, setTarefasExcluidas] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.7:3001/tarefas")
      .then(response => {
        setTarefas(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar tarefas:", error);
      });
  }, []);

  const tarefasConcluidas = tarefas.filter(item => item.percentualConcluido == 100);

  const handleExcluirTarefa = (id) => {
    // Envie uma solicitação DELETE para o servidor JSON para excluir a tarefa com base no ID
    axios.delete(`http://192.168.1.7:3001/tarefas/${id}`)
      .then(response => {
        // Verifiqua a resposta do servidor (você pode lidar com erros aqui)
        alert("Tarefa excluída:", response.data);

        // Atualiza a lista local de tarefas excluídas
        const tarefaExcluida = tarefas.find(item => item.id === id);
        setTarefasExcluidas([...tarefasExcluidas, tarefaExcluida]);

        // Remova a tarefa da lista de tarefas
        const tarefasAtualizadas = tarefas.filter(item => item.id !== id);
        setTarefas(tarefasAtualizadas);
      })
      .catch(error => {
        alert("Erro ao excluir a tarefa:", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>
          Lista de tarefas concluídas
        </Text>
        <View style={styles.line}></View>
        <FlatList
          data={tarefasConcluidas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.tarefa}>
              <Text style={styles.taskTitle}>{item.nomeTarefa}</Text>
              <Text>Data da Tarefa: {item.dataTarefa}</Text>
              <Text>Descrição: {item.descricaoTarefa}</Text>
              <Text>Percentual Concluído: {item.percentualConcluido}%</Text>
              <TouchableOpacity
                onPress={() => handleExcluirTarefa(item.id)}
              >
                <AntDesign name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#e6e6e6',
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  title:{
    color:'#474747',
    fontWeight: 'bold', fontSize: 27 ,
  },
  line:{
    backgroundColor:'#474747',
    height:2,
    marginBottom:6,
  },
  box:{
    marginBottom:6,
    width:320,
    textAlign:'center',
    borderBottomColor:'black',
  },
  tarefa: {
    padding: 16,
    border: 1,
    backgroundColor:'white',
    width:320,
    marginTop:5,
    borderRadius:10,
  },
  taskTitle:{
    fontWeight:'bold',
  }
});
