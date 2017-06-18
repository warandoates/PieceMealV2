import React, { Component } from 'react';
import { Container, Button, Form, Input, Text, Item } from 'native-base';
import { reduxForm, Field } from 'redux-form';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import {
  ActionsContainer,
  Fieldset,
} from 'react-native-clean-form';
import { Select } from 'react-native-clean-form/redux-form';
import { postIngredient } from '../actions';

class AddIngredientForm extends Component {

  renderInput({ input, label, type }) {
    return ( <Item >
                        <Input {...input}/>
                    </Item> )
  }

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
      <Form style={{flex: 1}} >
        <Container style={{flex: 1}} >
          <Field style={{flex: 1}} name="name" label="Ingredient Details" type='text' placeholder="Honeycrisp Apple" component={this.renderInput({label: 'example'})} />
            {/* <Input  label="Ingredient Name" placeholder="Honeycrisp Apple" />
            <Input name="description" label="Description" placeholder="The most delicious apple" /> */}
          {/* </Field> */}
          {/* <Field label="Extras" last> */}
            {/* <Select
              name="alternatives"
              label="alternatives"
              placeholder="Oranges?"
              options={ingredientOptions}
              // onChange={(value)}
            /> */}
            {/* <Input name="tags" label="Tags" placeholder="crisp" />
            <Input name="photos" label="photos" placeholder="Photo?" /> */}
          {/* </Field> */}
        </Container>
        <Container>
          <Button onPress={handleSubmit(this.onSubmit.bind(this))} icon="md-checkmark" iconPlacement="right" submitting={submitting} >
            <Text>Submit</Text>
          </Button>
        </Container>
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
