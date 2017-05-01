import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <Content>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Right>
                    </Header>
                    <Form>
                        <Item rounded>
                            <Input
                              label='First Name'
                              placeholder="First Name"
                              value={this.props.firstName}
                              onChangeText={this.onFirstNameChange.bind(this)}
                            />
                        </Item>
                            <Item rounded>
                                <Input
                                  label='Last Name'
                                  placeholder="Last Name"
                                  value={this.props.lastName}
                                  onChangeText={this.onLastNameChange.bind(this)}
                                />
                            </Item>
                        <Item rounded>
                            <Input
                              label='Email'
                              placeholder="Email"
                              value={this.props.email}
                              onChangeText={this.onEmailChange.bind(this)}
                            />
                        </Item>
                        <Item rounded>
                            <Input
                              secureTextEntry
                              label='Password'
                              placeholder="Password"
                              value={this.props.password}
                              onChangeText={this.onPasswordChange.bind(this)}
                            />
                        </Item>
                        <Item rounded last>
                            <Input
                              secureTextEntry
                              label='Confirm'
                              placeholder="Enter Password Again"
                              value={this.props.confirm}
                              onChangeText={this.onConfirmChange.bind(this)}
                            />
                        </Item>
                          {this.props.loading && <Spinner />}
                        <Button rounded block padder onPress={() => this.onButtonPress()}>
                            <Text>Sign Up</Text>
                        </Button>
                    </Form>
                    <Button name="facebook" style={{ backgroundColor: "#3b5998" }} onPress={this.loginWithFacebook}>
                      <Icon name='logo-facebook' />
                      <Text>Login with Facebook</Text>
                    </Button>

                    <Button name="twitter" style={{ backgroundColor: "#00aced" }} onPress={this.loginWithTwitter}>
                      <Icon name='logo-twitter' />
                      <Text>Login with Twitter</Text>
                    </Button>

                    <Button name="github" style={{ backgroundColor: "#f5f5f5" }} onPress={this.loginWithGitHub}>
                      <Icon name='logo-github' style={{ color: "#000000" }} />
                      <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#000000" }}>Login with GitHub</Text>
                    </Button>

                    <Button name="google" style={{ backgroundColor: "#dd4b39" }} onPress={this.loginWithGoogle}>
                      <Icon name='logo-google' />
                      <Text>Login with Google</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      firstName: state.signupReducer.firstName,
      lastName: state.signupReducer.lastName,
      email: state.signupReducer.email,
      password: state.signupReducer.password,
      confirm: state.signupReducer.confirm,
      loading: state.signupReducer.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signupToApp: (firstName, lastName, email, confirm, password) => {
            dispatch(signupUser(firstName, lastName, email, confirm, password));
        }
    };
};

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, { firstNameChange, lastNameChange, emailChange, passwordChange, confirmChange, signupUser })(SignupForm);
