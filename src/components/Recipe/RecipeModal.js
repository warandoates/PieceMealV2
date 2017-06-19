import React, { Component } from 'react';
import { Image, Modal, View} from 'react-native';
import { Button, H3, Badge, Content, Card, CardItem, Icon, Text, Body, Spinner } from 'native-base';
import RecipeSteps from './RecipeSteps';
import RecipeIngredients from './RecipeIngredients';
import Fab from './Fab';

const badgeStyle = { marginLeft: 5, marginRight: 5, margin: 5 };
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
            <CardItem header style={{ alignSelf: 'center' }}>
              <Text
                style={{ fontFamily: 'Futura', fontSize: 24, marginTop: 20, paddingTop: 15 }}
              >
                {this.props.name.toUpperCase()}
              </Text>
            </CardItem>

            <CardItem cardBody>
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

            <CardItem cardBody style={{ marginBottom: 25 }}>
                <Text
                  style={{
                  fontFamily: 'Futura',
                  marginLeft: 20,
                  marginRight: 15,
                  marginTop: 15,
                  marginBottom: 10,
                  alignSelf: 'flex-start' }}
                >
                  Cook Time: {this.props.cookTime} mins
                </Text>
                <Text
                  style={{
                  fontFamily: 'Futura',
                  marginLeft: 20,
                  marginRight: 15,
                  marginTop: 15,
                  marginBottom: 10,
                  alignSelf: 'flex-end' }}
                >
                  Prep Time: {this.props.prepTime} mins
                </Text>
            </CardItem>

            <H3 style={{ fontFamily: 'Futura', alignSelf: 'center' }}>Ingredients:</H3>
            <CardItem cardBody>
              {!this.props.recipe ?
                <Spinner /> :
                <RecipeIngredients ingredients={this.props.recipe.ingredients} />
              }
            </CardItem>

            <H3 style={{ fontFamily: 'Futura', alignSelf: 'center' }}>Instructions:</H3>
            <CardItem cardBody>
              {!this.props.recipe ?
                <Spinner /> :
                <RecipeSteps instructions={this.props.recipe.instructions} />
              }
            </CardItem>

            <H3 style={{ fontFamily: 'Futura', alignSelf: 'center' }}>Notes:</H3>
            <CardItem footer style={{ paddingBottom: 25 }}>
                <Text style={{ fontFamily: 'Futura' }} note>{this.props.notes}</Text>
            </CardItem>

            <CardItem
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                alignItems: 'stretch',
                flex: 2 }}
            >
            { this.props.tags.map((t, i) => {
              return (
                <Badge style={badgeStyle} key={i}><Text>{t.tag_text}</Text></Badge>
              );
            }) }
            </CardItem>
            <Button
              icon
              style={{ alignSelf: 'flex-end', marginTop: 10, marginRight: 10 }}
              onPress={() => { this.props.setModalVisible(!this.props.visible); }}
            >
              <Icon name='close' />
            </Button>
          </Content>
        </Modal>
      </Content>
    );
  }
}
