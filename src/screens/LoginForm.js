import { Button, Container, Content, Form, Icon, Input, Item, Spinner, Text } from 'native-base';
import React, { Component } from 'react';
import { Image } from 'react-native';
import Auth0Lock from 'react-native-lock';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { emailChanged, loginUser, loginUserOAuth, logoutUser, passwordChanged } from '../actions/login';


class LogInForm extends Component {
	static navigationOptions = ({ navigation }) => ({
		tabBarIcon: ({ tintColor }) => (
			<Icon name='log-in'/>
		),
		title: 'Login',
	});


	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		if (!email) {
			return Toast.show('Email is required', Toast.SHORT);
		}
		if (!password) {
			return Toast.show('Password is required', Toast.SHORT);
		}
		this.props.loginUser({ email, password })
			.then(() => {
				if (this.props.user === 400) {
					return Toast.show('Invalid email or password', Toast.SHORT);
				}
				return this.props.navigation.navigate('Dashboard');
			});
	}

	onLogout() {
		this.props.logoutUser();
	}

	auth() {
		const options = {
			closable: true,
			authParams: {
				responseType: 'id_token',
				scope: 'openid email',
			},
		};
		lock.show(options, (err, profile, token) => {
			if (err) {
				console.log(err);
				return;
			}
			this.props.loginUserOAuth(token);
		});
	}

	render() {
		const { user, email, password, loading } = this.props;
		if (!user || user === 400) {
			return (
				<Container>
					<Image style={styles.containerStyle} source={require('../assets/appBackgound.png')}>
						<Content>
							<Form>
								<Item underline style={{ marginLeft: 15, marginRight: 20, marginBottom: 20, marginTop: 125 }}>
									<Input
										label='Email'
										placeholder="Enter Email"
										value={this.props.email}
										onChangeText={(...args) => this.onEmailChange(...args)}
										keyboardType='email-address'
										autoCapitalize='none'
										autoCorrect={false}
									/>
								</Item>
								<Item underline last>
									<Input
										secureTextEntry
										label='Password'
										placeholder="Enter Password"
										value={this.props.password}
										onChangeText={this.onPasswordChange.bind(this)}
									/>
								</Item>
								{loading && <Spinner color='#6a5acd'/>}
								<Button block style={styles.buttonContainerLeft} onPress={() => this.onButtonPress()}>
									<Text>Login</Text>
								</Button>
								<Button block style={styles.buttongContainerRight} onPress={() => this.auth()}>
									<Text>Sign In with Facebook</Text>
								</Button>
							</Form>
						</Content>
					</Image>
				</Container>
			);
		}
		return (
			<Container style={styles.containerStyle}>
				<Content>
					<Form>
						{loading && <Spinner />}
						<Button style={{ marginLeft: 25, marginRight: 25, marginBottom: 25, marginTop: 225 }} block padder
						        onPress={() => this.onLogout()}>
							<Text>Sign Out</Text>
						</Button>
					</Form>
				</Content>
			</Container>

		);
	}
}


const styles = {
	containerStyle: {
		flex: 1,
		width: undefined,
		height: undefined,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainerLeft: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 25,
		marginTop: 50,
		backgroundColor: '#73ab00',
		width: '100%',
	},
	buttonContainerRight: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'steelblue',
	},
};

const lock = new Auth0Lock({
	clientId: 'VwJAcIK8g5LS27Vjx8BAqtEcd0QmvFdM',
	domain: 'piecemeal.auth0.com',
});

const mapStateToProps = (state) => ({
	email: state.loginReducer.email,
	password: state.loginReducer.password,
	loading: state.loginReducer.loading,
	user: state.loginReducer.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
	{ emailChanged, passwordChanged, loginUser, loginUserOAuth, logoutUser },
	dispatch);

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
