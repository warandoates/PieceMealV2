import React, { Component } from 'react';
import { Container, Button, Form, Input, Text, Item } from 'native-base';
import { reduxForm, Field } from 'redux-form';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { updateIngredient } from '../actions';

class IngredientEditForm extends Component {
  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
  }

  onSubmit(ingredient) {
    return this.props.updateIngredient(ingredient, this.props);
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
    console.log('these are the props', this.props)
    const { handleSubmit, submitting, ingredient, value, onChange } = this.props;


    return (
      <Container>
      <Form style={{ flex: 1, backgroundColor: 'white' }} >
        <Container style={{ flex: 1 }}>
          <Text style={{ ...styles.textStyle, marginTop: 50 }}>Edit Ingredient</Text>

          <Field style={styles.inputStyle} name="name" label='name' type='text' component={this.renderInput} />
          <Field style={{ flex: 1 }} name="description" label="Description" type='text' component={this.renderInput} />

          <Text style={{ ...styles.textStyle, marginTop: 50 }}>Extras</Text>

          <Field style={{ flex: 1 }} name="tags" label="Tags" type='text' component={this.renderInput} />

          <Field style={{ flex: 1 }} name="alternatives" label="alternatives" type='text' ingredients={this.props.ingredients} component={this.renderInput} />

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
//   render() {
//     const { handleSubmit, submitting } = this.props;
//     return (
//       <Form>
//         <FieldsContainer>
//           <Fieldset label="Ingredient Details">
//             <Input name="name" label="Ingredient Name" />
//             <Input name="description" label="Description" placeholder="The most delicious apple" />
//           </Fieldset>
//           <Fieldset label="Add" last>
//             <Input name="alternatives" label="alternatives" placeholder="Oranges?" />
//             <Input name="tags" label="Tags" placeholder="crisp" />
//             <Input name="photos" label="photos" placeholder="Photo?" />
//           </Fieldset>
//         </FieldsContainer>
//         <ActionsContainer>
//           <Button onPress={handleSubmit(this.onSubmit.bind(this))} icon="md-checkmark" iconPlacement="right" submitting={submitting} >
//             Submit
//           </Button>
//         </ActionsContainer>
//       </Form>
//     );
//   }
// }

const mapStateToProps = (state, ownProps) => {
  console.log('own proprosospopop', ownProps);
  return {
    initialValues: {
      name: ownProps.navigation.state.params.name,
      description: ownProps.navigation.state.params.description,
      alternatives: ownProps.navigation.state.params.alternatives,
      tags: ownProps.navigation.state.params.tags.toString(),
      image_url: ownProps.navigation.state.params.image_url
    }
    // token: state.loginReducer.user.token,
    // success: state.ingredients.success,
    // initialValues: {
    //   name: ownProps.navigation.state.params.name,
    //   description: ownProps.navigation.state.params.description,
    //   alternatives: ownProps.navigation.state.params.alternatives,
    //   tags: ownProps.navigation.state.params.tags.toString(),
    //   photos: ownProps.navigation.state.params.photos,
    // }
  };
};

export default connect(mapStateToProps, { updateIngredient })(reduxForm({
  form: 'editIngredient',
})(IngredientEditForm));
