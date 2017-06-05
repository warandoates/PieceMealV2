import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Icon,
  ScrollableTab,
  Tab,
  Tabs
} from 'native-base';
import Profile from '../components/Profile';
import Charts from '../components/Charts';
import FavoriteRecipes from '../components/Recipe/FavoriteRecipes';

export default class TableExample extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => (<Icon name='paper' />)
    };
  };

  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        {/* <Tabs renderTabBar={() => <ScrollableTab />}> */}
        <Tabs locked>
          <Tab heading="Profile" textStyle={{ fontSize: 12 }} activeTextStyle={{ fontSize: 12 }}>
            <Profile />
          </Tab>
          <Tab heading="Statistics" textStyle={{ fontSize: 12 }} activeTextStyle={{ fontSize: 12 }}>
            <Charts />
          </Tab>
          <Tab heading="Ingredients" textStyle={{ fontSize: 11 }} activeTextStyle={{ fontSize: 10 }}>
            {/* <FavoriteIngredients /> */}
          </Tab>
          <Tab heading="Recipes" textStyle={{ fontSize: 12 }} activeTextStyle={{ fontSize: 12 }}>
            {/* <Tab2 /> */}
            <FavoriteRecipes />
          </Tab>
          <Tab heading="Friends" textStyle={{ fontSize: 12 }} activeTextStyle={{ fontSize: 12 }}>
            {/* <Tab2 /> */}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
