import React from 'react'
import {
  Alert,
  Animated,
  TextInput,
  Text,
  View,
  Button } from 'react-native'


export default class Login extends React.Component {
  render() {
    return (
      <Animated.View>
        <TextInput name="" style={{width: 200}} placeholder="帳號.."/>
        <TextInput secureTextEntry={true} style={{ width: 200 }} placeholder="密碼.."/>
        <Button onPress={handleLoginSubmit()} style={{width: 150}} title="送出" />
      </Animated.View>
    )
  }
}
handleLoginSubmit = () => {
  alert("登入成功")
}
