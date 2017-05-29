/*
| Imports
*/
import React, { Component } from 'react'

/*
| Create Component
|*/
export default class Repository extends Component{
	render(){
		return(
      <article>
        <a href={this.props.html_url} target="_blank" rel="noopener noreferrer">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <p>
            <span>{this.props.language}</span>
            <span>{(this.props.stargazers_count !== 0)? this.props.stargazers_count: ''}</span>
          </p>
        </a>
  		</article>
		)
	}
}
