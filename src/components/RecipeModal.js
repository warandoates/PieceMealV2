import React, { Component } from 'react';
// import { Body, Button, Icon, Image, View, Card, CardItem, Thumbnail, Text, Left } from 'native-base';
import { Image, Modal, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
import space_rockets from '../assets/space_rockets.jpg';
import sliders from '../assets/food/sliders.jpg';

export default class ModalExample extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType={"slide"}
          transparent={false}
          // visible={this.state.modalVisible}
          visible={this.props.visible}
          onRequestClose={() => { alert("Modal has been closed."); }}
          >
         <View style={{ marginTop: 22 }}>
          <View>
            <Card style={{ flex: 0 }}>
              <CardItem>
                  <Left>
                      <Thumbnail source={this.props.image} />
                      <Body>
                          <Text>{this.props.name}</Text>
                          <Text note>April 15, 2016</Text>
                      </Body>
                  </Left>
              </CardItem>
              <CardItem>
                  <Body>
                      <Image style={{ flex: 1, height: 150, width: 150 }}
                        source={space_rockets}
                        resizeMode="contain" />
                      <Text>
                          {this.props.description}
                      </Text>
                      <Button transparent textStyle={{color: '#87838B'}}>
                          <Text>1,926 stars</Text>
                      </Button>
                  </Body>
              </CardItem>

              <TouchableHighlight onPress={() => {
                this.props.setModalVisible(!this.props.visible)
              }}>
              <Button onPress={() => {
                this.props.setModalVisible(!this.props.visible)
              }}><Text>Close</Text></Button>
             </TouchableHighlight>
             </Card>

          </View>
         </View>
        </Modal>
      </View>
    );
  }
}
