import { Card, CardItem, Container, Content, Icon, Right, Text, Thumbnail, View } from 'native-base';
import React, { Component } from 'react';
import { ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getFavoriteRecipes } from '../actions/recipes';
import bruscetta from '../assets/food/Bruscetta.jpg';
import iceCream from '../assets/food/ice-cream.jpg';
import pepperBeef from '../assets/food/Pepper Beef.jpg';
import RecipeModal from '../components/RecipeModal';

// const cards = [
//     {
//         text: 'Card One',
//         name: 'One',
//         image: require('../assets/space_rockets.jpg'),
//     }
// ];

const images = [iceCream, bruscetta, pepperBeef];

class FavoriteRecipes extends Component {
	loadDataSource() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
		});

		this.dataSource = ds.cloneWithRows(this.props.recipes);
	}

	state = {
		modalVisible: false,
		name: '',
		description: '',
		notes: '',
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	// I would probably make each Row it's own component
	renderRow(rowData) {
		console.log(rowData);
		return (
			<Card>
				<TouchableOpacity
					onPress={() => {
						this.state.name = rowData.name;
						this.state.description = rowData.description;
						this.state.notes = rowData.notes;
						this.state.image = images[rowData.id - 1];
						this.setModalVisible(true);
					}}
				>
					<CardItem>
						{/* <Icon active name="logo-googleplus" /> */}
						<Thumbnail source={images[rowData.id - 1]}/>
						<Text style={{ alignSelf: 'center', marginLeft: 25 }}>{ rowData.name }</Text>
						<Right>
							<Icon name="arrow-forward"/>
						</Right>
					</CardItem>
				</TouchableOpacity>
			</Card>
		);
	}

	render() {
		this.loadDataSource();

		return (
			<Container>
				<Content>
					<RecipeModal
						visible={this.state.modalVisible}
						setModalVisible={this.setModalVisible.bind(this)}
						name={this.state.name}
						description={this.state.description}
						notes={this.state.notes}
						image={this.state.image}
					/>
					<View>
						<ListView
							dataSource={this.dataSource}
							renderRow={this.renderRow.bind(this)}
							// enableEmptySections={true}
						/>
					</View>
				</Content>
			</Container>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	getFavRecipes: () => {
		dispatch(getFavoriteRecipes());
	},
});

const mapStateToProps = (state) => ({
	recipes: state.clientReducer.client.recipes,
	isFetching: state.clientReducer.loading,
	user: state.loginReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteRecipes);
