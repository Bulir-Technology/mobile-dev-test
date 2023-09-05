import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class DateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '', // Use uma string vazia como valor inicial
    };
  }

  // Função para lidar com a inserção manual da data
  handleDateChange = (text) => {
    this.setState({ selectedDate: text });
  }

  // Função para mostrar a data em um alerta (você pode adaptar isso conforme necessário)
  showSelectedDate = () => {
    alert(`Data Selecionada: ${this.state.selectedDate}`);
  }

  render() {
    return (
      <View style={{right: 40}}>
        <Text>Data Selecionada: {this.state.selectedDate}</Text>
        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 10 }}
          placeholder="Insira a data (YYYY-MM-DD)"
          onChangeText={this.handleDateChange}
          value={this.state.selectedDate}
        />
        
      </View>
    );
  }
}

export default DateInput;

