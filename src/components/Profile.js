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
import TagInput from 'react-native-tag-input';
import Tags from 'react-native-tags';
// import daniel_profile from '../assets/daniel_profile.jpg';
import pam_profile from '../assets/pam_profile.png';
// import comet_in_space from '../assets/comet_in_space.jpg';
import comet_in_space from '../assets/comet_in_space_3.jpg';
import { restrictionsChange, changeRestrictions, userChange } from '../actions/client';
import CheckBoxExample from './RestrictedIngredients'

class Profile extends Component {

    componentWillUpdate(nextProps, nextState) {
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

    testd() {

    }

    render() {
        return (
            <Container>
                <Content>
                    {/* <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail source={pam_profile} />
                                <Body>
                                    <Text>Pam Mangan</Text>
                                    <Text note>User</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image />
                          </CardItem>
                          <CardItem content>
                              <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                          </CardItem>
                          <CardItem>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 Likes</Text>
                              </Button>
                              <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>4 Comments</Text>
                              </Button>
                              <Text>11h ago</Text>
                        </CardItem>
                    </Card> */}
                    <Card style={{
                        flex: 0
                    }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={pam_profile}/>
                                <Body>
                                    <Text>Pam Mangan</Text>
                                    {/* <Text note>April 15, 2016</Text> */}
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image style={{
                                    resizeMode: 'contain'
                                }} source={comet_in_space}/>
                                <Text>
                                    Provide campaign strategy for leading non profit crowdfunding campaigns. Some recent organizations I have worked with include: American Heart Association, Code.org, UN Foundation, Tish MS Center, Parkinsons Foundation, and the Harry Potter Alliance.
                                </Text>
                                <Button transparent textStyle={{
                                    color: '#87838B'
                                }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                {/* <TagInput
                                  tagColor={'red'}
                                  tagTextColor={'black'}
                                  value={ this.props.restrictions.map((r) => { return r.description}) }
                                  onChange={ (restrictions) => this.onRestictionsChange(restrictions) }
                                /> */}
                                {/* <UselessComponent /> */}
                                <Tags
                                  initialText=""
                                  initialTags={['dog', 'cat', 'chicken']}
                                  onChangeTags={() => testd}
                                  onTagPress={(index, tagLabel, event) => console.log(index, tagLabel, event)}
                                  inputStyle={{ backgroundColor: 'white' }}
                                  enqueueCallback={this.testd()}
                                />
                            </Body>
                        </CardItem>
                    </Card>
                    <CheckBoxExample list={this.props.restrictions} />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer,
        restrictions: state.clientReducer.restrictions,
        user: state.loginReducer.user
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ restrictionsChange, changeRestrictions, userChange }, dispatch);
};

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
