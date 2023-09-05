import { StatusBar } from 'expo-status-bar';
import {React,useState} from 'react';
import { TouchableOpacity,FlatList, StyleSheet, TextInput, Text, View } from 'react-native';
import axios from 'axios';
import Slider from 'react-native-slider';



export default function Register({ navigation }) {

  
 

  const [nomeTarefa, setNomeTarefa] = useState('');
  const [percentualConcluido, setPercentualConcluido] = useState('');
  const [dataTarefa, setDataTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  
  

  const handleRegistrarTarefa = async () => {
    // Verifica se a porcentagem está dentro dos limites permitidos
    if (percentualConcluido < 1 || percentualConcluido > 100) {
      alert("Por favor, insira uma porcentagem entre 1 e 100.");
      return;
    }

    // Verifica se a data está no formato correto (dd/mm/aaaa)
  const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!datePattern.test(dataTarefa)) {
    alert("Por favor, insira a data no formato dd/mm/aaaa.");
    return;
  }

    const newtask={nomeTarefa,percentualConcluido,dataTarefa,descricaoTarefa};
    try {
      await axios.post("http://192.168.1.7:3001/tarefas",newtask,{
        headers:{
          "Content-Type":"application/json",
        },
      });
      alert("Tarefa registrada com sucesso!");
        // Limpa os campos após o registro bem-sucedido
        setNomeTarefa("");
        setPercentualConcluido("");
        setDataTarefa("");
        setDescricaoTarefa("");
     
    
    }
    catch(error){
      console.error("erro  : " , error);

    }
  };

  return (
  <View style={styles.container}>
    <View>
      <Text>TAREFA:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: correr, ler, etc"
        value={nomeTarefa}
        onChangeText={setNomeTarefa}
      />

      <Text>PERCENTUAL CONCLUÍDO (%): </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={percentualConcluido}
        onChangeText={text => setPercentualConcluido(text)}
      />

      <Text>Insira uma data (DD/MM/AAAA):</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        value={dataTarefa}
        onChangeText={text => setDataTarefa(text)}
      />

      <Text>DESCRIÇÃO DA TAREFA:   </Text>
      <TextInput
        style={styles.inputDesc}
        value={descricaoTarefa}
        onChangeText={text => setDescricaoTarefa(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegistrarTarefa}>
        <Text style={styles.btnTxt}>Registrar tarefa</Text>
      </TouchableOpacity>
      
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
    justifyContent:'center',

  },

  input: {
    backgroundColor: 'white',
    width: 350,
    height: 50,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 7,
  },
  inputDesc: {
    width: 350,
    height: 140,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  button: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9c667d',
    padding: 10,
    height: 50,
    width: 370,
    marginTop: 40,
    borderRadius: 5,
  },
  btnTxt: {
    color: 'white',
    fontSize: 23,
  },
});
