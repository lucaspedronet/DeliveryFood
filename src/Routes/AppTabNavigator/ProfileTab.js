import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { Header, Body, Container, Left, Right } from 'native-base'

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user-circle-o" size={20} type="icon" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="user-plus" size={15} type="icon" />
          </Left>
          <Body><Text>Delivery</Text></Body>
          <Right><EntypoIcon name="back-in-time" size={15} type="icon" /></Right>
        </Header>
        <Text>ProfileTab</Text>
      </Container>
    )
  }
}

export default ProfileTab;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

