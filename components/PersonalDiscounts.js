import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, Image } from 'react-native';
import { gStyle } from '../styles/style'

export default function PersonalDiscounts({navigation}) {

  const PERSONAL_DISCOUNT = [
    {key: 1, title: 'Скидка на первую покупку абонемента', discount: 25, time: 16},
    {key: 2, title: 'Скидка в честь дня рождения', discount: 10, time: 1},
    {key: 3, title: 'Скидка за долгосрочное использование клуба', discount: 15, time: 365}
  ]

  return (
    <View style={styles.container}>
      <FlatList data={PERSONAL_DISCOUNT} renderItem={({item}) => (
          <TouchableOpacity style={styles.element} >
              <Text style={styles.elementTitle}>{ item.title }</Text>
              <Text style={styles.elementSubtitle}>{ 'Скидка: '+item.discount + '%' + '    Осталось до окончания: ' + item.time + ' д.'}</Text>
          </TouchableOpacity>    
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 25
    },
    element: {
      padding: 20,
      marginBottom: 15,
      borderRadius: 10,
      backgroundColor: '#59A4F2'
    },
    elementTitle: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    elementSubtitle: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold'
    },
  });
