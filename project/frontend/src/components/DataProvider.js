import React, {Component } from 'react';

class DataProvider extends Component {
    constructor(props) {
	super(props);

	this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading..."
        }
    }

    componentDidMount() {
	fetch(this.props.endpoint)
	    .then(response => {
		    if (response.status !== 200) {
			return this.setState({placeholder: "Something went wrong" });
		    }
		    return response.json();
		})
	    .then(data => this.setState({data: data, loaded: true}));
    }

    render() {
	return this.state.loaded ? this.props.render(this.state.data) : <p>{this.state.placeholder}</p>;
    }
}

export default DataProvider;

