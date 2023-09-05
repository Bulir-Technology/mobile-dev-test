import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from "axios";
export default function Cadastro() {

    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [percentage, setPercentage] = useState("");
    const [detail, setDetail] = useState("");
    const [data, setData] = useState("");

    const handleCadastro = async () => {
      const newTask = { name, value, percentage, detail, data };
    
      if (name === "" || value === "" || percentage === "" || detail === "" || data === "") {
        alert("Preencha todos os campos por favor!!");
        return;
      }
    
      const parsedPercentage = parseFloat(percentage);
    
      if (!isNaN(parsedPercentage) && parsedPercentage >= 0 && parsedPercentage < 100) {
        try {
          await axios.post("http://192.168.1.7:3001/tarefasExe", newTask, {
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          alert("Tarefa cadastrada com sucesso!!");
        } catch (error) {
          console.error(error);
        }
      } else {
        if (parsedPercentage === 100) {
          try {
            await axios.post("http://192.168.1.7:3001/tarefasCon", newTask, {
              headers: {
                "Content-Type": "application/json",
              },
            });
    
            alert("Tarefa cadastrada com sucesso!!");
          } catch (error) {
            console.error(error);
          }
        } else {
          alert("O valor da percentagem é inválido");
          return;
        }
      }
    };
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova tarefa</Text>

      <TextInput
          style={styles.input_T}
          placeholder={"Digite o seu nome da tarefa"}
          onChangeText={setName}
          value={name}
        />
        
      <TextInput
          style={styles.input_T}
          placeholder={"Digite o valor disponível em Kz"}
          onChangeText={setValue}
          value={value}
        />

      <TextInput
          style={styles.input_T}
          placeholder={"Digite a percentagem de execução"}
          onChangeText={setPercentage}
          value={percentage}
        />
      
      <TextInput
          style={styles.input_T}
          placeholder={"Digite o detalhamento da tarefa"}
          onChangeText={setDetail}
          value={detail}
        />
      
      <TextInput
          style={styles.input_T}
          placeholder={"Digite a data no formato (YYYY-MM-DD)"}
          onChangeText={setData}
          value={data}
        />

      <TouchableOpacity onPress={handleCadastro}>
          <Text style={styles.botao}>
            Cadastrar
          </Text>
        </TouchableOpacity>
    </View>


  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
  },

  title: {
      fontSize: 22,
      fontWeight: 'bold',
  },
  
  input_T: {
    width: 290,
    height: 50,
    left: 3,
    lineHeight: 18.69,
    padding: 15,
    backgroundColor: "white",
    fontSize: 12,
    color: "black",
    alignItems: "center",
    borderColor: '#50C2C9',
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 10,
  },

  botao: {
    fontSize: 22,
    fontWeight: 'bold',
    borderColor: '#50C2C9',
    borderWidth: 1,
    borderRadius: 100,
    color: "white",
    backgroundColor: "#50C2C9",
    width: 290,
    height: 50,
    alignItems: "center",
    textAlign: "center",
  },
});