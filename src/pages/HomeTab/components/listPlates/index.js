import React from 'react'
import { View, FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'
import PlateItem from 'components/plateItem'

const ListPlates = ({ plates }) => {
//   console.tron.log(plates)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        //   style={{ height: 400 }}
        horizontal={true}
        data={plates}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <PlateItem plates={item} />}
      />
    </View>
  )
}

ListPlates.protTypes = {
  platesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
}
export default ListPlates;
