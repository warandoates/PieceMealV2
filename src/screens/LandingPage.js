import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Icon, Input, InputGroup, Button } from 'native-base';
import SearchResults from '../components/SearchResults';
import { createSearchAction } from '../actions/index';

class LandingPage extends Component {
 // headerText="Piece Meal"
 static navigationOptions = ({ navigation }) => ({
     title: 'Piece Meal',
     tabBarIcon: ({ tintColor }) => (
      <Icon name='home' />
     )
 });

 componentDidMount() {
   this.props.searchRecipe('');
 }

 render() {
   return (
    <Container>
       <InputGroup borderType="regular">
         <Icon name="md-search" />
         <Input
           placeholder="Search"
           onChangeText={(newText) => this.props.searchRecipe(newText)}
         />
         <Button transparent>
             <Icon name='ios-options' />
         </Button>
       </InputGroup>
       <SearchResults recipes={this.props.recipes} ingredients={this.props.ingredients} />
     </Container>
   );
 }
}


const mapStateToPropsLandingPage = (state) => {
 //map state to props to the Landing Page component above
 return {
   recipes: state.searchRecipe.recipes,
   ingredients: state.searchRecipe.ingredients

 };
};

const mapDispatchtoPropsLandingPage = (dispatch) => {
 return {
   searchRecipe: (recipes) => {
     dispatch(createSearchAction(recipes));
   }
 };
};

const ConnectedLandingPage = connect(
 mapStateToPropsLandingPage, mapDispatchtoPropsLandingPage)(LandingPage);

export default ConnectedLandingPage;
