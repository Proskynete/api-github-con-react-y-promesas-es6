/*
| Imports
*/
import React, { Component } from 'react';

/*
| Styles
*/
const styles = {
	button:{
		marginTop: '5px'
	}
}

/*
| Create Component
|*/
export default class Search extends Component{
	handleSearch(){
		const username = document.getElementById('input_search').value
	}

	render(){
		return(
			<div className="row">
				<div className="text-center">
					<h3>Buscar información de un perfil de github!</h3>
				</div>
				<div className="col-md-6 col-md-offset-3">
						<div className="form-group">
							<div className="col-md-12">
								<input 
									id="input_search"
									type="text" 
									className="form-control"  
									placeholder="Ingresa el nombre del perfil de github a buscar..." />
							</div>
							<div style={styles.button} className="col-md-12">
								<button onClick={this.handleSearch} id="button_search" className="btn btn-primary btn-block">Buscar!</button>
							</div>
						</div>	
				</div>
			</div>
		)
	}
}