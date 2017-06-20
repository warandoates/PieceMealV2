import React, { Component } from 'react';
import {
  Container,
  Icon,
  Tab,
  Tabs
} from 'native-base';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import Charts from '../components/Charts';
import FavoriteRecipes from '../components/Recipe/FavoriteRecipes';

export class TableExample extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
   /* this only styles the title/text (font, color etc.)  */
      },
      headerStyle: {
   /* this will style the header, but does NOT change the text */
        backgroundColor: '#68BAA7'
      },
      tabBarIcon: ({ tintColor }) => (<Icon style={{ color: '#68BAA7' }} name='paper' />)
    };
  };

  // componentWillUpdate() {
  //   if (!this.props.user) {
  //     return this.props.navigation.navigate('logIn');
  //   }
  // }

  render() {
    console.log('this is props', this.props);
    const { user } = this.props;
    return (
       <Container>
        {/* <Header hasTabs /> */}
        {/* <Tabs renderTabBar={() => <ScrollableTab />}> */}
        {user && <Tabs locked>
          <Tab heading="Profile" textStyle={{ fontSize: 12 }} activeTextStyle={{ fontSize: 12 }}>
            <Profile />
          </Tab>
          {/* <Tab heading="Statistics" textStyle={{ fontSize: 12 }} activeTextStyle={{ fontSize: 12 }}>
            <Charts />
          </Tab> */}
          <Tab heading="Ingredients" textStyle={{ fontSize: 11 }} activeTextStyle={{ fontSize: 10 }}>
            {/* <FavoriteIngredients /> */}
          </Tab>
          <Tab heading="Recipes" textStyle={{ fontSize: 12 }} activeTextStyle={{ fontSize: 12 }}>
            {/* <Tab2 /> */}
            <FavoriteRecipes />
          </Tab>
          {/* <Tab heading="Friends" textStyle={{ fontSize: 12 }} activeTextStyle={{ fontSize: 12 }}>
          </Tab> */}
        </Tabs> }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      user: state.loginReducer.user || state.signupReducer.user
    };
};

export default connect(mapStateToProps)(TableExample);
