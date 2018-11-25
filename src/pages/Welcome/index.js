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
    const { navigation } = this.props;
    if (nameUser.length === 0) return;
    this.setState({ loading: true });
    navigation.navigate('Main')

    try {
      this.chekUserExist(nameUser)
      const resetAction = NavigationActions.reset({
        //numeração indica qual rota dentro de actions deve iniciar primeiro, nesse caso temos apenas User (Poderiamos ter várias)
        index: 0,
        actions: [ //uma rota que contém uma página
          NavigationActions.navigate({ routeName: 'Main' }),
        ],
      });
      navigation.dispatch(resetAction);


    } catch (err) {
      this.setState({ loading: false, erroUser: `Usuário ${nameUser} não existe!` })
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
          <TouchableOpacity
            opacity={0.5}
            style={styles.button}
            onPress={this.login}>
            <Text>Entar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default WelcomeScreen;
