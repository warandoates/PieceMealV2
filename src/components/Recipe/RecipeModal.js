import React, { Component } from 'react';
import { Image, Modal } from 'react-native';
import { H3, Badge, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';
import RecipeSteps from './RecipeSteps';
import Fab from './Fab';

const badgeStyle = { backgroundColor: 'black' };
const textStyle = { color: 'white' };

export default class ModalExample extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Content style={{ marginTop: 22 }}>
        <Modal
          animationType={'slide'}
          transparent={false}
          // visible={this.state.modalVisible}
          visible={this.props.visible}
          onRequestClose={() => { alert('Modal has been closed.'); }}
        >
        <Content>
          <Card style={{ flex: 1 }}>

            <CardItem header style={{ alignSelf: 'center' }}>
              <Text
                style={{ fontFamily: 'Futura', fontSize: 24, marginTop: 20, paddingTop: 15 }}
              >
                {this.props.name.toUpperCase()}
              </Text>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{ resizeMode: 'contain', width: 340, height: 200 }}
                  source={this.props.image}
                />
                <Text
                  note
                  style={{
                  fontFamily: 'Futura',
                  marginLeft: 20,
                  marginRight: 15,
                  marginTop: 15,
                  marginBottom: 10,
                  alignSelf: 'center' }}
                >
                  "{this.props.description}"
                </Text>
              </Body>
            </CardItem>
              <H3 style={{ fontFamily: 'Futura', alignSelf: 'center' }}>Instructions:</H3>
            <CardItem>
              {!this.props.recipe ?
                <Spinner /> :
                <RecipeSteps instructions={this.props.recipe.instructions} />
              }
            </CardItem>
            <CardItem footer style={{ paddingBottom: 25 }}>
                <Text style={{ fontFamily: 'Futura' }} note>{this.props.notes}</Text>
            </CardItem>
            <CardItem footer>
              <Badge style={badgeStyle}>
                <Text style={textStyle}>vegetarian</Text>
              </Badge>
              <Badge style={badgeStyle}>
                <Text style={textStyle}>vegan</Text>
              </Badge>
              <Badge style={badgeStyle}>
                <Text style={textStyle}>dairy</Text>
              </Badge>
            </CardItem>
            </Card>

              <Fab onClose={() => { this.props.setModalVisible(!this.props.visible); }} />
          </Content>
        </Modal>
      </Content>
    );
  }
}
