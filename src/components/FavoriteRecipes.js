import React, { Component } from 'react';
import { ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Icon, View, Card, CardItem, Thumbnail, Text, Right } from 'native-base';
import { getFavoriteRecipes } from '../actions/recipes';
import RecipeModal from '../components/RecipeModal';
import iceCream from '../assets/food/ice-cream.jpg';

// const cards = [
//     {
//         text: 'Card One',
//         name: 'One',
//         image: require('../assets/space_rockets.jpg'),
//     }
// ];

class FavoriteRecipes extends Component {
  loadDataSource() {
       const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
       });

       this.dataSource = ds.cloneWithRows(this.props.recipes);
   }

  state = {
    modalVisible: false,
    name: '',
    description: ''
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderRow(rowData) {
    return (
        <Card>
          <TouchableOpacity onPress={() => {
            this.state.name = rowData.name;
            this.state.description = rowData.description;
            this.setModalVisible(true);
          }}>
            <CardItem>
              {/* <Icon active name="logo-googleplus" /> */}
              <Thumbnail source={iceCream} />
              <Text style={{ alignSelf: 'center', marginLeft: 25 }}>{ rowData.name }</Text>
              <Right>
              <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </TouchableOpacity>
        </Card>
    );
  }

  render() {
    this.loadDataSource();

        return (
            <Container>
              <RecipeModal
                visible={this.state.modalVisible}
                setModalVisible={this.setModalVisible.bind(this)}
                name={this.state.name}
                description={this.state.description}
              />
                <View>
                  <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    // enableEmptySections={true}
                  />
                </View>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFavRecipes: () => {
      dispatch(getFavoriteRecipes());
    }
  };
};

const mapStateToProps = (state) => {
    return {
      recipes: state.clientReducer.client.recipes,
      isFetching: state.clientReducer.loading,
      user: state.loginReducer.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteRecipes);
