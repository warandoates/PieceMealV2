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

const RecipeCardList = ({recipes}) => (
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

export default RecipeCardList;
