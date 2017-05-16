import { Badge, Button, CardItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, LayoutAnimation, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIngredients, selectIngredient } from '../actions';
import { deleteIngredient } from '../actions/addIngredient';

class IngredientItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	tagSplitter() {
		return this.props.rowData.tags.map((tag) => (
			<Badge key={this.props.rowData.name} success style={styles.tagStyle}>
				<Text>
					{tag}
				</Text>
			</Badge>
		));
	}

	InactivateIngredientItem() {
		console.log('this is ingredient props', this.props);
		return this.props.deleteIngredient(this.props.rowData.id, this.props.user.token)
			.then(() => this.props.getIngredients());
	}

	renderDescription() {
		const { rowData, expanded } = this.props;
		const { expandedContainerStyle, altNameStyle, tagStyle } = styles;
		if (expanded) {
			return (
				<View>
					<CardItem content style={expandedContainerStyle}>
						<Text style={{ flex: 1 }}>
							Description: {rowData.description}
						</Text>
					</CardItem>
					<CardItem content style={expandedContainerStyle}>
						<Text style={{ flex: 1 }}>
							Alternatives: {rowData.alternatives}
						</Text>
					</CardItem>

					<CardItem
						cardBody style={expandedContainerStyle}
					>
						<Text style={altNameStyle}>Image:</Text>
						<Image />
					</CardItem>

					<CardItem style={expandedContainerStyle}>
						<Text>Tags: </Text>
						{this.tagSplitter()}
					</CardItem>

					{this.props.user &&
					<CardItem style={expandedContainerStyle}>
						<Button
							onPress={() => this.props.nav.navigation.navigate('EditIngredient', this.props.rowData)}
							small
							style={tagStyle}
							rounded
							warning
						>
							<Text>Edit</Text>
						</Button>
						<Button onPress={this.InactivateIngredientItem.bind(this)} small style={tagStyle} rounded danger>
							<Text>Delete</Text>
						</Button>
					</CardItem>}
				</View>
			);
		}
	}

	render() {
		const { nameStyle, containerStyle } = styles;
		const { id, name } = this.props.rowData;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectIngredient(id)}
			>
				<View key={id}>
					<CardItem style={containerStyle}>
						<Text style={nameStyle}>{name}</Text>
					</CardItem>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectIngredient, deleteIngredient, getIngredients }, dispatch);
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedIngredientId === ownProps.rowData.id;
	const user = state.loginReducer.user;

	return { expanded, user };
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		borderColor: '#ddd',
	},
	expandedContainerStyle: {
		backgroundColor: '#e5e5e5',
		borderBottomWidth: 1,
		borderColor: '#ccc',
	},
	nameStyle: {
		fontSize: 18,
		paddingLeft: 15,
	},
	altNameStyle: {
		paddingLeft: 15,
	},
	tagStyle: {
		marginRight: 5,
	},
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientItem);
