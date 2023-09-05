import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';
import Apresentacao from '../view/Apresentacao';
import Cadastro from '../view/Cadastro';

const Tab= createBottomTabNavigator();

export default function tabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="Cadastro"
                component={Cadastro}
                options={{
                    tabBarIcon: () => <Feather name="file"/>
                }}
            />

            <Tab.Screen 
                name="Apresentação"
                component={Apresentacao}
                options={{
                    tabBarIcon: () => <Feather name="inbox"/>
                }}
            />
        </Tab.Navigator>
    );
}