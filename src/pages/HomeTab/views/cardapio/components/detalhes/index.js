import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

class Detalhes extends Component {
  static propTypes = {
    detalhe: PropTypes.PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    const { detalhe } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.titleHeader}>Informação do Estabelecimento</Text>
        </View>
        <View style={styles.perfil} >
          <View>
            <Image style={styles.avatar} source={{ uri: detalhe.avatar_url }} />
          </View>
          <View>
            <Text style={styles.title} >{detalhe.title}</Text>
            <Text style={styles.subTitle} >Estabelecimento oficial no WeekFood</Text>
          </View>
        </View>
        <View style={styles.barraProgresso} >
          <View style={styles.barraProgresso01} />
          <View style={styles.barraProgresso02} />
          <View style={styles.barraProgresso03} />
          <View style={styles.barraProgresso04} />
          <View style={styles.barraProgresso05} />
        </View>
        <View>
          <View>
            <Text>Programação</Text>
            <Text>{detalhe.title}</Text>
          </View>
          <View>
            <Text>Mercado de Pontos</Text>
            <Text>{detalhe.title}</Text>
          </View>
          <View>
            <Text>Reservas</Text>
            <Text>{detalhe.title}</Text>
          </View>
          <View>
            <Icon name="star" size={20} />
          </View>
        </View>

        <View>
          <View>
            <Text>História</Text>
          </View>
          <View>
            <Text>Valor</Text>
          </View>
          <View>
            <Text>Missão</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Detalhes;
