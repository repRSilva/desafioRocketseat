import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

import RequestButton from './components/requestButton';
import HomeScreen from './pages/home';
import CartScreen from './pages/cart';
import ProfileScreen from './pages/profile';

const Tab = createBottomTabNavigator();

const icons = {
    Profile: {
        lib: Feather,
        name: 'user'
    },
    Cart: {
        lib: SimpleLineIcons,
        name: 'handbag'
    }
}

export default function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Home') {
                        return <RequestButton onPress={() => navigation.navigate('Home')} focused={focused} />;
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#000033',
                },
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255,255,255,0.6)',
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{ title: '' }} />
            <Tab.Screen name='Cart' component={CartScreen} options={{ title: 'Carrinho' }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{ title: 'Perfil' }} />
        </Tab.Navigator>
    )
}