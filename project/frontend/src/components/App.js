import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataProvider from './DataProvider';
import Table from './Table';
import Form from './Form';

class App extends Component {
    render() {
	return (
		<React.Fragment>
		  <DataProvider endpoint='api/lead/' 
		              render={data => <Table data={data} /> } />
		  <Form endpoint='api/lead/' />
		</React.Fragment>
		)
    }
}

export default App;