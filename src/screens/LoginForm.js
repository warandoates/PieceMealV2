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
                              label='Email'
                              placeholder="Email"
                              value={this.props.email}
                              onChangeText={this.onEmailChange.bind(this)}
                            />
                        </Item>
                        <Item rounded last>
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
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      email: state.loginReducer.email,
      password: state.loginReducer.password,
      loading: state.loginReducer.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginToApp: (email, password) => {
            dispatch(loginAction(email, password));
        }
    };
};

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LogInForm);
