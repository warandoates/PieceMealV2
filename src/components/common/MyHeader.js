import { Body, Button, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image } from 'react-native';

export class MyHeader extends Component {
	render() {
		return (
			<Header>
				<Left>
					<Button transparent>
						<Icon name='menu'/>
					</Button>
				</Left>
				<Body>
				<Image source={require('../../assets/logo.png')}/>
				{/* <Title>{this.props.headerText}</Title> */}
				</Body>
				<Right>
					{/* <Button transparent>
					 <Icon name='search' />
					 </Button> */}
				</Right>
			</Header>
		);
	}
}

const styles = {
	viewStyles: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		elevation: 2,
		position: 'relative',
	},
	textStyle: {
		fontSize: 20,
	},
};
