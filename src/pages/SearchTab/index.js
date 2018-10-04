import React, { Component } from 'react'
import { Container, Text, Body, Header, Left, Right, Thumbnail } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

class SearchTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" size={20} type="icon" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="search" type="icon" size={15} style={{ paddingLeft: 10 }} />
          </Left>
          <Body><Text>Delivery</Text></Body>
          <Right></Right>
        </Header>
        <Text>SearchTab</Text>
      </Container>
    )
  }
}

export default SearchTab;
