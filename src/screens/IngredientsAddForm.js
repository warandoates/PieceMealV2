import React, { Component } from 'react';
import {
    Content,
    Card,
    CardItem,
    Text,
    Icon,
    Right,

} from 'native-base';
import { reduxForm, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
} from 'react-native-clean-form';
import { Input } from 'react-native-clean-form/redux-form';
import { postIngredient } from '../actions/addIngredient';

class AddIngredientForm extends Component {
  onSubmit(ingredient) {
    return this.props.postIngredient(ingredient, this.props.token);
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Ingredient Details">
            <Input name="name" label="Ingredient Name" placeholder="Honeycrisp Apple" />
            <Input name="description" label="Description" placeholder="The most delicious apple" />
          </Fieldset>
          <Fieldset label="Extras" last>
            <Input name="alternatives" label="alternatives" placeholder="Oranges?" />
            <Input name="tags" label="Tags" placeholder="crisp" />
            <Input name="photos" label="photos" placeholder="Photo?" />
          </Fieldset>
          {/* <FieldArray name="hi" component={renderHobbies}/> */}
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

const renderHobbies = ({ fields, meta: { error } }) => (
  <Card>
    <CardItem>
      <Button type="button" onClick={() => fields.push()}>Add Hobby</Button>
    </CardItem>
    {fields.map((hobby, index) =>
      <CardItem key={index}>
        <Button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}/>
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}/>
      </CardItem>
    )}
    {error && <CardItem className="error">{error}</CardItem>}
  </Card>
)

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.loginReducer.user.token,
    success: state.ingredientResults.success
  };
};

export default connect(mapStateToProps, { postIngredient })(reduxForm({
  form: 'ingredients'
})(AddIngredientForm));
