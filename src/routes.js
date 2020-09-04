import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './pages/signIn';
import SignUpScreen from './pages/signUp';
import CartScreen from './pages/cart';
import FlavorScreen from './pages/flavor'
import SizeScreen from './pages/size'
import CheckoutScreen from './pages/checkout'

import NavigationScreen from './navigation';

const Stack = createStackNavigator();

export default function Routes() {
    return (

        <Stack.Navigator initialRouteName='SignIn' >
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerShown: false
                }
                }
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerShown: false
                }
                }
            />
            <Stack.Screen
                name="Home"
                component={NavigationScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false
                }
                }
            />
            <Stack.Screen
                name="Flavor"
                component={FlavorScreen}
                options={{
                    headerShown: false
                }
                }
            />
            <Stack.Screen
                name="Size"
                component={SizeScreen}
                options={{
                    headerShown: false
                }
                }
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{
                    headerShown: false
                }
                }
            />

        </Stack.Navigator>
    );
}