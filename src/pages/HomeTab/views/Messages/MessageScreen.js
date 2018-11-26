import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

class MessageScreen extends Component {
  static navigationOptions = ({ navigation: { state: { params: { restaurante }}} }) => ({
    title: `${restaurante.title}`,
    headerRight: (
      <TouchableOpacity>
        {/* <Icon type="icon" name="linkedin" style={{ marginRight: 20 }} size={20} /> */}
        <Image
          source={{ uri: restaurante.avatar_url }}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 20 }}
          />
      </TouchableOpacity>
    )
  })

  static propTypes = {
    navigation: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  }

  render() {
    // const { restaurante } = this.props.navigation.state.params;
    console.tron.log(this.props)
    return (
      <View style={styles.container} >
        <Text> MessageScreen </Text>
      </View>
    )
  }
}

export default MessageScreen;
