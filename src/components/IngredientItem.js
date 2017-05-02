import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Image, LayoutAnimation } from 'react-native';
import { CardItem, Text, Badge, Body, Container } from 'native-base';
import { connect } from 'react-redux';
import { selectIngredient } from '../actions/index';

class IngredientItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  tagSplitter() {
    return this.props.rowData.tags.map((tag) => (
      <Badge success style={styles.tagStyle}>
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

          <CardItem cardBody style={styles.expandedContainerStyle}>
            <Text style={styles.altNameStyle}>Image:</Text>
            <Image />
          </CardItem>
          <CardItem style={styles.expandedContainerStyle}>
            <Text>Tags:  </Text>
            {this.tagSplitter()}
          </CardItem>
        </View>
      );
    }
  }

  render() {
    const { nameStyle, containerStyle } = styles;
    const { id, name } = this.props.rowData;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectIngredientItem(id)}
      >
        <View>
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
  return {
    selectIngredientItem: (ingredient) => {
      dispatch(selectIngredient(ingredient));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedIngredientId === ownProps.rowData.id;

  return { expanded };
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
