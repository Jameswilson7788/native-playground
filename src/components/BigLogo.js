import React from 'react'
import { Animated, View,Text } from 'react-native'


export default class BigLogo extends React.Component {
    render() {
        return (
            <Text style={styles.logo}>卡特黑爾</Text>
        )
    }
}

const styles = {
    logo: {
      color: 'black',
      fontSize: 50
    }
}
