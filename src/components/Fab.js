import { Button, Container, Content, Fab, Icon } from 'native-base';
import React, { Component } from 'react';

export default class FABExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 'false',
		};
	}

	render() {
		return (
			<Container>
				<Content>
					<Fab
						active={this.state.active}
						direction="left"
						containerStyle={{ marginTop: 30, marginLeft: 10 }}
						style={{ backgroundColor: '#5067FF' }}
						position="topRight"
						onPress={() => this.setState({ active: !this.state.active })}>
						<Icon name="share"/>
						<Button style={{ backgroundColor: '#34A34F' }}>
							<Icon name="logo-whatsapp"/>
						</Button>
						<Button style={{ backgroundColor: '#3B5998' }}>
							<Icon name="logo-facebook"/>
						</Button>
						<Button disabled style={{ backgroundColor: '#DD5144' }}>
							<Icon name="mail"/>
						</Button>
						<Button onPress={ this.props.onClose.bind(this) } style={{ backgroundColor: '#DD5144' }}>
							<Icon name="close"/>
						</Button>
					</Fab>
				</Content>
			</Container>
		);
	}
}
