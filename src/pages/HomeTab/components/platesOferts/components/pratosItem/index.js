import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles'
import PropTypes from 'prop-types'

const Pratos = ({ pratoItem }) => {

  return (
    <View style={styles.container} >
      <Image style={styles.image} source={{ uri: 'https://z-p3-scontent.fbsb13-1.fna.fbcdn.net/v/t1.0-9/15319131_1316360678415183_1904579198401624685_n.png?_nc_cat=0&oh=00188588ceba9e797de09836f11c664c&oe=5C00C97A' }} />
      <View style={styles.detalhe}>
        <Text style={styles.title}>{pratoItem.title}</Text>
        <Text style={styles.value}>{pratoItem.value}</Text>
      </View>
    </View>
  );
}

Pratos.propTypes = {
  pratoItem: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
}

export default Pratos;
