/*
| Imports
*/
import React, { Component } from 'react';
import Search from '../search_component/index'

/*
| Create Component
*/
export default class App extends Component{
	render(){
		return(
			<div className="container-fluid">
				<Search />
			</div>
		)
	}
}