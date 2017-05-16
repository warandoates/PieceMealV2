import { Button, Text } from 'native-base';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { getRecipes } from '../actions/index';


//This Get Recipe Button should be the same component as the GetIngredient Button. Reusability of components
//is a huge part of React. Simply create a single component that takes in a text property and a onPress function.
//This should also be a functional component.
class GetRecipeButton extends Component {
	render() {
		return (
			<Button
				onPress={this.props.getAllRecipes}
				style={styles.buttonStyle} iconLeft
			>
				<Icon name='food-variant' size={35}/>
				<Text>See All Recipes</Text>
			</Button>
		);
	}
}
//Example of Function reusable component:
//const GetRecipeButton = ({ text, onPressFunction }) => (
//	<Button
//onPress={onPressFunction}
//	        style={styles.buttonStyle} iconLeft
//	>
//		<Icon name='food-variant' size={35} />
//		<Text>{text}</Text>
//	</Button>
//);


//Unnecessary function. Look at GetIngredientsRecipe component for example of passing action creators to connect
const mapDispatchToProps = (dispatch) => ({
	getAllRecipes: () => {
		dispatch(getRecipes());
	},
});

const styles = {
	buttonStyle: {
		marginLeft: 5,
		marginRight: 5,
	},
};

export default connect(null, mapDispatchToProps)(GetRecipeButton);
