import React, { Component } from 'react'
// import { Header, Body, Container, Left, Right } from 'native-base'
// import Icon from 'react-native-vector-icons/FontAwesome'

import { View, Text, ActivityIndicator, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Creators as CestaActions } from 'store/ducks/cesta'
import { bindActionCreators } from 'redux'

import styles from './styles'

class CestaScreen extends Component {
  static navigationOptions = {
    title: 'Cesta'
  }

  state = {
    pedido: ''
  }

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
    getCestaRequest: PropTypes.func.isRequired,
    cesta: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  }

  componentDidMount() {
    const { getCestaRequest } = this.props;
    const { pedido } = this.state;
    getCestaRequest(pedido)
  }

  render() {

    const { cesta } = this.props;
    console.tron.log(this.state)
    return (
      <View>
        {/* <Header>
          <Left>
            <Icon onPress={() => navigation.goBack()} name="angle-left" type="icon" size={15} style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>Delivery</Text>
          </Body>
          <Right>
            <Icon name="search" type="icon" size={15} style={{ paddingRight: 10 }} />
          </Right>
        </Header> */}

        {
            cesta.loading
              ? <ActivityIndicator size="small" color="#FF1F33" style={styles.loading} />
              : cesta.cesta.map(item => (
                <View key={item} style={styles.container}>
                  <View style={styles.avatarBox} >
                    <Image style={styles.avatar} source={{ uri: item.avatar_url }} />
                  </View>
                  <View style={styles.detalheBox} >
                    <View>
                      <Text style={styles.title} >Pizza Banco e Portuguesa 1/2 - GRANDE (12) funcionou! tamanho família aproveite.</Text>
                      <Text>OBS: Sem cebola e pimentão!</Text>
                    </View>
                    <View style={styles.detalheBoxBottom} >
                      <View>
                        <Text style={styles.unidades} >Unidades (1)</Text>
                      </View>
                      <View>
                        <Text style={styles.preco}>R$ 21,80</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.iconBox}>
                    <Icon name="star" size={20} style={styles.icon}/>
                  </View>
                </View>
              ))
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  cesta: state.cesta,
 })

const mapDispatchToProps = dispatch =>
  bindActionCreators(CestaActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CestaScreen);
