import React, { Component } from 'react';
import { Container, Button, Form, Input, Text, Item } from 'native-base';
import { reduxForm, Field } from 'redux-form';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
// import { Select } from 'react-native-clean-form/redux-form';
import { postIngredient } from '../actions';

const validate = values => {
  const error = {};
  error.name = '';
  error.description = '';
  error.image_url = '';

  let nameVal = values.name;
  let descriptionVal = values.description;
  let imgVal = values.image_url;
  const pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  if (values.name === undefined) {
    nameVal = '';
  }
  if (values.description === undefined) {
    descriptionVal = '';
  }
  if (values.image_url === undefined) {
    imgVal = '';
  }
  if (nameVal.length < 3 && nameVal !== '') {
    error.name = 'too short';
  }
  if (descriptionVal.length < 4 && descriptionVal !== '') {
    error.description = 'too short';
  }
  if (!pattern.test(imgVal) && imgVal !== '') {
    error.image_url = 'invalid address';
  }

return error;
};

class AddIngredientForm extends Component {
  constructor(props) {
  super(props);
  this.renderInput = this.renderInput.bind(this);
}

  onSubmit(ingredient) {
    return this.props.postIngredient(ingredient, this.props.token)
    .then((res) => {
      console.log('this is res', res);
      if (res.value.message === 'Ingredient already exists!') {
        return Toast.show(res.value.message, Toast.SHORT);
      } else if (res.value.status === 400)
      return Toast.show('Successfully Added Ingredient');
    })
    .then(() => {
      if (this.props.response !== 'Ingredient already exists!') {
      return this.props.navigation.navigate('ingredients');
      }
    });
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    let hasError = false;

    if (error !== undefined) {
      hasError = true;
    }

    return (
      <Item
      error={hasError}
      style={styles.itemStyle}
      >
        <Input placeholder={label} {...input} />
        {hasError ? <Text style={styles.validationStyle} >{error}</Text> : <Text />}
      </Item>);
  }

  render() {
    const { handleSubmit, submitting, ingredients, value, onChange } = this.props;
    const ingredientOptions = ingredients.ingredients.map(ingredient => {
      return { label: ingredient.name, key: ingredient.id, value: ingredient.id };
    });
    return (
      <Container>
      <Form style={{ flex: 1, backgroundColor: 'white' }} >
        <Container style={{ flex: 1 }}>
          <Text style={{ ...styles.textStyle, marginTop: 50 }}>Ingredients</Text>

          <Field style={styles.inputStyle} name="name" label="Ingredient Name" type='text' component={this.renderInput} />
          <Field style={{ flex: 1 }} name="description" label="Desciption" type='text' component={this.renderInput} />

          <Text style={{ ...styles.textStyle, marginTop: 50 }}>Extras</Text>

          <Field style={{ flex: 1 }} name="tags" label="Tags" type='text' component={this.renderInput} />

          <Field style={{ flex: 1 }} name="alternatives" label="alternatives" type='text' component={this.renderInput} />

          <Field style={{ flex: 1 }} name="image_url" label="image_url" type='text' component={this.renderInput} />
        </Container>
        <Container style={styles.buttonStyle}>
          <Button
            success
            onPress={handleSubmit(this.onSubmit.bind(this))} icon="md-checkmark" iconPlacement="right" submitting={submitting}
          >
            <Text>Submit</Text>
          </Button>
        </Container>
      </Form>
      </Container>
    );
  }
}

const styles = {
  itemStyle: {
    marginLeft: 10,
    marginTop: 10
  },
  inputStyle: {
    fontSize: 16
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    alignSelf: 'center' },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 400
  },
  validationStyle: {
    marginRight: 20
  }
};

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.user.token,
    success: state.ingredients.success,
    response: state.ingredients.response.message,
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps, { postIngredient })(reduxForm({
  form: 'ingredients',
  validate
})(AddIngredientForm));
