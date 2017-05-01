import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';

class AddIngredientForm extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="name" />
            </Item>
            <Item>
              <Input placeholder="description" />
            </Item>
            <Item>
              <Input placeholder="tags" />
            </Item>
            <Item>
              <Input placeholder="alternatives" />
            </Item>
            <Item last>
              <Input placeholder="image_url" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AddIngredientForm;
