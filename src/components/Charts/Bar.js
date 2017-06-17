import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Bar} from 'react-native-pathjs-charts';

export class BarChart extends Component {
    render() {
        const data = [
            [
                {
                    'v': 49,
                    'name': 'apple'
                }, {
                    'v': 42,
                    'name': 'apple'
                }
            ],
            [
                {
                    'v': 69,
                    'name': 'banana'
                }, {
                    'v': 62,
                    'name': 'banana'
                }
            ],
            [
                {
                    'v': 29,
                    'name': 'grape'
                }, {
                    'v': 15,
                    'name': 'grape'
                }
            ]
        ]

        const options = {
            width: 300,
            height: 300,
            margin: {
                top: 20,
                left: 25,
                bottom: 50,
                right: 20
            },
            color: '#2980B9',
            gutter: 20,
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'bottom',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E'
                }
            },
            axisY: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'left',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E'
                }
            }
        }

        return (
            <View>
                <Bar data={data} options={options} accessorKey='v' style={{
                    width: 125,
                    height: 125
                }}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {email: state.loginReducer.email, password: state.loginReducer.password, loading: state.loginReducer.loading};
};

export default connect(mapStateToProps, null)(BarChart);
