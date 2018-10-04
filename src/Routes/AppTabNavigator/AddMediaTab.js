import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/RNVectorIconsManager';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Header, Body, Container, Left, Right } from 'native-base'

class AddMediaTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="plus-square" size={20} type="icon" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            {/* <Icon name="search" type="icon" size={15} style={{ paddingLeft: 10 }} /> */}
          </Left>
          <Body><Text>Delivery</Text></Body>
          {/* <Right></Right> */}
        </Header>
        <Text>AddMediaTab</Text>
      </Container>
    )
  }
}

export default AddMediaTab;
