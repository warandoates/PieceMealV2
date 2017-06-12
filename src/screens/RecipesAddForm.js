import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
} from 'react-native-clean-form';
import { Input } from 'react-native-clean-form/redux-form';
import { postRecipe } from '../actions';

class AddRecipeForm extends Component {
  onSubmit(recipe) {
    return this.props.postRecipe(recipe, this.props.token)
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Recipe Details">
            <Input name="name" label="Recipe Name" placeholder="Double Cheese Tsukemen" />
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
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button onPress={handleSubmit(this.onSubmit.bind(this))}
                  icon="md-checkmark"
                  iconPlacement="right"
                  submitting={submitting}
          >Submit</Button>
        </ActionsContainer>
      </Form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.loginReducer.user.token
  };
};

export default connect(mapStateToProps, { postRecipe })(reduxForm({
  form: 'recipes'
})(AddRecipeForm));
