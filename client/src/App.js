import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import CreateEvent from "./pages/CreateEvent/CreateEvent";

class App extends Component {
  render() {
    return (
      <div className="App container">
		<Router>
			<div>
			  <nav>
				<ul>
				  <li>
					<Link to="/">Home</Link>
				  </li>
				  <li>
					<Link to="/create">Create</Link>
				  </li>
				</ul>
			  </nav>

			  <Route path="/" exact component={Home} />
			  <Route path="/create" exact component={CreateEvent} />
			</div>
		</Router>
      </div>
    );
  }
}

export default App;
