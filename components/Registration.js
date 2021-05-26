import React, {useState} from "react";
import {Text, SafeAreaView, TextInput, Button, View, StyleSheet} from 'react-native'
import { gStyle } from '../styles/style';


export default function Registration({navigation}) {

  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  function submitHandler() {
    navigation.navigate('Main', {username})
  }

  return (
    <SafeAreaView style={styles.container}>
            <TextInput
                defaultValue={fullname}
                onChangeText={text => setFullname(text)}
                placeholder={'Fullname'}
                style={styles.input}
            />
            <TextInput
                defaultValue={email}
                onChangeText={text => setEmail(text)}
                placeholder={'E-mail'}
                style={styles.input}
            />
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
                title={'Регистрация'}
                color= '#59A4F2'
                onPress={submitHandler}
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
  }
});