import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React, { Component } from 'react';


//Component should be a functional component.
//This would be a simple component to change from IngredientHeader to just Header. and just pass it two Props

//<Header title={'Ingredients'} navigation={navigationHero.navigation.navigate('Home')} />

//This way in the future if you have to have a different header. You don't need to make an entirely new component.
class IngredientHeader extends Component {

	render() {
		return (
			<Header>
				<Left />
				<Body>
				<Title>Ingredients</Title>
				</Body>
				<Right>
					<Button onPress={() => this.props.navigationHero.navigation.navigate('Home')} transparent>
						<Icon name="add" size={35}/>
					</Button>
				</Right>
			</Header>
		);
	}
}

// const navigateAction = NavigationActions.navigate({
//   routeName: 'home'
// });

export default IngredientHeader;
// onPress={this.props.navigation.dispatch(navigateAction)}
