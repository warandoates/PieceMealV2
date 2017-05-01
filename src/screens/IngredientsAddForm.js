
//             <Item>
//               <Input placeholder="description" />
//             </Item>
//             <Item>
//               <Input placeholder="tags" />
//             </Item>
//             <Item>
//               <Input placeholder="alternatives" />
//             </Item>
//             <Item last>
//               <Input placeholder="image_url" />
//             </Item>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
} from 'react-native-clean-form'
import {
  Input,
  Switch
} from 'react-native-clean-form/redux-form'
// import { View,Text } from 'react-native'

// const onSubmit = (values, dispatch) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(values)
//       resolve()
//     }, 1500)
//   })
// }

class AddIngredientForm extends Component {
  // const { handleSubmit, submitting } = this.props
render() {
  return (
    <Form>
      <FieldsContainer>
        <Fieldset label="Ingredient Details">
          <Input name="ingredient_name" label="Ingredient Name" placeholder="Honeycrisp Apple" />
          <Input name="description" label="Description" placeholder="The most delicious apple" />
        </Fieldset>
        <Fieldset label="Extras" last>
          <Input name="tags" label="Tags" placeholder="crisp" />
          <Input name="photos" label="City" placeholder="Photo?" />
          <Switch label="Save my details" border={false} name="save_details" />
        </Fieldset>
      </FieldsContainer>
      <ActionsContainer>
        <Button>Submit</Button>
        {/* <Button icon="md-checkmark" iconPlacement="right" onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button> */}
      </ActionsContainer>
    </Form>
  )
}
}

export default reduxForm({
  form: 'ingredients'
})(AddIngredientForm);
