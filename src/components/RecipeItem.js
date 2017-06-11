import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { TouchableWithoutFeedback, View, Image, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Button, Text, Card } from 'native-base';
import { selectRecipe } from '../actions/index';
import { deleteRecipe } from '../actions/addRecipe';

class RecipeItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { rowData, expanded } = this.props;
    if (expanded) {
      return (
        <View>
          <CardItem style={styles.expandedContainerStyle}>
            <Text style={{ flex: 1 }}>
              Description: {rowData.description}
            </Text>
          </CardItem>}
          <CardItem content style={styles.expandedContainerStyle}>
            <Text style={{ flex: 1 }}>
              Instructions: {rowData.instructions}
            </Text>
          </CardItem>}
          <CardItem
            cardBody style={styles.expandedContainerStyle}
          >
            <Text style={styles.altNameStyle}>Image:</Text>
            <Image />
          </CardItem>
          { this.props.user && <CardItem style={styles.expandedContainerStyle}>
            <Button
              onPress={() => this.props.nav.navigation.navigate('EditRecipe', this.props.rowData)}
              small
              style={styles.tagStyle}
              rounded
              warning
            >
              <Text>Edit</Text>
            </Button>
            <Button onPress={() => this.props.deleteRecipe(rowData.id, this.props.user.token)} small style={styles.tagStyle} rounded danger>
              <Text>Delete</Text>
            </Button>
          </CardItem>}
        </View>
      );
    }
  }

  render() {
    const { nameStyle, containerStyle } = styles;
    const { id, name } = this.props.rowData;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectRecipe(id)}
      >
        <View key={id}>
          <Card>
          <CardItem style={containerStyle}>
            <Text style={nameStyle}>{name}</Text>
          </CardItem>
          </Card>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectRecipe, deleteRecipe }, dispatch);
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedRecipeId === ownProps.rowData.id;
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);
