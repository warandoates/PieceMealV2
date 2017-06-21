import React, { Component } from 'react';
import { Image } from 'react-native';
import Toast from 'react-native-simple-toast';
import { bindActionCreators } from 'redux';
import Auth0Lock from 'react-native-lock';
import { connect } from 'react-redux';
import {
    Button,
    Container,
    Content,
    Form,
    Icon,
    Item,
    Input,
    Spinner,
    Text,
} from 'native-base';
import { emailChanged, passwordChanged, loginUser, loginUserOAuth, logoutUser } from '../actions';


class LogInForm extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
   /* this only styles the title/text (font, color etc.)  */
        color: '#373737'
      },
      headerStyle: {
   /* this will style the header, but does NOT change the text */
        backgroundColor: '#68BAA7'
      },
      tabBarIcon: ({ tintColor }) => (
       <Icon name='log-in' style={{ color: '#68BAA7' }} />
      ),
      title: 'Login',
      activeTintColor: '#C0B283'
    };
  }

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
          scope: 'openid email name'
        }
      };

      lock.show(options, (err, profile, token) => {
        if (err) {
          console.log(err);
          return;
        }
        this.props.loginUserOAuth(token)
        .then(() => {
          return this.props.navigation.navigate('Dashboard');
        });
      });
    }

    render() {
      const { user, email, password, loading } = this.props;
      if (!user || user === 400) {
        return (
          <Container>
            <Image
              style={styles.containerStyle} source={require('../assets/appBackgound.png')}
            >
              <Content>
                  <Form>
                      <Item
                        underline
                        style={{ marginLeft: 15, marginRight: 20, marginBottom: 20, marginTop: 125 }}
                      >
                        <Input
                          label='Email'
                          placeholder='Enter Email'
                          value={email}
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
                          placeholder='Enter Password'
                          value={password}
                          onChangeText={this.onPasswordChange.bind(this)}
                        />
                      </Item>
                      {loading && <Spinner color='#C0B083' />}
                      <Button
                        block
                        style={styles.buttonContainerLeft}
                        onPress={() => this.onButtonPress()}
                      >
                        <Text>Login</Text>
                      </Button>
                      <Button
                        block
                        style={styles.buttongContainerRight}
                        onPress={() => this.auth()}
                      >
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
                      <Button style={{ marginLeft: 25, marginRight: 25, marginBottom: 25, marginTop: 225 }} block padder onPress={() => this.onLogout()}>
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
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerLeft: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 25,
    marginTop: 50,
    backgroundColor: '#C0B083',
    width: '100%'
  },
  buttonContainerRight: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#C0B083'
  }
};

const lock = new Auth0Lock({ clientId: 'VwJAcIK8g5LS27Vjx8BAqtEcd0QmvFdM',
domain: 'piecemeal.auth0.com' });

const mapStateToProps = (state) => {
    return {
      email: state.loginReducer.email,
      password: state.loginReducer.password,
      loading: state.loginReducer.loading,
      user: state.loginReducer.user
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { emailChanged, passwordChanged, loginUser, loginUserOAuth, logoutUser },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
