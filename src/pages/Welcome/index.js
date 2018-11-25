import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
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

  login = () => {
    this.setState({ loading: true })
    const { nameUser, user } = this.state;
    const { navigation } = this.props;
    for( name of user ) {
       if(name === nameUser){
           navigation.navigate('Main')
       }
       else{
         this.setState({ loading: false })
         return(
           <View>
             <Text>Usuário não encontrado! {nameUser}</Text>
           </View>
         )
       }
    }
  }

  render() {
    console.tron.log(this.props)
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header} >

          <Text style={styles.title} >Delivery</Text>
          <Text style={styles.context} >Seja Bem-vindo</Text>
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
