/*
| Imports
*/
import React, { Component } from 'react'

/*
| Create Component
|*/
export default class UserInfo extends Component{
	render(){
		return(
			<div className="col-md-5 col-md-offset-1">
				<h4 className="text-center">Información del usuario</h4>
				<section id="contentInfoUser">
					<img src={this.props.avatar_url} alt={this.props.login} />
					<h2>{this.props.name}</h2>
					<h4>{this.props.login}</h4>
					<p>{this.props.bio}</p>
					<p>{this.props.company}</p>
					<p>{this.props.location}</p>
					<p><a href={this.props.html_url} target="_blank" rel="noopener noreferrer">{this.props.html_url}</a></p>
					<p><a href={this.props.blog} target="_blank" rel="noopener noreferrer">{this.props.blog}</a></p>
				</section>
			</div>
		)
	}
}
