import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Auth0Lock from 'react-native-lock';
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
    Title
} from 'native-base';
import { emailChanged, passwordChanged, loginUser } from '../actions/login';

class LogInForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
      const { email, password } = this.props;

      this.props.loginUser({ email, password });
    }

    auth() {
      lock.show({closable: true,}, (err, profile, token) => {
        if (err) {
          console.log(err);
          return;
      }
      console.log('logged in!!!!', token);
    });
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
                            <Title>Login</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Right>
                    </Header>
                    <Form>
                        <Item>
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
                        <Item last>
                            <Input
                              secureTextEntry
                              label='Password'
                              placeholder="Password"
                              value={this.props.password}
                              onChangeText={this.onPasswordChange.bind(this)}
                            />
                        </Item>
                          {this.props.loading && <Spinner />}
                        <Button rounded block padder onPress={() => this.onButtonPress()}>
                            <Text>Login</Text>
                        </Button>
                        <Button onPress={this.auth}>
                          <Text>Use OAtuh</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}



const lock = new Auth0Lock({clientId:'VwJAcIK8g5LS27Vjx8BAqtEcd0QmvFdM', domain: 'piecemeal.auth0.com' });

const mapStateToProps = (state) => {
    return {
      email: state.loginReducer.email,
      password: state.loginReducer.password,
      loading: state.loginReducer.loading
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ emailChanged, passwordChanged, loginUser }, dispatch);
};

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
