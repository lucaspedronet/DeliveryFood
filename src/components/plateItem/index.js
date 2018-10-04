import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import PropTypes from 'prop-types'

const PlateItem = ({ plates }) => {
  return (
    <View style={styles.container} >
      <Image
        style={styles.image}
        source={{ uri: 'https://z-p3-scontent.fbsb13-1.fna.fbcdn.net/v/t1.0-9/15319131_1316360678415183_1904579198401624685_n.png?_nc_cat=0&oh=00188588ceba9e797de09836f11c664c&oe=5C00C97A' }}
      />
      <Text>{plates.title }</Text>
      <View style={styles.detalhes}>
        <Text style={styles.value}>{plates.value }</Text>
        <Icon style={styles.add} name="star" size={15} />
      </View>
    </View>
  );
}

PlateItem.propTypes = {
  plates: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
}

export default PlateItem;
