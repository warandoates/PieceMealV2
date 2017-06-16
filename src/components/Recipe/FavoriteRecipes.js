import React, { Component } from 'react';
import { ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Icon,
    View,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Right } from 'native-base';
import RecipeModal from './RecipeModal';
import iceCream from '../../assets/food/ice-cream.jpg';
import bruscetta from '../../assets/food/Bruscetta.jpg';
import pepperBeef from '../../assets/food/Pepper-Beef.jpg';

const images = [iceCream, bruscetta, pepperBeef];

class FavoriteRecipes extends Component {

  state = {
      modalVisible: false,
      name: '',
      description: '',
      notes: ''
  }

  setModalVisible(visible) {
      this.setState({ modalVisible: visible });
  }

  loadDataSource() {
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.recipes);
   }

  renderRow(rowData) {
      return (
          <Card>
              <TouchableOpacity
                onPress={() => {
                this.state.name = rowData.name;
                this.state.description = rowData.description;
                this.state.notes = rowData.notes;
                this.state.image = images[rowData.id - 1];
                this.state.recipe = rowData;
                this.setModalVisible(true);
              }}
              >
                  <CardItem>
                      <Thumbnail source={images[rowData.id - 1]} />
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
                  <Content>
                      <RecipeModal
                        visible={this.state.modalVisible}
                        setModalVisible={this.setModalVisible.bind(this)}
                        name={this.state.name}
                        description={this.state.description}
                        notes={this.state.notes}
                        image={this.state.image}
                        recipe={this.state.recipe}
                        loading={this.props.isFetching}
                      />
                      <View>
                        <ListView
                          dataSource={this.dataSource}
                          renderRow={this.renderRow.bind(this)}
                          enableEmptySections
                        />
                      </View>
                  </Content>
              </Container>
          );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.clientReducer.client.recipes,
        isFetching: state.clientReducer.loading,
        user: state.loginReducer.user
    };
};

export default connect(mapStateToProps)(FavoriteRecipes);
