import React, { Component } from 'react';
import { Image, View } from 'react-native';
import  Toast  from 'react-native-simple-toast'
import { bindActionCreators } from 'redux';
import Auth0Lock from 'react-native-lock';
import { ActionsContainer, Button } from 'react-native-clean-form';
import { connect } from 'react-redux';
import {
    // Body,
    Button,
    Container,
    Content,
    Form,
    // Header,
    Icon,
    Item,
    Input,
    // Left,
    // Right,
    Spinner,
    Text,
    // Title
} from 'native-base';
import { emailChanged, passwordChanged, loginUser, loginUserOAuth, logoutUser } from '../actions/login';

function login(email, password, callback) {
  //this example uses the "pg" library
  //more info here: https://github.com/brianc/node-postgres

  var conString = "postgres://vnfsppiaaevlpi:cfece86ac6e00504e6643a2a5165617c2dd44c99050e7d78930a8490e15f554e@ec2-54-235-153-124.compute-1.amazonaws.com:5432/d4qm35mjvrv6t";
  postgres(conString, function (err, client, done) {
    if (err) {
      console.log('could not connect to postgres db', err);
      return callback(err);
    }

    var query = 'SELECT id, email, password ' +
      'FROM users WHERE email = $1';

    client.query(query, [email], function (err, result) {
      // NOTE: always call `done()` here to close
      // the connection to the database
      done();

      if (err) {
        console.log('error executing query', err);
        return callback(err);
      }

      if (result.rows.length === 0) {
        return callback(new WrongUsernameOrPasswordError(email));
      }

      var user = result.rows[0];

      bcrypt.compare(password, user.password, function (err, isValid) {
        if (err) {
          callback(err);
        } else if (!isValid) {
          callback(new WrongUsernameOrPasswordError(email));
        } else {
          callback(null, {
            id: user.id,
            email: user.email
          });
        }
      });
    });
  });
}


class LogInForm extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => (
       <Icon name='log-in' />
     ),
     title: 'Login',
       activeTintColor: 'green';
     }
  };

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
          scope: 'openid email'
        }
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
      const { user, email, paddword, loading } = this.props;
      if (!user || user === 400) {
        return (
            <Container>
              <Image style={styles.containerStyle} source={require('../assets/appBackgound.png')}>
                <Content>
                    <Form>
                        <Item underline style={{ marginLeft: 15, marginRight: 25, marginBottom: 25, marginTop: 125 }}>
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
                          {loading && <Spinner color='#6a5acd' />}
                        <Button block style={style.buttonContainerLeft} onPress={() => this.onButtonPress()}>
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
     backgroundColor: 'olivedrab',
     width: '100%'
   },
     buttonContainerRight: {
     flex: 1,
     flexDirection: 'row',
     backgroundColor: 'steelblue'
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

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
