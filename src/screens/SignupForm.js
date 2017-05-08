import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import {
    Body,
    Button,
    Container,
    Content,
    Form,
    Header,
    Icon,
    Item,
    Input,
    Left,
    Right,
    Spinner,
    Text,
    Title,
    Toast
} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  firstNameChange,
  lastNameChange,
  emailChange,
  passwordChange,
  confirmChange,
  signupUser
} from '../actions/signup';

class SignupForm extends Component {
  // static navigationOptions = ({ navigation, header }) => ({
  //   title: 'Sign Up',
  //   mode: 'modal'
  // });

    static navigationOptions = ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => (
         <Icon name='person-add' />
       ),
       title: 'Sign Up'
      };
    };

    onFirstNameChange(text) {
        this.props.firstNameChange(text);
    }

    onLastNameChange(text) {
        this.props.lastNameChange(text);
    }

    onEmailChange(text) {
        this.props.emailChange(text);
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }

    onConfirmChange(text) {
        this.props.confirmChange(text);
    }

    onButtonPress() {
      const { passwordMatch, firstName, lastName, email, password, confirm } = this.props;

        if (!passwordMatch) {
          Toast.show({
                  text: "Passwords Don't Match!",
                  position: 'bottom',
                  buttonText: 'Okay'
                });
          } else {
            this.props.signupUser({ firstName, lastName, email, password, confirm });
          }
    }

    render() {
        return (
            <Container>
              <Image style={styles.containerStyle} source={require('../assets/appBackgound.png')}>
                <Content>
                    <Form>
                        <Item regular style={{ marginLeft: 25, marginRight: 25, marginBottom: 10, marginTop: 50 }}>
                            <Input
                              label='First Name'
                              placeholder="First Name"
                              value={this.props.firstName}
                              onChangeText={this.onFirstNameChange.bind(this)}
                            />
                        </Item>
                            <Item regular style={{ marginLeft: 25, marginRight: 25, marginBottom: 10, marginTop: 0 }}>
                                <Input
                                  label='Last Name'
                                  placeholder="Last Name"
                                  value={this.props.lastName}
                                  onChangeText={this.onLastNameChange.bind(this)}
                                />
                            </Item>
                        <Item regular style={{ marginLeft: 25, marginRight: 25, marginBottom: 10, marginTop: 0 }}>
                            <Input
                              label='Email'
                              placeholder="Email"
                              value={this.props.email}
                              onChangeText={this.onEmailChange.bind(this)}
                              keyboardType='email-address'
                              autoCapitalize='none'
                              autoCorrect={false}
                            />
                        </Item>
                        <Item regular style={{ marginLeft: 25, marginRight: 25, marginBottom: 10, marginTop: 0 }}>
                            <Input
                              error={!this.props.passwordMatch}
                              secureTextEntry
                              label='Password'
                              placeholder="Password"
                              value={this.props.password}
                              onChangeText={this.onPasswordChange.bind(this)}
                            />
                        </Item>
                        <Item regular style={{ marginLeft: 25, marginRight: 25, marginBottom: 10, marginTop: 0 }}>
                            <Input
                              error={!this.props.passwordMatch}
                              secureTextEntry
                              label='Confirm'
                              placeholder="Enter Password Again"
                              value={this.props.confirm}
                              onChangeText={this.onConfirmChange.bind(this)}
                            />
                        </Item>
                          {this.props.loading && <Spinner />}
                        <Button
                          style={styles.buttonStyle}
                          name="email" block padder
                          onPress={() => this.onButtonPress()}>
                          <Icon name='send' />
                            <Text>Sign Up With Email</Text>
                        </Button>
                    </Form>

                </Content>
              </Image>
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
  buttonStyle: {
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 25,
    marginTop: 20,
    width: '50%',
    backgroundColor: '#73ab00'
  }
};


const mapStateToProps = (state) => {
    return {
      firstName: state.signupReducer.firstName,
      lastName: state.signupReducer.lastName,
      email: state.signupReducer.email,
      password: state.signupReducer.password,
      confirm: state.signupReducer.confirm,
      loading: state.signupReducer.loading,
      passwordMatch: state.signupReducer.passwordMatch
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signupToApp: (firstName, lastName, email, confirm, password) => {
            dispatch(signupUser(firstName, lastName, email, confirm, password));
        }
    };
};

export default connect(mapStateToProps, { firstNameChange, lastNameChange, emailChange, passwordChange, confirmChange, signupUser })(SignupForm);
