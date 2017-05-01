import React, { Component } from 'react';
import { Container, Content, Header, Icon, ScrollableTab, Tab, Tabs } from 'native-base';
import Tab1 from '../components/Profile';
import Tab2 from '../components/Charts';
import FavoriteRecipes from '../components/FavoriteRecipes';

export default class TableExample extends Component {
  render() {
    return (
      <Container>
       <Header hasTabs />
       <Tabs renderTabBar={() => <ScrollableTab />}>
         <Tab heading="Profile">
             <Tab1 />
         </Tab>
         <Tab heading="Statistics">
             <Tab2 />
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
