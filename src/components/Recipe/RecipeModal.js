import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Content } from 'native-base';
import RecipeView from './RecipeView';

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
        <RecipeView {...this.props} />
        </Modal>
      </Content>
    );
  }
}
