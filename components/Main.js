import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { gStyle } from '../styles/style'

export default function Main( { navigation, route } ) {
    const loadScene = () => {
        navigation.navigate('Contacts');
    }

    function submitHandler() {
      navigation.navigate('Login')
    }

    const MAIN_MENU = [
        {key: 1, title: 'Каталог', subtitle: 'Нужен абонемент?', name: 'Catalog'},
        {key: 2,title: 'Активные абонементы', subtitle: 'Желаете просмотреть активные абонементы?', name: 'ActiveSubscriptions'},
        {key: 3,title: 'О нас', subtitle: 'Интересует информация о клубе?', name: 'About'},
        {key: 7,title: 'Персональные скидки', subtitle: 'Халявщик, да?', name: 'PersonalDiscounts'},
    ]

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{route.params.username}</Text>
      <FlatList data={MAIN_MENU} renderItem={({item}) => (
          <TouchableOpacity style={styles.element} onPress={() => navigation.navigate( item.name )} >
              <Text style={styles.elementSubtitle}>{ item.subtitle }</Text>
              <Text style={styles.elementTitle}>{ item.title }</Text>
          </TouchableOpacity>    
      )} />
      <Button 
        title={'Выйти с аккаунта'}
        color= '#59A4F2'
        onPress={submitHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    username: {
      fontSize: 25,
      paddingTop: 25,
      paddingBottom: 25
    },
    element: {
      marginBottom: 25,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#59A4F2',
    },
    elementTitle: {
      color: '#fff',
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    elementSubtitle:{
      color: '#fff',
      textAlign: 'center'
    }
  });