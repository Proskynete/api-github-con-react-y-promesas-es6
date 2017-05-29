/*
| Imports
*/
import React, { Component } from 'react'

/*
| Styles
|*/
const styles = {
	containerRepo:{
		border: '1px solid #d1d5da',
		borderRadius: '3px',
		padding: '16px',
		marginBottom: '16px',
		marginRight: '10px'
	},
	nameProyect:{
		fontSize: '14px',
		display: 'block',
		marginTop: '10px',
		fontWeight: 'bolder'
	},
	description:{
		fontSize: '12px',
		color: '#586069',
		display: 'block',
		height: '30px'
	},
	language:{
		fontSize: '10px',
		color: '#586069',
		display: 'block',
		marginBottom: '-10px',
		marginTop: '16px'
	}
}

/*
| Create Component
|*/
export default class Repository extends Component{
	render(){
		return(
      <article style={styles.containerRepo} className="col-md-5">
	    	<h3 style={styles.nameProyect}><a href={this.props.html_url} target="_blank" rel="noopener noreferrer">{this.props.name}</a></h3>
	      <p style={styles.description}>{(this.props.description !== '')? this.props.description : ''}</p>
	      <p className="text-right" style={styles.language}>Lenguaje utilizado: <span>{this.props.language}</span></p>
  		</article>
		)
	}
}
