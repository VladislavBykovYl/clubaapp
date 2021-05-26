import React from 'react';

import Main from './components/Main';
import About from './components/About';
import Catalog from './components/Catalog';
import ActiveSubscriptions from './components/ActiveSubscriptions';
import PersonalDiscounts from './components/PersonalDiscounts';
import Login from './components/Login';
import Registration from './components/Registration';
import Subscriptioninfo from './components/SubscriptionInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#59A4F2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
            <Stack.Screen
                name='Login'
                component={Login}
                options={{title: 'Вход в приложение', }}
            />
            <Stack.Screen
                name='Registration'
                component={Registration}
                options={{title: 'Регистрация'}}
            />
            <Stack.Screen
                name='Main'
                component={Main}
                options={{title: 'Главная', headerLeft: null}}
            />
            <Stack.Screen
                name='Subscriptioninfo'
                component={Subscriptioninfo}
                options={{title: 'Подробная информация'}}
            />
            <Stack.Screen
                name='About'
                component={About}
                options={{title: 'О нас'}}
            />
            <Stack.Screen
                name='Catalog'
                component={Catalog}
                options={{title: 'Каталог'}}
            />
            <Stack.Screen
                name='ActiveSubscriptions'
                component={ActiveSubscriptions}
                options={{title: 'Активные абонементы'}}
            />
            <Stack.Screen
                name='PersonalDiscounts'
                component={PersonalDiscounts}
                options={{title: 'Персональные скидки'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}