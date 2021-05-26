import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { gStyle } from '../styles/style'

export default function About({navigation, route}) {
  return (
    <View style={styles.container}>
        <Image 
            style = {styles.image}
            source= {{
                width: 350,
                height: 200,
                uri: route.params.img,
            }}
        />
      <Text style={styles.elementTitle}>{'Наименование абонемента: ' + route.params.title}</Text>
      <Text style={styles.elementTitle}>{'Стоимость абонемента: ' + route.params.price + ' руб.'}</Text>
      <Text style={styles.elementSubtitle}>{route.params.text}</Text>
      <Text style={styles.button}>Приобрести</Text>
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
    image: {
        borderRadius: 10
    },
    elementTitle: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 5
      },
      elementSubtitle:{
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20
      },
      button:{
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: '#59A4F2',
          color: '#fff',
          fontSize: 20,
          borderRadius: 10
      }
  });