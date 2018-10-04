import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { View, Text, TextInput, StatusBar, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  state = {
    nameUser: '',
    loading: false,
    erroUser: null,

  }

  chekUserExist = (nameUser) => {
    let user = 'LucasPedro'
    if (user === nameUser) return nameUser;
  }

  login = () => {
    const { nameUser } = this.state;
    if (nameUser.length === 0) return;
    this.setState({ loading: true });

    try {
      this.chekUserExist(nameUser)
      const resetAction = NavigationActions.reset({
        index: 0,//numeração indica qual rota dentro de actions deve iniciar primeiro, nesse caso temos apenas User (Poderiamos ter várias)
        actions: [
          NavigationActions.navigate({ routeName: 'Main' }),//uma rota que contém uma página
        ],
      });
      const { navigation } = this.props
      navigation.dispatch(resetAction);

    } catch (err) {
      this.setState({ loading: false, erroUser: `Usuário ${nameuser} não existe!` })
    }
  }



  render() {
    console.tron.log(this.props)
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <Text>Delivery</Text>
          <Text>Seja Bem-vindo</Text>
        </View>
        <View style={styles.containerInput}>
          <View >
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome de Usuário"
              underlineColorAndroid="transparent"
              value={this.state.nameUser}
              onChangeText={nameUser => this.setState({ nameUser })}
            />
          </View>
          <TouchableOpacity opacity={0.5} style={styles.button} onPress={this.login} >
            <Text>Entar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default WelcomeScreen;
