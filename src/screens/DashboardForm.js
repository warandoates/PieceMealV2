import React, { Component } from 'react';
import { Container, Content, Header, Icon, ScrollableTab, Tab, Tabs } from 'native-base';
import Profile from '../components/Profile';
import Charts from '../components/Charts';
import FavoriteRecipes from '../components/FavoriteRecipes';

export default class TableExample extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => (
       <Icon name='paper' />
      )
    };
  };

  render() {
    return (
      <Container>
       <Header hasTabs />
       <Tabs renderTabBar={() => <ScrollableTab />}>
         <Tab heading="Profile">
             <Profile />
         </Tab>
         <Tab heading="Statistics">
             <Charts />
         </Tab>
         <Tab heading="Ingredients">
             <FavoriteRecipes />
         </Tab>
         <Tab heading="Recipes">
             {/* <Tab2 /> */}
         </Tab>
         <Tab heading="Friends">
             {/* <Tab2 /> */}
         </Tab>
       </Tabs>
       </Container>
     );
  }
}
