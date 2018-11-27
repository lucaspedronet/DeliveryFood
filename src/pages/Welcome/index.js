import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native'
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
    user: [
      'LucasPedro',
      'Fernanda',
    ]

  }

  async componentDidMount() {
    const { navigation } = this.props;
    const nameuser = await AsyncStorage.getItem('@delivery:nameuser');
    if (nameuser) {
      navigation.navigate('Main')
    }
  }

  login = async () => {
    this.setState({ loading: true })
    const { nameUser, user } = this.state;
    const { navigation } = this.props;

    for (name of user) {
      if (name === nameUser) {
        this.setState({ loading: false })

        await AsyncStorage.setItem('@delivery:nameuser', nameUser)
        navigation.navigate('Main')

      }
      else{
        this.setState({ loading: false })
      }
    }
  }

  render() {
    console.tron.log(this.props)
    const { nameUser } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header} >
          <Text style={styles.title} >Delivery</Text>
          <Text style={styles.context} >Uma forma deliciosa de matar sua fome, interaja com seus amigos.</Text>
        </View>
        <View style={styles.containerInput}>
          <View >
            <TextInput
              style={styles.input}
              autoCapitalize="none" // capitar o curso do mouse automáticamente.
              autoCorrect={false} // correção de texto automática.
              placeholder="Nome de Usuário"// texto a que irá aparecer no input.
              underlineColorAndroid="transparent"//tipo de input no android.
              value={nameUser}
              onChangeText={nameUser => this.setState({ nameUser })}
              keyboardAppearance="light" // aparencia do input.
              keyboardType="name-phone-pad" // tipo do teclado (numeric, add-email).
              returnKeyType='send' // button send aparecer no teclado.
              onSubmitEditing={this.login} // chama funcão ao teclar no button send  no teclado.
            //   onEndEditing={this.login}
            />
          </View>
          {
            this.state.loading
              ? <ActivityIndicator color='#FF0000' styles={styles.loading} />
              : <TouchableOpacity
                  opacity={0.5}
                  style={styles.button}
                  onPress={this.login}>
                  <Text>Entar</Text>
                </TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}

export default WelcomeScreen;
