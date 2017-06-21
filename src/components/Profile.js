import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    CardItem,
    Text,
    Badge,
    Button,
    Icon,
    Left,
    Body
} from 'native-base';
import pamProfile from '../assets/pam_profile.png';
import { restrictionsChange, changeRestrictions, userChange } from '../actions';

export class Profile extends Component {

    componentDidMount() {
      if (this.props.user !== null) {
          this.onUserChange(this.props.user);
      }
    }

    componentWillUpdate(nextProps) {
      // perform any preparations for an upcoming update
      if (nextProps.user !== null &&
          JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) {
        this.onUserChange(nextProps.user);
      }
    }

    componentDidUpdate() {
      console.log('componentDidUpdate');
    }

    onRestrictionsChange(restrictions) {
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
                    <CardItem>
                        <Left>
                            <Body>
                                <Text
                                  style={{ ...headerStyle, margin: 5, marginTop: 10, alignSelf: 'center' }}>
                                  {`${this.props.client.first_name} ${this.props.client.last_name}`}</Text>
                                <Text style={{ ...textStyle, marginTop: 0, alignSelf: 'center' }}>{`${this.props.client.email}`}</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Image style={{ resizeMode: 'contain', alignSelf: 'center' }} source={this.props.client.image_url} />
                            {/* <Image style={{ resizeMode: 'contain' }} source={sliders} /> */}
                            <Text note style={{ ...textStyle }}>
                                Provide campaign strategy for leading non profit crowdfunding campaigns.
                                Some recent organizations I have worked with include:
                                American Heart Association, Code.org, UN Foundation, Tish MS Center, Parkinsons Foundation, and the Harry Potter Alliance.
                            </Text>
                            {/* <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                <Text>{`${this.props.client.recipes.length} Recipes`}</Text>
                                <Text>1,926 followers</Text>
                            </Button> */}
                        </Body>
                    </CardItem>

                    <CardItem header>
                      <Body>
                      <Text style={{ ...textStyle, fontSize: 18, marginTop: 0 }}>Restrictions:</Text>
                      <View style={{ flexDirection: 'row', padding: 5, marginTop: 5, justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'stretch', flex: 2 }}>
                        { this.props.restrictions.map((r, i) => {
                          return (
                            <Badge style={badgeStyle} key={i}><Text>{r.name}</Text></Badge>
                          );
                        }) }
                      </View>
                      </Body>
                    </CardItem>

                    <CardItem header>
                      <Body>
                      <Button transparent textStyle={{ color: '#87838B' }}>
                          <Icon name="logo-github" />
                          <Text>{`${this.props.client.recipes.length} Recipes`}</Text>
                          <Text>1,926 followers</Text>
                      </Button>
                      </Body>
                    </CardItem>
                </Content>
              </Image>
            </Container>
        );
    }
}

const headerStyle = {
                      fontFamily: 'Futura',
                      fontSize: 24,
                      marginTop: 20,
                      paddingTop: 15
                    };

const textStyle = {
                    fontFamily: 'Futura',
                    marginLeft: 20,
                    marginRight: 15,
                    marginTop: 15,
                    marginBottom: 10,
                    alignSelf: 'center'
                  }

const badgeStyle = { marginLeft: 5, marginRight: 5, margin: 5 };

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
        firstName: state.clientReducer.client.first_name,
        lastName: state.clientReducer.client.last_name,
        email: state.clientReducer.client.email,
        image_url: state.clientReducer.client.image_url,
        client: state.clientReducer.client,
        restrictions: state.clientReducer.client.restrictions,
        user: state.loginReducer.user || state.signupReducer.user
    };
};

export default connect(mapStateToProps, { restrictionsChange, changeRestrictions, userChange })(Profile);
