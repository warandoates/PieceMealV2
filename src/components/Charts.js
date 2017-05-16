import { Body, Card, CardItem, Container, Content } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChart from '../components/Charts/Bar';
import PieChart from '../components/Charts/Pie';
import TreeChart from '../components/Charts/Tree';

class DashboardForm extends Component {
	render() {
		return (
			<Container>
				<Content>
					<Card style={{
						flex: 0,
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
		);
	}
}

const mapStateToProps = (state) => {
	return {
		email: state.loginReducer.email,
		password: state.loginReducer.password,
		loading: state.loginReducer.loading,
	};
};

export default connect(mapStateToProps, null)(DashboardForm);
