import React, { Component } from 'react';
import { Container, Button, Form, Input, Text, Item, Picker, View, Icon } from 'native-base';
import { reduxForm, Field } from 'redux-form';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
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
    this.state = {
        selectedItem: undefined,
        selected1: 'key1',
        results: {
            items: []
        }
    };
    // this.renderInput = this.renderInput.bind(this);
  }

  onValueChange(value: string, ingredients, results, setState) {
    console.log('value:', value);
    console.log('value:', ingredients);
    setState({
    selected1: value,
    results: [...results, value]
    });
  }

  renderPicker({ onValueChange, selected1, ingredients, results, input, setState, label, type, meta: { touched, error, warning } }) {

    console.log('this is <class></class> props', selected1);
    console.log('this is <class></class> props', this);
    let hasError = false;

    if (error !== undefined) {
      hasError = true;
    }
    return (
      <View style={{ marginTop: 50 }}>
        <Text style={{ marginLeft: 20 }}>Please Select alternative:</Text>
        <Icon style={{ marginTop: -25, marginLeft: 220 }} name='search' />
        <Picker
            style={{ marginTop: -50, marginLeft: 220 }}
            supportedOrientations={['portrait', 'landscape']}
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={selected1}
            onValueChange={onValueChange(selected1, ingredients, results, setState).bind(this)}

        >
         {ingredients.ingredients.map((t, i) => {
            console.log('this is t', t, i );
            return (
              // <Badge style={badgeStyle} key={i}><Text>{t}</Text></Badge>
              <Item label={t.name} value={t} />
            );
          }) }
       </Picker>
     </View>
    );
  }

  onSubmit(ingredient) {
    return this.props.postIngredient(ingredient, this.props.token)
    .then((res) => {
      if (res.value.message === 'Ingredient already exists!') {
        return Toast.show(res.value.message, Toast.SHORT);
      } else if (res.value.status === 400) {
        return Toast.show('Bad Request');
      }
      return Toast.show('Successfully Added Ingredient');
    })
    .then(() => {
      if (this.props.response !== 'Ingredient already exists!') {
      return this.props.navigation.navigate('ingredients');
      }
    });
  }

  renderInput = ({ ingredients, input, label, type, meta: { touched, error, warning } }) => {
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

    return (
      <Container>
        <Form style={{ flex: 1, backgroundColor: 'white' }} >
          <Container style={{ flex: 1 }}>
            <Text style={{ ...styles.textStyle, marginTop: 50 }}>Ingredients</Text>

            <Field style={styles.inputStyle} name="name" label="Ingredient Name" type='text' component={this.renderInput} />
            <Field style={{ flex: 1 }} name="description" label="Description" type='text' component={this.renderInput} />

            <Text style={{ ...styles.textStyle, marginTop: 50 }}>Extras</Text>
            {/* <Field
              style={{ flex: 1 }}
              name="alternatives"
              label="alternatives"
              type='text'
              onValueChange={this.onValueChange}
              ingredients={this.props.ingredients}
              selected1={this.state.selected1}
              results={this.state.results}
              setState={this.setState}
              component={this.renderPicker}
            /> */}
            <Field style={{ flex: 1 }} name="tags" label="Tags" type='text' component={this.renderInput} />

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

const mapStateToProps = (state, ownProps) => {
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
