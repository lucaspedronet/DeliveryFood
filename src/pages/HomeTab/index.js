import React, { Component } from 'react'

import { View, Text, FlatList, ActivityIndicator, TextInput } from 'react-native'
import { Header, Body, Container, Left, Right } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import RestauranteItem from './components/restauranteItem'

import { debounce } from 'lodash';
import { connect } from 'react-redux'
import { Creators as RestaurantesActions } from 'store/ducks/restaurantes'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types';
import styles from './styles'

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={20} type="icon" style={{ color: tintColor }} />
    )
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    restaurante: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }).isRequired,
      ).isRequired,
      loading: PropTypes.bool,
    }).isRequired,
    getRestauranteRequest: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    const { getRestauranteRequest } = this.props;
    this.searchRequest = debounce(getRestauranteRequest, 600)
  }

  state = {
    searchInput: undefined,
  }

  componentDidMount() {
    const { getRestauranteRequest } = this.props;
    getRestauranteRequest()
  }

  search = (searchInput) => {//buscar
    this.setState({ searchInput }) //seta os dados de textInput no state
    this.searchRequest(searchInput) //passando searchInput par função searchRequest()
  }

  notSearch = () => {
    const { restaurante, navigation } = this.props
    if (restaurante.data.length > 0 && restaurante.data.length !== 0) {
      return (
      <FlatList
        data={restaurante.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>  (
          <RestauranteItem onPress={() => navigation.navigate('Cardapio', { restaurante: item })} restaurante={item} />
          )
        }
      />
    )
    }
    else {
      return (
        <View style={styles.nenhumResultado}>
          <Text style={styles.titleNenhum}>Nenhum restaurante encontrado! </Text>
        </View>
      )
    }
  }


  render() {
    const { navigation, restaurante } = this.props
    return (
      <Container>
        {/* HEADER DA PÁGINA INICIAL DO APP */}
        <Header>
          <Left>
            <Icon name="camera" type="icon" size={15} style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>Delivery</Text>
          </Body>
          <Right>
            <Icon onPress={() => {}} name="search" type="icon" size={15} style={{ paddingRight: 15 }} />
            <Icon onPress={() => navigation.navigate('Cesta')} name="shopping-cart" type="icon" size={15} style={{ paddingRight: 20 }} />
          </Right>
        </Header>
        <View>
          <Text style={styles.title}>Sugestão de Pratos</Text>
        </View>
        <View style={styles.containerSearchInput}>
          <TextInput
            style={styles.searchIput}
            autoCapitalize="none" //Capitar o cursor automaticamente
            autoFocus={false} //ativar campo de pesquisa automaticamente com cursor
            underlineColorAndroid="transparent" //cor da linha inferior do campo no Android
            placeholder="Buscar por restaurante" //string dentro do campo
            placeholderTextColor="#AAA" //cor do texto dentro do campo
            value={this.state.searchInput}
            onChangeText={this.search}
          />
        </View>
        {/* INICIIO DA LISTA DE RESTAURANTES  */}
        { restaurante.loading
          ? <ActivityIndicator color="#FF2F11" style={styles.loading} />
          : this.notSearch()
        }
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  restaurante: state.restaurantes,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(RestaurantesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);
