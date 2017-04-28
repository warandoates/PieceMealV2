import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardItem, Text, Badge } from 'native-base';
import { connect } from 'react-redux';
import { selectIngredient } from '../actions/index';

class IngredientItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  tagSplitter() {
    return this.props.rowData.tags.map((tag) => (
      <Badge>
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
          {!!rowData.description &&
          <CardItem style={styles.expandedContainerStyle}>
            <Text style={{ flex: 1 }}>
              {rowData.description}
            </Text>
          </CardItem>}
          {!!rowData.image_url &&
          <CardItem style={styles.expandedContainerStyle}>
            <img alt='nope'src={rowData.image_url} style={{ flex: 1 }} />
          </CardItem>}
          <CardItem style={styles.expandedContainerStyle}>
            {rowData.tags.length > 0 && this.tagSplitter()}
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientItem);
