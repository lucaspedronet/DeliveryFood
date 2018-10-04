import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

class Mapa extends Component {
  static propTypes = {
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Funcionou Mapa!</Text>
      </View>
    )
  }
}

export default Mapa;
