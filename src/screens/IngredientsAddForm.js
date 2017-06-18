import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
} from 'react-native-clean-form';
import { Input, Select, } from 'react-native-clean-form/redux-form';
import { postIngredient } from '../actions';

class AddIngredientForm extends Component {
  onSubmit(ingredient) {
    return this.props.postIngredient(ingredient, this.props.token)
    .then((res) => {
      if (res.value.message === 'Ingredient already exists!') {
        return Toast.show(res.value.message, Toast.SHORT);
      }
      return Toast.show('Successfully Added Ingredient');
    })
    .then(() => {
      if (this.props.response !== 'Ingredient already exists!') {
      return this.props.navigation.navigate('ingredients');
      }
    });
  }

  render() {
    const { handleSubmit, submitting, ingredients, value, onChange } = this.props;
    const ingredientOptions = ingredients.ingredients.map(ingredient => {
      return { label: ingredient.name, key: ingredient.id, value: ingredient.id };
    });
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Ingredient Details">
            <Input name="name" label="Ingredient Name" placeholder="Honeycrisp Apple" />
            <Input name="description" label="Description" placeholder="The most delicious apple" />
          </Fieldset>
          <Fieldset label="Extras" last>
            <Select
              name="alternatives"
              label="alternatives"
              placeholder="Oranges?"
              options={ingredientOptions}
              // onChange={(value)}
            />
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

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.user.token,
    success: state.ingredients.success,
    response: state.ingredients.response.message,
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps, { postIngredient })(reduxForm({
  form: 'ingredients'
})(AddIngredientForm));
