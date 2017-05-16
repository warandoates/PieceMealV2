import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React, { Component } from 'react';
// import { NavigationActions } from 'react-navigation';


//You have a component named IngredientHeader in a file named RecipeHeader???
//You also have another component already named IngredientHeader.
//See other component for more comments about the structure of this code.
class IngredientHeader extends Component {

	render() {
		return (
			<Header>
				<Left />
				<Body>
				<Title>Recipes</Title>
				</Body>
				<Right>
					<Button
						onPress={() => this.props.navigationHero.navigation.navigate('Home')}
						transparent
					>
						<Icon name="add" size={35}/>
					</Button>
				</Right>
			</Header>
		);
	}
}

export default IngredientHeader;
