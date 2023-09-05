
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../components/Register'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InCompleteTask from '../components/InCompleteTask';
import CompleteTask from '../components/CompleteTask';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
     screenOptions={{
      headerStyle: {
        backgroundColor: '#3b5274', // Altera a cor de fundo do cabeçalho para azul
      },
      headerTintColor: 'white', // Altera a cor do texto do cabeçalho para branco
    }}>
      <Tab.Screen name="Registar tarefas" component={Register} />
      <Tab.Screen name="Ver Tarefas" component={InCompleteTask} />
      <Tab.Screen name="Ver Tarefas concluidas" component={CompleteTask} />
    </Tab.Navigator>
   

  );
};

