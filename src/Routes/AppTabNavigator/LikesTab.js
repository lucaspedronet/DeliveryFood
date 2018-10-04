import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Header, Container, Left, Right, Body } from 'native-base'

class LikesTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="heart" size={20} type="icon" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View>
        <Header>
          <Left>
            <Icon name="search" size={15} />
          </Left>
          <Body>
            <Text>LikesTab</Text>
          </Body>
        </Header>
        <Text>LikesTab</Text>
      </View>
    )
  }
}

export default LikesTab;


