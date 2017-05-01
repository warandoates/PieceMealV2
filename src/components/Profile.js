import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import daniel_profile from '../assets/daniel_profile.jpg';
import pam_profile from '../assets/pam_profile.png';

export default class CardImageExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card >
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
                   </Card>
                </Content>
            </Container>
        );
    }
}
