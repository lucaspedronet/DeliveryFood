import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { Header, Body, Container, Left, Right, Button } from 'native-base'
import styles from './styles'

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
            <Icon name="user-plus" size={20} type="icon" color="#FFF" />
          </Left>
          <Body><Text>Lucaspedro_net43</Text></Body>
          <Right><EntypoIcon name="menu" size={20} type="icon" color="#FFF" /></Right>
        </Header>
        <View>
          <ImageBackground style={styles.thumbnailBackground} source={{ uri: 'https://z-p3-scontent.fbsb13-1.fna.fbcdn.net/v/t1.0-9/16708216_1148845738557325_1314519632520044300_n.jpg?_nc_cat=0&oh=6d63f7054a0c1f138b85c68b69afb551&oe=5C2B5122' }}>
            <View style={styles.containerThumbnail}>
              <View style={styles.thumbnailAvatarContainer}>
                <Image style={styles.thumbnailAvatar} source={{ uri: 'https://z-p3-scontent.fbsb13-1.fna.fbcdn.net/v/t1.0-9/15319131_1316360678415183_1904579198401624685_n.png?_nc_cat=0&oh=00188588ceba9e797de09836f11c664c&oe=5C00C97A' }} />
              </View>
              <View style={styles.containerUser} >
                <Text style={styles.name} >Lucas Pedro Lopes</Text>
                <Text style={styles.nameUser} >Lucaspedro_net43</Text>
              </View>
              <View style={styles.containerItems} >
                <View style={styles.items} >
                  <Text style={styles.titleNumber} >103</Text>
                  <Text style={styles.title} >Pratos</Text>
                </View>
                <View style={styles.items} >
                  <Text style={styles.titleNumber} >2.871</Text>
                  <Text style={styles.title} >Seguidores</Text>
                </View>
                <View style={styles.items} >
                  <Text style={styles.titleNumber} >87</Text>
                  <Text style={styles.title} >Roler Food</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View>
            <View>
              <Text>Porto Nacional - TO</Text>
              <Text>Vem comigo no caminho te explico!</Text>
            </View>
          </View>
          <View style={styles.containerMenu} >
            <View style={styles.containerButton} >
              <Button style={styles.buttonMenu} transparent >
                <Icon style={styles.iconMenu} name="print" size={15} />
              </Button>
            </View>
            <View style={styles.containerButton} >
              <Button style={styles.buttonMenu} transparent>
                <Icon name="eye-slash" size={15} />
              </Button>
            </View>
            <View style={styles.containerButton} >
              <Button style={styles.buttonMenu} transparent>
                <Icon name="comments" size={15} />
              </Button>
            </View>
          </View>
        </View>
      </Container>
    )
  }
}

export default ProfileTab;
