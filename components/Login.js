import React, {useState} from "react";
import {Text, SafeAreaView, TextInput, Button, View, StyleSheet} from 'react-native'
import { gStyle } from '../styles/style';


export default function Login({navigation}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function submitHandler() {
    navigation.navigate('Main', {username})
  }

  return (
    <SafeAreaView style={styles.container}>
            <TextInput
                defaultValue={username}
                onChangeText={text => setUsername(text)}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                defaultValue={password}
                onChangeText={text => setPassword(text)}
                placeholder={'Password'}
                style={styles.input}
                secureTextEntry={true}
            />
            <Button
                title={'Войти в приложение'}
                color= '#59A4F2'
                onPress={submitHandler}
            />
            <Text style={styles.styleone}>Нет акаунта?</Text>
            <Button
                title={'Зарегистрироваться!'}
                color= '#59A4F2'
                onPress={()=>{navigation.navigate('Registration')}}
                style={styles.but}
            />
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 25,
  },
  input: {
      width: 350,
      height: 68,
      padding: 10,
      borderWidth: 2,
      borderColor: '#59A4F2',
      marginBottom: 10,
      borderRadius: 10
  },
  styleone: {
    paddingTop: '90%',
    fontSize: 16,
    paddingBottom: 10
  },
  styletwo: {
    
  }
});