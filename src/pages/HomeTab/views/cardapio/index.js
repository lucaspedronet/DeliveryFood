import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal, SafeAreaView } from 'react-native'
import { Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import PlateCardapioOffer from './components/pratos'
// import PlateCardapio from './components/pratos'
import Photos from './components/photos'
import Detalhes from './components/detalhes'
import Mapa from './components/mapa'

import PropTypes from 'prop-types'
import styles from './styles'

class CardapioScreen extends Component {
  static navigationOptions = {
    title: 'Cardapio'
  }

  static propTypes = {
    navigation: PropTypes.shape({
      restaurante: PropTypes.shape({
        title: PropTypes.string,
        category: PropTypes.string,
        fone: PropTypes.number,
      }).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      cesta: []
    }
  }

//   state = {
//     activeIndex: 0
//   }

  segmenteClicked = (index) => {
    this.setState({ activeIndex: index })
    this.renderSection()
  }

  addPrato = () => {
    const { cesta, activeIndex } = this.state
    this.setState({
      activeIndex,
      cesta: [
        1,
        ...cesta,
      ]
    })
  }

  renderSection = () => {
    const { activeIndex } = this.state;
    const { navigation: { state } } = this.props;
    const { params: { restaurante } } = state;
    if ( activeIndex === 0) {
      console.tron.log(activeIndex)
      return (
        <View>
          <Text>Recomendado</Text>
          <FlatList
            horizontal={true}
            data={restaurante.pratos}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <PlateCardapioOffer prato={item} />}
          />
          <Text>Cardápio</Text>
          <FlatList
            data={restaurante.pratos}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <PlateCardapioOffer prato={item} />}
          />
        </View>
      )
    }
    if (activeIndex === 1) return <Photos />
    if (activeIndex === 2) return <Detalhes detalhe={restaurante} />
    if (activeIndex === 3) return <Mapa />
  }

  render() {
    const { navigation } = this.props;
    const { state: { params: { restaurante } }  } = navigation;
    const { activeIndex } = this.state;
    console.tron.log(this.props)
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground style={styles.thumbnail} blurRadius={0.3} source={{ uri: restaurante.avatar_url }}>
            <View style={styles.thumbnailContainer} >
              <View style={styles.iconBox}>
                <Icon name="angle-left" size={30} type="icon" color="#FFF" onPress={() => navigation.goBack()} />
                <Icon name="search" size={20} type="icon" color="#FFF" onPress={() => {}} />
              </View>
              <View style={styles.thumbnailCenter} >
                <Text style={styles.thumbnailTitle}>{ restaurante.title }</Text>
                <Text style={styles.thumbnailCategory}>{ restaurante.category }</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.conteudoContainer}>
            <View style={styles.conteudoBox} >
              <View>
                <Text style={styles.title} >{restaurante.title}</Text>
                <Text style={styles.fone} >+55 {restaurante.fone}</Text>
              </View>
              <View style={styles.buttonConteudoContainer} >
                <Button transparent style={styles.buttonConteudo} onPress={this.addPrato} >
                  <Icon name="inbox" size={20} />
                </Button>
                <Button transparent style={styles.buttonConteudo} >
                  <Icon name="comments" size={20} />
                </Button>
                <Button transparent style={styles.buttonConteudo} >
                  <Icon name="phone" size={20} />
                </Button>
              </View>
            </View>
            <View style={styles.recado}>
              <Text style={styles.textRecado}>Observe como seus usuários abordam informações, considere o que isso significa e projete para que eles atinjam o que precisam." —Donna Spence </Text>
            </View>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.menuBox} >
              <Icon
                style={[activeIndex === 0 ? styles.color : {}]}
                name="star"
                size={20}
                onPress={() => this.segmenteClicked(0)}
              />
              <Text style={styles.menuTitle}>Cardapio</Text>
            </View>
            <View style={styles.menuBox} >
              <Icon
                style={[activeIndex === 1 ? styles.color : {}]}
                name="photo"
                size={20}
                onPress={() => this.segmenteClicked(1)}
              />
              <Text style={styles.menuTitle}>Fotos</Text>
            </View>
            <View style={styles.menuBox} >
              <Icon
                style={[activeIndex === 2 ? styles.color : {}]}
                name="eye"
                size={20}
                onPress={() => this.segmenteClicked(2)}
              />
              <Text style={styles.menuTitle}>Detalhe</Text>
            </View>
            <View style={styles.menuBox} >
              <Icon
                style={[activeIndex === 3 ? styles.color : {}]}
                name="map"
                size={20}
                onPress={() => this.segmenteClicked(3)}
              />
              <Text style={styles.menuTitle}>Mapa</Text>
            </View>
          </View>
          <View style={styles.containerInferior}>
            {
                this.renderSection()
            }
          </View>
        </ScrollView>
        {//BOTÃO DE COMPRAS NA PARTE INFERIOR
          this.state.cesta.length > 0     //SÓ IRÁ APRESENTAR O BOTÃO CASO CESTA CONTENHA ALGUM ITEM
            ? <SafeAreaView style={{ backgroundColor: '#FFF'}}>
                <TouchableOpacity style={styles.buttonCompras} activeOpacity={0.7} onPress={() => navigation.push('Cesta') }>
                  <Text style={styles.titleCompras}>Finalizar Compras </Text>
                  <Icon name="star" size={18} color="#FDFDFD" />
                  <Text style={styles.titleCompras}> ({this.state.cesta.length})</Text>
                </TouchableOpacity>
              </SafeAreaView>
            : null
        }
      </View>
    )
  }
}

export default CardapioScreen;
