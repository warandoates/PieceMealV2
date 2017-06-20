import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { Image } from 'react-native';
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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  firstNameChange,
  lastNameChange,
  emailChange,
  passwordChange,
  confirmChange,
  signupUser
} from '../actions';

export class SignupForm extends Component {
  // static navigationOptions = ({ navigation, header }) => ({
  //   title: 'Sign Up',
  //   mode: 'modal'
  // });

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
        headerTintColor: {
      /* this will color your back and forward arrows or left and right icons */
        },
        tabBarIcon: ({ tintColor }) => (
         <Icon name='person-add' style={{ color: '#68BAA7' }} />
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
          Toast.show("Passwords don't match", Toast.SHORT);
      } else {
          this.props.signupUser({ firstName, lastName, email, password, confirm })
          .then(res => {
            if (res.value) {
              Toast.show(`Thanks for signing up ${res.value.first_name}!`, Toast.SHORT);
            }
            return this.props.navigation.navigate('Dashboard');
          });
      }
    }

    render() {
      console.log('this is signup props', this.props);
        return (
            <Container>
              <Image style={styles.containerStyle} source={require('../assets/appBackgound.png')}>
                <Content>
                    <Form>
                        <Item
                          regular
                          style={{ ...styles.itemStyle, marginTop: 50 }}
                        >
                            <Input
                              label='First Name'
                              placeholder='First Name'
                              value={this.props.firstName}
                              onChangeText={this.onFirstNameChange.bind(this)}
                            />
                        </Item>
                        <Item regular style={styles.itemStyle}>
                            <Input
                              label='Last Name'
                              placeholder='Last Name'
                              value={this.props.lastName}
                              onChangeText={this.onLastNameChange.bind(this)}
                            />
                        </Item>
                        <Item regular style={styles.itemStyle}>
                            <Input
                              label='Email'
                              placeholder='Email'
                              value={this.props.email}
                              onChangeText={this.onEmailChange.bind(this)}
                              keyboardType='email-address'
                              autoCapitalize='none'
                              autoCorrect={false}
                            />
                        </Item>
                        <Item regular style={styles.itemStyle}>
                            <Input
                              error={!this.props.passwordMatch}
                              secureTextEntry
                              label='Password'
                              placeholder='Password'
                              value={this.props.password}
                              onChangeText={this.onPasswordChange.bind(this)}
                            />
                        </Item>
                        <Item regular style={styles.itemStyle}>
                            <Input
                              error={!this.props.passwordMatch}
                              secureTextEntry
                              label='Confirm'
                              placeholder='Enter Password Again'
                              value={this.props.confirm}
                              onChangeText={this.onConfirmChange.bind(this)}
                            />
                        </Item>
                          {this.props.loading && <Spinner />}
                        <Button
                          style={styles.buttonStyle}
                          name="email" block padder
                          onPress={() => this.onButtonPress()}
                        >
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
    marginLeft: 88,
    marginRight: 100,
    marginBottom: 25,
    marginTop: 20,
    width: '50%',
    backgroundColor: '#C0B083',
    // alignItems: 'center'
  },
  itemStyle: {
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    marginTop: 0
  },
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

export default connect(mapStateToProps, { firstNameChange, lastNameChange, emailChange, passwordChange, confirmChange, signupUser })(SignupForm);
