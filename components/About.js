import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { gStyle } from '../styles/style'

export default function About({navigation}) {
  return (
    <ScrollView style={styles.container} >
      <Text style={styles.title}>Общая информация</Text>
      <Text style={styles.text}>Сеть тренажерных залов в г. Красноярске и Красноярском крае.

Современное, технологичное и безопасное оборудование
Залы площадью от 500 кв.м до 1200 кв.м
Кардио зона, функциональный тренинг, финская сауна
Мультистанция для функционального тренинга Synrgy 360
Персональные тренировки
Разовое занятие от 165 р
Абонемент 12 занятий от 1655р</Text>
<Text style={styles.title}>Адреса залов</Text>
<Text style={styles.text}>г. Красноярск ул.Белинского, 8 ТРК "Комсомолл" (4 этаж)</Text>
<Text style={styles.text}>г. Красноярск ул.Ладо Кецховели, 22 а БЦ "Спасский" (5 этаж)</Text>
<Text style={styles.title}>Контакты</Text>
<Text style={styles.text}>ООО "Welcome to the club buddy"

ИНН 464861235 КПП 24962341

ОГРН 1072466003026
Юридический адрес: 660077, г. 
Красноярск, ул. Лесопаркова, д. 33, оф.107-3

Центральный офис: г. Красноярск, ул.Лесопаркова, д.33, оф.107

Тел: +7(902)217-14-74

E-mail: W-Club@fit.ru

Отдел кадров W-Job@fit.ru

Отдел маркетинга, рекламы и продаж W-Sales@kolizey-fit.ru

Отдел закупок (спортивное питание) W-Store@fit.ru</Text>
<Text style={styles.title}>Фото</Text>
<View style={styles.containertwo}>
<Image 
    style = {styles.image}
    source= {{
      width: 350,
      height: 200,
      uri: 'https://s3-alpha-sig.figma.com/img/d0e3/c56f/0ead14a1be7bb58dd47155f307133b66?Expires=1623024000&Signature=W96VWMqIC27Mn7PI9XWtHRbVe7J2avflgW7g0e1Xi3u-6fw14hNn6T-~hk0UgZLk1Q1WZwffn8uBybL6Daeq7p8zGZV4lNr8Z7HHGb~PTlXVDjt5~bI8bgPOn0RV3QZOYPJnfOyKHobZskysY9kf9Xq0KPM6sn7SS2VBadK-N0Q0xtOQ~mnzKtr~UQzScV7AIg4YHXSwazLo-WWh~jKwUSfbfvPGgpNLhRxtum~R1VngHtv-9eDdK~f4srZKg-MK~gI4OLiol5s~e4BmKEH9mWfmNZuvlEuFMCmQ2Fj5vUFqP0ONzVVUv3GcZ7j7KhyQ~UB59oe3WXShs5ebkfeRBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      }}
/>
<Image 
                style = {styles.image}
                source= {{
                  width: 350,
                  height: 200,
                  uri:'https://s3-alpha-sig.figma.com/img/8d6d/9fe2/ba4a1434957d8d9c61ebaffe03c28120?Expires=1623024000&Signature=JS3P7nYaUf1lvxFYabNIwxzNjLjXpy9rVe2uugyicPWM8wmORZk-qZuIycXNpalhrPgyXeyz8zSvY0IoQYJN~D084vgY8tU6vJ0nBaT7dIWQRbgs06m384iqX~kk1kgnAMn2jMgSE08zRCZb-WVbH9r58SKTvxgrRxgFYsMzCA32VHnH8QxSSpcrj3KYJrdZpu4u1SGuTlBZHM8KftxXVgZHQeIm4PShAob7FWDMKaD4ZinwYJA-q4vkaJGVYYxFZMZstPxxbg2~Bj9Xet5TCevydsge-7LcP87aTxO0X0FqZwt23MEw0ZbKIY~-3bZ7zImpG9hb1qAn8rsSrIPQDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                }}
              />
              <Image 
                style = {styles.image}
                source= {{
                  width: 350,
                  height: 200,
                  uri: 'https://s3-alpha-sig.figma.com/img/6529/071e/42b8833ccf3fd6cebc23f439ab0669d7?Expires=1623024000&Signature=RC7IcG2GJOMU4w0NpQ-5hwNd88ZXQFFyE6HywwA2FPQvoykxluvMx-CsWu5UWY5F9Z86CLcV71eu8giXtjlV5vl9m7m4EE8E3s3Do99LmWnVDMTLYBvKiG-S4ysmPhjP0nURTY5HkQ40Tinhrc0fum9ZbdLHifYaAM7x3Eu99-UxTt4V3EOTnYq5DLGfUVdfi7kb20mhDisUIpRQpNZWLMCXn6Xz9h0x47e4V4ZI-8WSE6SQ1rZ5eMpoDPQOPT8ikukRtaXgJ7qoYxTd0XCDmE4irVGB0ukOIBmGjgZLnaZCP7CCrNkkA2VcMi1gf4yjGkbVgFh6iH42qzxk4sCB-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                }}
              />
              
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 25,
      paddingBottom: 25
    },
    containertwo: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 25,
      alignItems: 'center'
    },
    title:{
      fontWeight: 'bold',
      fontSize: 25,
      color: '#000',
      padding: 10,
      textAlign: 'center'
    },
    text: {
      color: '#000',
      textAlign: 'center'
    },
    image: {
      borderRadius: 10,
      marginBottom: 20
    }
  });