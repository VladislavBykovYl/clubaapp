import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, Image } from 'react-native';
import { gStyle } from '../styles/style'

export default function ActiveSubscriptions({navigation}) {

  const CATALOG = [
    {key: 3, title: 'Семейный', text: 'Сетевой абонемент для нескольких членов семьи. Срок действия 30 дней, количество посещений не ограничено. Посещения доступны в любое время, согласно режима работы зала.', price: 3525, img: 'https://s3-alpha-sig.figma.com/img/21bb/39da/77d9ca1cdaaf7ccab01e0a868b9b3c13?Expires=1623024000&Signature=OAQM6LpgIF-ANsE436uSlSh-1-BREA6-QJZdGlbBXR8AtQWaT7IIFSIFol43zKT5hNjsZuoDygoY5O9DKHEgZZ6XaGGdeizNiX6coMEGEg-76h7ZCEjKQY7J3F-h-LS427637iziLhvjygbTTzulsZgQTuitKBBnvN6iW-0y5si-X3-ZeKGEwJVyFxjA~nzoQHNLYN4jxhZQN3FZyvESpvk79A0~YsnbE4d2Ijbq678h7w22J3xsOfwpQ6K7uszAAumqVyjVFHJRl6UIFtGRLVFgPxPEdS3vLBpcQ5HOmnfjBN8PJcDF4fPm3D7X-t70oUCWl9XW2CU~77QpRHrlZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {key: 5, title: 'Разовый', text: 'Разовое посещение', price: 215, img: 'https://s3-alpha-sig.figma.com/img/bb4f/1cf2/492a6a8af54052e88aae2f07c39b8f3d?Expires=1623024000&Signature=BuEEtuctYG2iY53YVK0B01p~Ya8CjD2P0-uTZc6pmePUN9IjeSvTnQrqOl-aCQw59wifIuNXxUlOQUElwZiSi-Ek9n1u8flG2wMAIO2O9fjNWnu4lxj2pyJ3-pnWH1dBXn3T5TyHA9rS6XbaVZsTVoTLjxwn4odIo9fTkujJpFFbcfyLVXsCwui-CPm9LsgtivmP19b6p6Hyja5mQEn2seZ~-L-7KOyHo8xtJxHQ7vnmOkj8q7-vyYuvKu2R7gZqKham3asklIE-AuzhEj9VeIpI2fNUFcComTKZynjiuaRk7YEMaOznY4pR598ubIjaZLDmcROlURpY4-~R73iB7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
  ]

  return (
    <View style={styles.container}>
      <FlatList data={CATALOG} renderItem={({item}) => (
          <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Subscriptioninfo', item)} >
              <Image 
                style = {styles.image}
                source= {{
                  width: 350,
                  height: 200,
                  uri: item.img,
                }}
              />
              <Text style={styles.elementTitle}>{ item.title }</Text>
              <Text style={styles.elementSubtitle}>{ 'Цена: ' + item.price + ' руб.' }</Text>
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
      justifyContent: 'center',
      paddingTop: 25
    },
    image: {
      borderRadius: 10
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