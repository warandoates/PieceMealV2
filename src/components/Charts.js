import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {Bar, Radar} from 'react-native-pathjs-charts';

class DashboardForm extends Component {
    render() {
        const barData = [
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

        const barOptions = {
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

        const radarData = [
            {
                "speed": 74,
                "balance": 29,
                "explosives": 40,
                "energy": 40,
                "flexibility": 30,
                "agility": 25,
                "endurance": 44
            }
        ]

        let radarOptions = {
            width: 290,
            height: 290,
            margin: {
                top: 20,
                left: 20,
                right: 30,
                bottom: 20
            },
            r: 150,
            max: 100,
            fill: "#2980B9",
            stroke: "#2980B9",
            animate: {
                type: 'oneByOne',
                duration: 200
            },
            label: {
                fontFamily: 'Arial',
                fontSize: 14,
                fontWeight: true,
                fill: '#34495E'
            }
        }

        return (
            <Container>
                <Content>
                    <Card style={{
                        flex: 0
                    }}>
                        <CardItem>
                            <Body>
                                <Bar data={barData} options={barOptions} accessorKey='v' style={{
                                    width: 125, height: 125
                                }}/>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                    <CardItem>
                        <Body>
                            <Radar data={radarData} options={radarOptions} style={{
                                width: 125, height: 125
                            }}/>
                        </Body>
                    </CardItem>
                  </Card>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {email: state.loginReducer.email, password: state.loginReducer.password, loading: state.loginReducer.loading};
};

export default connect(mapStateToProps, null)(DashboardForm);
