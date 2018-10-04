import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Restaurantes from '../../pages/Home'

class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={20} type="icon" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
    // CRIAMOS PROPRIEDADE CHAMADA NAVEGAÇÃO QUE RECEBE OS PARAMETROS DE NAVEGAÇÃO DA PÁGINA E PASSA PARA
    // COMPONENTE Restaurantes.
      <Restaurantes navegação={this.props} />
    )
  }
}

export default HomeTab;
