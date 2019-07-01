import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = (props) => {
	useEffect(() => {
		props.fetchUser();
		console.log(props);
	});
	return (
		<div className='container'>
			<Router>
				<div>
					<Header />
					<Route exact path='/' component={Landing} />
					<Route path='/surveys' component={DashBoard} />
					<Route path='/surveys/new' component={SurveyNew} />
				</div>
			</Router>
		</div>
	);
};

export default connect(
	null,
	actions
)(App);
