import React,{ Component } from 'react'
import {Text} from 'react-native'

export default class Greeting extends Component {
    render() {
      return (
          <Text>Hi, I am { this.props.name }</Text>
      )
    }
}