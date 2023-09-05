import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
   <View style={styles.container}>
      <Text style={ styles.title} >GESTOR DE TAREFAS </Text>
     
    </View>
   
    
    );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: 'white',
    padding:40,
  
alignItems:'center',
  },
  title: {  
   
    color:'purple',
    textAlign:'center',
      fontSize:30,
      textShadowColor:'black',
      marginTop:30,
  }
});
