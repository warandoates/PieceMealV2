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
    Text,
    Title
} from 'native-base';
import { emailChanged, passwordChanged } from '../actions/index';

class LogInForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
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
                              onChangeText={() => this.onEmailChange()}
                            />
                        </Item>
                        <Item rounded last>
                            <Input
                              secureTextEntry
                              label='Password'
                              placeholder="Password"
                              value={this.props.password}
                              onChangeText={() => this.onPasswordChange()}
                            />
                        </Item>
                        <Button rounded block padder>
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
      password: state.loginReducer.password
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loginToApp: (email, password) => {
//             dispatch(loginAction(email, password));
//         }
//     };
// };

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LogInForm);
