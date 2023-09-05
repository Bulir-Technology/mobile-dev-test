import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, TextInput, Text, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Slider from 'react-native-slider';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ route }) {
  const handleCompleteTask = (taskId) => {
    // Encontra a tarefa com base no ID
    const tarefa = tarefasNaoConcluidas.find(item => item.id === taskId);
    if (!tarefa) return; // Verifique se a tarefa existe

    // Atualiza o percentual concluído localmente
    tarefa.percentualConcluido = 100;
    const updatedTarefas = [...tarefasNaoConcluidas];
    setTarefasNaoConcluidas(updatedTarefas);

    // Envia uma solicitação PUT para atualizar o JSON Server
    axios.put(`http://192.168.1.7:3001/tarefas/${taskId}`, tarefa)
      .then(response => {
        alert("Tarefa concluída:", response.data);
      })
      .catch(error => {
        alert("Erro ao atualizar a tarefa:", error);
      });
  };
  
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(1);
  const handleItemPress = (item) => {
    navigation.navigate('Details', {
      tarefa: item,
    });
  };
  const handleValueChange = (value) => {
    setSelectedValue(Math.round(value));
  };

  const [tarefas, setTarefas] = useState([]);
  const [tarefasNaoConcluidas, setTarefasNaoConcluidas] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.7:3001/tarefas")
      .then(response => {
        setTarefas(response.data);
        // Filtra as tarefas não concluídas
        const naoConcluidas = response.data.filter(item => item.percentualConcluido < 100);
        setTarefasNaoConcluidas(naoConcluidas);
      })
      .catch(error => {
        console.error("Erro ao buscar tarefas:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title} > 
          Lista de tarefas 
        </Text>
        <View style={styles.line}></View>
      </View>
      <FlatList 
        style={{ height: 5230, color: 'blue' }}
        data={tarefasNaoConcluidas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.tarefa}>
              <Text style={styles.taskTitle}>{item.nomeTarefa}</Text>
              <Text>Data da Tarefa: {item.dataTarefa}</Text>
              <Text>Descrição: {item.descricaoTarefa}</Text>
              <Text>Percentual Concluído: {item.percentualConcluido}%</Text>
              <Slider
                style={{ width: 230, color: 'blue' }}
                minimumValue={1}
                maximumValue={100}
                step={1}
                value={parseInt(item.percentualConcluido, 10)}
                minimumTrackTintColor="#12b30d"
                maximumTrackTintColor="red"
                thumbTintColor="#12b30d"
                onValueChange={handleValueChange}
              />
              <TouchableOpacity
                onPress={() => handleCompleteTask(item.id)}
                style={styles.done}
              >
                <Text style={{ color: 'white' }}>completa</Text>
                <Ionicons name="md-checkmark-circle" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
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
  done: {
    display: 'flex',
    backgroundColor: '#12b30d',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  title: {
    color: '#474747',
    fontWeight: 'bold',
    fontSize: 27,
  },
  line: {
    backgroundColor: '#474747',
    height: 2,
    marginBottom: 6,
  },
  box: {
    marginBottom: 6,
    width: 320,
    textAlign: 'center',
    borderBottomColor: 'black',
  },
  tarefa: {
    padding: 16,
    border: 1,
    backgroundColor: 'white',
    width: 320,
    marginTop: 5,
    borderRadius: 10,
  },
  taskTitle: {
    fontWeight: 'bold',
  },
});
