import React, { Component } from 'react';
import { Image, ListView, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Right, Body } from 'native-base';
import space_rockets from '../assets/space_rockets.jpg';
import { getFavoriteRecipes } from '../actions/recipes';
import RecipeModal from '../components/RecipeModal';
require('../assets/space_rockets.jpg')

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


      //  <View>
      //      <DeckSwiper
      //          dataSource={this.props.recipes}
      //          renderItem={item =>
      //              // <Card style={{ elevation: 3 }}>
      //              //     <CardItem>
      //              //         <Left>
      //              //             <Thumbnail source={require('../assets/space_rockets.jpg')} />
      //              //             <Body>
      //              //                 <Text>{item.name}</Text>
      //              //                 <Text note>NativeBase</Text>
      //              //             </Body>
      //              //         </Left>
      //              //     </CardItem>
      //              //     <CardItem cardBody>
      //              //         <Image style={{ resizeMode: 'cover', width: '99%' }} source={require('../assets/space_rockets.jpg')} />
      //              //     </CardItem>
      //              //     <CardItem>
      //              //         <Icon name="heart" style={{ color: '#ED4A6A' }} />
      //              //         <Text>{item.description}</Text>
      //              //     </CardItem>
      //              // </Card>
      //              <Card>
      //                <CardItem>
      //                    {/* <Icon active name="logo-googleplus" /> */}
      //                    <Thumbnail source={require('../assets/space_rockets.jpg')} />
      //                    <Text>{item.name}</Text>
      //                    <Right>
      //                    <Icon name="arrow-forward" />
      //                    </Right>
      //                  </CardItem>
      //              </Card>
      //          }
      //      />
      //  </View>


  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    console.log('this was pressed');
    this.setState({ modalVisible: visible });
  }

  renderRow(rowData) {
    return (
        <Card>
          <TouchableOpacity onPress={() => {
            this.setModalVisible(true)
          }}>
          <CardItem>
              {/* <Icon active name="logo-googleplus" /> */}
              <Thumbnail source={require('../assets/space_rockets.jpg')} />
              <Text style={{ alignSelf: 'center', marginLeft: 25}}>{ rowData.name }</Text>
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
              <RecipeModal visible={this.state.modalVisible} setModalVisible={this.setModalVisible.bind(this)} />
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
