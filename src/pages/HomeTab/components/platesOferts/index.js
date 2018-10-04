import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Pratos from './components/pratosItem/index'

const PlatesOferts = ({ pratos }) => {
  console.tron.log(pratos)
  return (
    <View >
      {
        <FlatList
          horizontal={true}
          data={pratos.pratos}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Pratos pratoItem={item} />}
        />
      }
    </View>
  )
}
PlatesOferts.propType = {
  pratos: PropTypes.shape({
    pratos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })).isRequired,
  }).isRequired,
}

export default PlatesOferts;
