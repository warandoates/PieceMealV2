import { Button, Icon, Spinner } from 'native-base';
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import { getRecipes } from '../actions/index';
import RecipeItem from '../components/RecipeItem';

const MyButton = (props) => (
	<Button
		onPress={() => {
			if (props.loggedIn) {
				props.navigation.navigate('AddRecipe');
			} else {
				props.navigation.navigate('logIn');
			}
		}}
		transparent
	>
		<Icon name="add" size={35}/>
	</Button>
);

const ConnectedMyButton = connect((state) => ({
	loggedIn: state.loginReducer.user != null,
}))(MyButton);

class RecipeResultsList extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Recipes',
		headerRight: <ConnectedMyButton navigation={navigation}/>,
		tabBarIcon: ({ tintColor }) => (
			<Icon name='restaurant'/>
		),
		mode: 'modal',
	});

	componentWillMount() {
		return this.props.getAllRecipes();
	}

	loadDataSource() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
		});
		this.dataSource = ds.cloneWithRows(this.props.list);
	}

	renderRow(rowData) {
		return <RecipeItem rowData={rowData}/>;
	}

	render() {
		this.loadDataSource();
		return (
			<View style={{ flex: 1 }}>
				{this.props.isFetching && <Spinner color="green"/> }
				{this.props.list.length > 1 &&
				<ListView
					dataSource={this.dataSource}
					renderRow={this.renderRow}
					enableEmptySections
				/>
				}
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	getAllRecipes: () => {
		dispatch(getRecipes());
	},
});

const mapStateToProps = (state, ownProps) => ({
	list: state.recipeResults.recipes,
	isFetching: state.recipeResults.isFetching,
	user: state.loginReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeResultsList);
