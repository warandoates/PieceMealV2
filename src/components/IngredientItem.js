import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Image, LayoutAnimation } from 'react-native';
import { bindActionCreators } from 'redux';
import { CardItem, Button, Text, Badge } from 'native-base';
import { connect } from 'react-redux';
import { selectIngredient } from '../actions';
import { deleteIngredient } from '../actions/addIngredient';

class IngredientItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  tagSplitter() {
    return this.props.rowData.tags.map((tag) => (
      <Badge key={this.props.rowData.id} success style={styles.tagStyle}>
        <Text>
          {tag}
        </Text>
      </Badge>
    ));
  }

  renderDescription() {
    const { rowData, expanded } = this.props;
    if (expanded) {
      return (
        <View>
          <CardItem content style={styles.expandedContainerStyle}>
            {/* <Body> */}
            <Text style={{ flex: 1 }}>
              Description: {rowData.description}
            </Text>
            {/* </Body> */}
          </CardItem>
          <CardItem content style={styles.expandedContainerStyle}>
            <Text style={{ flex: 1 }}>
              Alternatives: {rowData.alternatives}
            </Text>
          </CardItem>

          <CardItem
            cardBody style={styles.expandedContainerStyle}
          >
            <Text style={styles.altNameStyle}>Image:</Text>
            <Image />
          </CardItem>

          <CardItem style={styles.expandedContainerStyle}>
            <Text>Tags: </Text>
            {this.tagSplitter()}
          </CardItem>

          { this.props.user && <CardItem style={styles.expandedContainerStyle}>
            <Button
              onPress={() => this.props.nav.navigation.navigate('EditIngredient', this.props.rowData)}
              small
              style={styles.tagStyle}
              rounded
              warning
            >
              <Text>Edit</Text>
            </Button>
            <Button onPress={() => this.props.deleteIngredient(rowData.id, this.props.user.token)} small style={styles.tagStyle} rounded danger>
              <Text>Delete</Text>
            </Button>
          </CardItem>}
        </View>
      );
    }
  }

  render() {
    // console.log('real props stand up', this.props);
    const { nameStyle, containerStyle } = styles;
    const { id, name } = this.props.rowData;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectIngredient(id)}
      >
        <View key={id}>
          <CardItem style={containerStyle}>
            <Text style={nameStyle}>{name}</Text>
          </CardItem>
          {this.renderDescription()}
        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectIngredient, deleteIngredient }, dispatch);
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedIngredientId === ownProps.rowData.id;
  const user = state.loginReducer.user;

  return { expanded, user };
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  expandedContainerStyle: {
    backgroundColor: '#e5e5e5',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  nameStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  altNameStyle: {
    paddingLeft: 15
  },
  tagStyle: {
    marginRight: 5
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientItem);
