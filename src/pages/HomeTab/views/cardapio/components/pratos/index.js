import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

class PlateCardapioOffer extends Component {
  static propTypes = {
    prato: PropTypes.PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number,
    }).isRequired,
  }

  offerPlate = (prato) => {
    return (
      <TouchableOpacity style={styles.container} >
        <Image style={styles.image} source={{ uri: prato.avatar_url }} />
        <View style={styles.detalhe}>
          <Text style={styles.title}>{prato.title}</Text>
          <Text style={styles.value}>{prato.value}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { prato } = this.props;
    if (prato.offer_plate) {
      return this.offerPlate(prato)
    }
    return null;
  }
}

export default PlateCardapioOffer;

