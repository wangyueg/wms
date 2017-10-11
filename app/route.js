import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Login from './Login';

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const Topic = ({match}) => (
	<div>
		<h2>{match.params.topicId}</h2>
	</div>
)

const Topics = ({match}) => (
	<div>
		<h2>Togic</h2>
		<ul>
			<li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
			<li><Link to={`${match.url}/components`}>Components</Link></li>
			<li><Link to={`${match.url}/props-v-state`}> Props v. State</Link></li>
		</ul>

		<hr />

		<Route path={`${match.url}/:topicId`} component={Topic}/>
	    <Route path={match.url} render={() => (
	      <h3>Please select a topic.</h3>
	    )}/>
	</div>
)

export default history => {
	return (
		<Router>
		    <div>
		      <ul>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/about">About</Link></li>
		        <li><Link to="/topics">Topics</Link></li>
		      </ul>

		      <hr/>

		      <Route exact path="/" component={Home}/>
		      <Route path="/about" component={About}/>
		      <Route path="/topics" component={Topics}/>
		    </div>
		</Router>
	);
}