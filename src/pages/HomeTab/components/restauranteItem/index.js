import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'styles'
import styles from './styles'
import PropTypes from 'prop-types'

const RestauranteItem = ({ restaurante, onPress }) => {
  console.tron.log(restaurante)
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image style={styles.avatar} source={{ uri: restaurante.avatar_url }} />
      </View>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <Text style={styles.title}>{restaurante.title}</Text>
          <Text style={styles.subTitle}>{restaurante.category}</Text>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.info}>
            <Icon name="hourglass-start" size={10} style={styles.icon} />
            <Text style={styles.text}>{ restaurante.time_medium }</Text>
            <Icon name="shopping-cart" type="icon" size={10} style={styles.icon} />
            <Text style={styles.text}>{ restaurante.value_min_max }</Text>
          </View>
          <View style={styles.info}>
            <Icon name="motorcycle" size={10} style={styles.icon} />
            <Text style={styles.text} > Delivery * Entrega: R${ restaurante.value_delivery },00 (centro)</Text>
          </View>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.button}>
          <Icon name="star" type="icon" size={15} color={colors.white} style={styles.icon} />
          <Text style={styles.titleButton}>{restaurante.evaluation}</Text>
        </View>
        <Icon name="angle-right" type="icon" size={20} color={colors.dark} style={styles.icon} />
      </View>
    </TouchableOpacity>
);
}
RestauranteItem.propTypes = {
  restaurante: PropTypes.shape({
    avatar_url: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    time_medium: PropTypes.string,
    value_min_max: PropTypes.string,
    value_delivery: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
}

export default RestauranteItem;
