import { Button, Container, Icon, Input, InputGroup } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSearchAction } from '../actions/index';
import SearchResults from '../components/SearchResults';

class LandingPage extends Component {
	// headerText="Piece Meal"
	static navigationOptions = ({ navigation }) => ({
		title: 'Piece Meal',
		tabBarIcon: ({ tintColor }) => (
			<Icon name='home'/>
		),
	});

	componentWillMount() {
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
				<SearchResults recipes={this.props.recipes} ingredients={this.props.ingredients}/>
			</Container>
		);
	}
}


const mapStateToPropsLandingPage = (state) =>
	//map state to props to the Landing Page component above
	({
		recipes: state.searchRecipe.recipes,
		ingredients: state.searchRecipe.ingredients,

	});

const mapDispatchtoPropsLandingPage = (dispatch) => ({
	searchRecipe: (recipes) => {
		dispatch(createSearchAction(recipes));
	},
});

const ConnectedLandingPage = connect(
	mapStateToPropsLandingPage, mapDispatchtoPropsLandingPage)(LandingPage);

export default ConnectedLandingPage;
