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
import { updateIngredient } from '../actions/addIngredient';

class IngredientEditForm extends Component {
  onSubmit(ingredient) {
    return this.props.updateIngredient(ingredient, this.props);
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Ingredient Details">
            <Input name="name" label="Ingredient Name" />
            <Input name="description" label="Description" placeholder="The most delicious apple" />
          </Fieldset>
          <Fieldset label="Add" last>
            <Input name="alternatives" label="alternatives" placeholder="Oranges?" />
            <Input name="tags" label="Tags" placeholder="crisp" />
            <Input name="photos" label="photos" placeholder="Photo?" />
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button onPress={handleSubmit(this.onSubmit.bind(this))} icon="md-checkmark" iconPlacement="right" submitting={submitting} >
            Submit
          </Button>
        </ActionsContainer>
      </Form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.loginReducer.user.token,
    success: state.ingredients.success,
    initialValues: {
      name: ownProps.navigation.state.params.name,
      description: ownProps.navigation.state.params.description,
      alternatives: ownProps.navigation.state.params.alternatives,
      tags: ownProps.navigation.state.params.tags.toString(),
      photos: ownProps.navigation.state.params.photos,
    }
  };
};

export default connect(mapStateToProps, { updateIngredient })(reduxForm({
  form: 'editIngredient',
})(IngredientEditForm));
