import { Button, Header, Icon, Input, Item } from 'native-base';
import React, { Component } from 'react';

export class SearchResults extends Component {
	render() {
		return (
			<Header SearchResults rounded>
				<Button transparent>
					<Icon name='menu'/>
				</Button>
				<Item >
					<Icon name="ios-search"/>
					<Input placeholder="Search"/>
				</Item>
				<Button transparent>
					<Icon name='ios-options'/>
				</Button>
			</Header>
		);
	}
}
