import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Bar, Radar } from 'react-native-pathjs-charts';
import PieChart from '../components/Charts/Pie';
import BarChart from '../components/Charts/Bar';
import RadarChart from '../components/Charts/Radar';
import TreeChart from '../components/Charts/Tree';

export class DashboardForm extends Component {
    render() {
        return (
            <Container>
                <Content>
                  <Card style={{
                      flex: 0
                  }}>
                    <CardItem>
                        <Body>
                            <BarChart />
                        </Body>
                    </CardItem>
                    </Card>
                    <Card>
                    <CardItem>
                        <Body>
                          <TreeChart />
                        </Body>
                    </CardItem>
                    </Card>
                    <Card>
                    <CardItem>
                        <Body>
                          <PieChart />
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
