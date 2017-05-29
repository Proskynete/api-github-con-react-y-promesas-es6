/*
| Imports
*/
import React, { Component } from 'react'
import Repository from './repository'

/*
| Create Component
|*/
export default class Repositories extends Component{
	handleRepository(){
		if(this.props.reposInfo){
			return this.props.reposInfo.map(repo => {
				return (
					<Repository
						key={repo.id}
						name={repo.name}
						html_url={repo.html_url}
						description={repo.description}
						language={repo.language}
						stargazers_count={repo.stargazers_count} />
				)
			})
		}else{
			return ""
		}
	}


	render(){
		return(
			<div className="col-md-8">
				<h4 className="text-center">Repositorios</h4>
				<section className="row">
					{this.handleRepository()}
				</section>
			</div>
		)
	}
}
