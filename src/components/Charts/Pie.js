import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Pie } from 'react-native-pathjs-charts';
import { fetchIngredientData } from '../../actions';

export class PieChart extends Component {

  componentWillMount() {
    // perform any preparations for an upcoming update
    this.fetchData();
  }

  fetchData() {
      this.props.fetchIngredientData();
  }

  render() {
    // const data = [{
    //   "name": "vegetarian",
    //   "count": 3
    // }, {
    //   "name": "vegan",
    //   "count": 1
    // }, {
    //   "name": "other",
    //   "count": 3
    // }];
    const data = this.props.data;

    const options = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: ['#62C370', '#CC3363', '#20063B'],
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 2000,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
      }
    }

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Pie
          data={data}
          options={options}
          // accessorKey="population" />
          accessorKey="count" />
          <Text style={{ fontWeight: 'bold', fontSize: 16 , textAlign: 'center'}}>Category Breakdown</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.chartsReducer.ingredients_pie
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchIngredientData }, dispatch);
};

// export default connect(null, { emailChanged })(LogInForm);
export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
