import React, { Component } from 'react';
import { Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body
} from 'native-base';
import pamProfile from '../assets/pam_profile.png';
import sliders from '../assets/food/sliders.jpg';
import { restrictionsChange, changeRestrictions, userChange } from '../actions';
import CheckBoxExample from './Ingredient/RestrictedIngredients'

export class Profile extends Component {

    componentWillUpdate(nextProps) {
      // perform any preparations for an upcoming update
      if (nextProps.user !== null &&
          JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) {
        this.onUserChange(nextProps.user);
      }
    }

    onRestictionsChange(restrictions) {
        this.props.changeRestrictions(this.props.client.id, restrictions);
    }

    onUserChange(user) {
        this.props.userChange(user);
    }

    render() {
        return (
            <Container>
              <Image style={styles.containerStyle} source={require('../assets/appBackgound.png')}>
                <Content style={{ alignSelf: 'stretch' }}>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={pamProfile} />
                                <Body>
                                    <Text>Pam Mangan</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image style={{ resizeMode: 'contain' }} source={sliders} />
                                <Text style={{ marginTop: 20 }}>
                                    Provide campaign strategy for leading non profit crowdfunding campaigns.
                                    Some recent organizations I have worked with include:
                                    American Heart Association, Code.org, UN Foundation, Tish MS Center, Parkinsons Foundation, and the Harry Potter Alliance.
                                </Text>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <CheckBoxExample list={this.props.restrictions} />
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
  }
};

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        restrictions: state.clientReducer.client.restrictions,
        user: state.loginReducer.user
    };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ restrictionsChange, changeRestrictions, userChange }, dispatch);
// };

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, { restrictionsChange, changeRestrictions, userChange })(Profile);
