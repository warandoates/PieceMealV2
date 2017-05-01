import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
} from 'react-native-clean-form';
import {
  Input,
  Switch
} from 'react-native-clean-form/redux-form';

class AddRecipeForm extends Component {

  render() {
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Recipe Details">
            <Input name="recipe_name" label="Recipe Name" placeholder="Double Cheese Tsukemen" />
            <Input name="description"
                   label="Description"
                   placeholder="Ramen with dipping sauce and cheese"
            />
          </Fieldset>
          <Fieldset label="Extras" last>
            <Input name="ingredients" label="Ingredients" />
            <Input name="instructions" label="Instructions" />
            <Input name="notes" label="Notes" placeholder="good for kids"/>
            <Input name="tags" label="Tags" placeholder="vegetarian" />
            <Input name="photos" label="Add a Photo" placeholder="Add a photo" />
            <Switch label="Save my details" border={false} name="save_details" />
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button>Submit</Button>
        </ActionsContainer>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'recipes'
})(AddRecipeForm);
