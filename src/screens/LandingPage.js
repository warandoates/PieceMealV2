import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Icon, Input, InputGroup, Button } from 'native-base';
import SearchResults from '../components/SearchResults';
import { createSearchAction } from '../actions/index';

export class LandingPage extends Component {
 static navigationOptions = {

      headerTitleStyle: {
   /* this only styles the title/text (font, color etc.)  */
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

 render() {
   return (
    <Container>
       <InputGroup borderType="regular">
         <Icon name="md-search" style={{ color: '#68BAA7' }}/>
         <Input
           placeholder="Search"
           onChangeText={(newText) => this.props.searchRecipe(newText)}
         />
         {/* <Button transparent>
             <Icon name='ios-options' style={{ color: '#68BAA7' }} />
         </Button> */}
       </InputGroup>
       <SearchResults navigation={this.props.navigation}
                      recipes={this.props.recipes}
                      ingredients={this.props.ingredients}
                      ingredients={this.props.ingredients}
       />
     </Container>
   );
 }
}


const mapStateToPropsLandingPage = (state) => {
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
