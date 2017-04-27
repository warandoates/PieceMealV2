import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardItem, Text } from 'native-base';
import { connect } from 'react-redux';
import { selectIngredient } from '../actions/index';

class IngredientItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { rowData, expanded } = this.props;
    if (expanded) {
      return (
        <CardItem style={styles.containerStyle}>
          <Text style={{ flex: 1 }}>{rowData.tags}</Text>
        </CardItem>
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
  nameStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientItem);
