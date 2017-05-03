import React, { Component } from 'react';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class IngredientButton extends Component {
  render() {
    return (
      <Button user={this.props.user}
        // onPress={() => {
        //   // if (props) {
        //     // navigation.navigate('AddIngredient')
        //   // } else {
        //     // console.log('this is user', user);
            // console.log('this is props', this.props);
        //     console.log('this gets run');
            // navigation.navigate('SignupForm')
          // }
      // }}
        transparent
      >
        {console.log(this.props)}
        <Icon name="add" size={35} />
      </Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user
  };
};

export default connect(mapStateToProps)(IngredientButton);
// export default IngredientButton
//
// <Button
//   onPress={() => {
//     // if (props) {
//       navigation.navigate('AddIngredient')
//     // } else {
//       // console.log('this is user', user);
//       console.log('this is props', this.props);
//       console.log('this gets run');
//       navigation.navigate('SignupForm')
//     }
// }}
//   transparent
// >
//   <Icon name="add" size={35} />
// </Button>
// )
