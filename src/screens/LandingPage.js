import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Icon, Input, InputGroup, Text } from 'native-base';
import CheckBox from 'react-native-checkbox';
import SearchResults from '../components/SearchResults';
import { createSearchAction } from '../actions/index';

export class LandingPage extends Component {
 static navigationOptions = {

      headerTitleStyle: {
   /* this only styles the title/text (font, color etc.)  */
        color: '#373737'
      },
      headerStyle: {
   /* this will style the header, but does NOT change the text */
        backgroundColor: '#68BAA7'
      },
      title: 'Piece Meal',
      tabBarIcon: () => (
        <Icon name='home' style={{ color: '#68BAA7' }} />
    )
 };

 componentDidMount() {
   this.props.searchRecipe('');
 }

 isRestrictedIngredient(ingredientId) {
   return this.props.restrictions.some((restriction) => {
     return (ingredientId === restriction.id);
   });
 }

 recipeIsSafe(recipe) {
   return !recipe.ingredients.some((i) => this.isRestrictedIngredient(i.id));
 }

 render() {
   let filteredRecipes = this.props.recipes;
   let filteredIngredients = this.props.ingredients;
   if (this.props.filterRestricted) {
     filteredRecipes = filteredRecipes.filter(
       this.recipeIsSafe.bind(this));
     filteredIngredients = filteredIngredients.filter(
       (i) => !this.isRestrictedIngredient(i.id));
   }

   return (
    <Container>
       <InputGroup>
         <Icon name="md-search" style={{ color: '#68BAA7' }} />
         <Input
           placeholder="Search"
           onChangeText={(newText) => this.props.searchRecipe(newText)}
         />
       </InputGroup>
       { this.props.restrictions.length > 0 && (
         <InputGroup>
           <CheckBox
             label="Don't show unsafe recipes and ingredients"
             checked={this.props.filterRestricted}
             onChange={this.props.setFilterRestricted}
           />
        </InputGroup>)
      }

       <SearchResults
         navigation={this.props.navigation}
         recipes={filteredRecipes}
         ingredients={filteredIngredients}
       />
     </Container>
   );
 }
}


const mapStateToPropsLandingPage = (state) => {
 return {
   recipes: state.searchRecipe.recipes,
   ingredients: state.searchRecipe.ingredients,
   filterRestricted: state.searchRecipe.filterRestricted,
   restrictions: state.clientReducer.client.restrictions,
 };
};

const mapDispatchtoPropsLandingPage = (dispatch) => {
 return {
   searchRecipe: (recipes) => {
     dispatch(createSearchAction(recipes));
   },
   setFilterRestricted: (oldValue) => {
     dispatch({ type: 'SET_FILTER_RESTRICTED', newValue: !oldValue });
   }
 };
};

const ConnectedLandingPage = connect(
 mapStateToPropsLandingPage, mapDispatchtoPropsLandingPage)(LandingPage);

export default ConnectedLandingPage;
