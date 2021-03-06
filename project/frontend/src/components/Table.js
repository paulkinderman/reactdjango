import React, {Component} from 'react';

class Table extends Component {
    render () {
	return (
		this.props.data.length ? 
		<div className="column">
		  <h2 className="subtitle">
		    Showing <strong>{this.props.data.length} items</strong>
		  </h2>
		  <table className="table is-striped">
		    <thead>
		      <tr>
		        {Object.entries(this.props.data[0]).map(el => <th key={el[0]}>{el[0]}</th>)}
		      </tr>
		    </thead>
		    <tbody>
		      {this.props.data.map(el => (
			<tr key={el.id}>
			   {Object.entries(el).map(el => <td key={el[1]}>{el[1]}</td>)}
			</tr>
		       ))}
		    </tbody>
		  </table>
		</div>
		:
		<p> Nothing to Show </p>
		)
	    }
}

export default Table;