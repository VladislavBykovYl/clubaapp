import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, Image } from 'react-native';
import { gStyle } from '../styles/style'

export default function Catalog({navigation}) {

  const CATALOG = [
    {key: 1, title: '12 посещений', text: 'Сетевой абонемент сроком 61 день с даты покупки, количество посещений - не более 12. Действует во всей сети тренажерных залов, вход возможен в любое время, согласно режима работы зала.', price: 1655 , img: 'https://s3-alpha-sig.figma.com/img/af0e/0012/3c682c07db99aeb98385b8502f349650?Expires=1623024000&Signature=KsDwurD12grXzfqBoBZqxc-fj27jqoL1ndNt1T89MRxgkNtnkF0R-LGCuh5LfWstsVBPN5VjISROnY11kTrjyWxR~BATAuvCiQuCJU1TILqjoIQ3vtPSZ0H0ZmpfAasz7u-~apoBqrmjp7wRQPfQ6ca0D3jgbWmDPh4bwnZIXUWkTFDL52dX3CdN~4xr5xfaDz55n4Ysggzqm69i~Rzyb4RhBUU2hsnSMTE~oJAEHB45wMh8H35FlWPJXOe74o-4F0eh-dSywlfTzGTIprGfoZpxX1Cpmq22uOaxPa1yzts1SotfEY7d3KgXuamKoEB5nXMnkAE0M3SiZm39mrT3qQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {key: 2, title: 'Ходи', text: 'Сетевой абонемент на 30 дней с безлимитным количеством посещений. Посещения доступны в любое время, согласно режима работы зала.', price: 2095 , img: 'https://s3-alpha-sig.figma.com/img/c67f/75d3/864ca51ea9258307cd0a60cc15a4ef1c?Expires=1623024000&Signature=gpl9NmJ3eVA0gihh17aR7-hcJ1sWvF2DGe-jW9E8jXua8dYOIu4WJ086wu3knCatDbfevhkj2krpNjS3UqweiRkxGT2V7Ccg0NQiyHeDibzkVkxdnCKs9wAGxeo4UVvLDbgkCvxxKBsIGFdJT57zUDCHopAQocC9OQ28HZafke3QEihx9v5CHJ0YexFm5hT-UIJMUOL1A0eRxmBCjkUSEnyd-UqbQoXsrk0rGbaLFrPxmdTjGPoRCeviwfpjRd~zr2K9akwuTcWCtKn9pQ1ckYie8q50CfW3puKaOmNndFYgupesCQu83oCsFa3gX6KgNwgQ5PeNtvg6cE1iaKwIBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {key: 3, title: 'Семейный', text: 'Сетевой абонемент для нескольких членов семьи. Срок действия 30 дней, количество посещений не ограничено. Посещения доступны в любое время, согласно режима работы зала.', price: 3525, img: 'https://s3-alpha-sig.figma.com/img/21bb/39da/77d9ca1cdaaf7ccab01e0a868b9b3c13?Expires=1623024000&Signature=OAQM6LpgIF-ANsE436uSlSh-1-BREA6-QJZdGlbBXR8AtQWaT7IIFSIFol43zKT5hNjsZuoDygoY5O9DKHEgZZ6XaGGdeizNiX6coMEGEg-76h7ZCEjKQY7J3F-h-LS427637iziLhvjygbTTzulsZgQTuitKBBnvN6iW-0y5si-X3-ZeKGEwJVyFxjA~nzoQHNLYN4jxhZQN3FZyvESpvk79A0~YsnbE4d2Ijbq678h7w22J3xsOfwpQ6K7uszAAumqVyjVFHJRl6UIFtGRLVFgPxPEdS3vLBpcQ5HOmnfjBN8PJcDF4fPm3D7X-t70oUCWl9XW2CU~77QpRHrlZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {key: 4, title: 'Годовой', text: 'Сетевой абонемент сроком 1 год с даты покупки, количество посещений - не более 365.', price: 14000, img: 'https://s3-alpha-sig.figma.com/img/0d89/a657/fe3adb9b58dc82d56091ff98587fe28e?Expires=1623024000&Signature=LtIswfCLc3vkTGZYB0ytaL421DKgo1YHASFrF~Dvb~2IdATgK-PQivjyvlkqpdz1p6rZEXmzQMedpWGmMkcpYDbvwvrHyJcah519Cwv~b5v8zZOpmF4KlWsZvlj7e8K5CoDiZf2o9n42aml~IFoFFtkS06LLmy~m53KH2YC3EsjwX0ZZvkLQ1T8Vox~dUySGM6Xd3c1ky~IYc4ztwJFZylTGjQADnl2t1VtEh0IKIz0mMNNls1A-c1ftZA3aVtZS~5sH~lq4lZiHr6BTlaEqBjMrvdqpElnz7ZdZ~tcjVFUwoDp-avtcbeTsVAqKeBZiohfEwTLOf-7cGm0WRqLJQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
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