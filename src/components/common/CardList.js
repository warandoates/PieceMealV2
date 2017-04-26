import React, {Component} from 'react';
import {
    Body,
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Icon,
    Left,
    Right
} from 'native-base';

export class CardList extends Component {
    state = { id: 1,
              name: 'garlic sauce'
            } 

    render(props) {
        return (
            <Content padder>
                <Card>
                    <CardItem>
                        <Icon active name="logo-googleplus"/>
                        <Text>Hi</Text>
                        <Right>
                            <Icon name="ios-arrow-forward"/>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}
