import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

class MessageScreen extends Component {
  static navigationOptions = ({ navigation: { state: { params: { restaurante }}} }) => ({
    title: `${restaurante.title}`,
    headerBackTitle: 'Funcionou',
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

  state = {
    message: '',
    batepapo: []
  }

  enviar() {
    const { message, batepapo } = this.state;
    batepapo.push(message)
    return (
      <Text> {batepapo} </Text>
    )
  }

  render() {
    // const { restaurante } = this.props.navigation.state.params;
    console.tron.log(this.props)
    return (
      <View style={styles.container} >
        <ScrollView style={styles.patepapo} >
          {this.enviar()}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton} >
            <Icon name="plus" size={20} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            multiline
            placeholderTextColor="#333"
            underlineColorAndroid="transparent"
            placeholder="Digite sua dúvida"
            value={this.state.message}
            onChangeText={message => this.setState({ message })}
            returnKeyType="send"
            onSubmitEditing={this.enviar}
            keyboardType="name-phone-pad"
          />
          <TouchableOpacity style={styles.iconButton} >
            <Icon name="send" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default MessageScreen;
