import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './Home';
import Pesquisa from './Pesquisa';
import { View } from 'react-native';
import Filtro from './Filtro';

function Routes () {
return (
<NavigationContainer >
<Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor : '#FFF' }}}>
<Stack.Screen name="Home" component={Home}/>
<Stack.Screen name="Pesquisa" component={Pesquisa} />
<Stack.Screen name="Filtro" component={Filtro} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default Routes 