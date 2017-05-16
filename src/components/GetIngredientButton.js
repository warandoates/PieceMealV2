import { Button, Text } from 'native-base';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { getIngredients } from '../actions/index';


//This component should be a functional component
class GetIngredientsButton extends Component {
	render() {
		return (
			<Button onPress={this.props.getAllIngredients} style={styles.buttonStyle} iconLeft>
				<Icon name='food-variant' size={35} />
				<Text>See All Ingredients</Text>
			</Button>
		);
	}
}
// Example of Functional style of this component
//const GetIngredientsButton = ({ getAllIngredients }) => (
//	<Button onPress={getAllIngredients} style={styles.buttonStyle} iconLeft>
//		<Icon name='food-variant' size={35}/>
//		<Text>See All Ingredients</Text>
//	</Button>
//)

// Unnecessary function. See below comment for proper example of implementation.
const mapDispatchToProps = (dispatch) => ({
	getAllIngredients: () => {
		dispatch(getIngredients());
	},
});

const styles = {
	buttonStyle: {
		marginLeft: 5,
		marginRight: 5,
	},
};

//export default connect(null, { getIngredients })(GetIngredientsButton); <--- Preferred convention for dispatch
export default connect(null, mapDispatchToProps)(GetIngredientsButton);
