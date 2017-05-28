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
	// Constructor
	constructor(props) {
	    super(props)

	    this.state = { 
	    	canSend: true,
	    	username: ''
	   	}

	    this.getGithubUserInfo = this.getGithubUserInfo.bind(this);
	   	this.handleOnChange = this.handleOnChange.bind(this)
	    this.handleSearch = this.handleSearch.bind(this)
	    this.getUserInfo = this.getUserInfo.bind(this)
	    this.getRepos = this.getRepos.bind(this);
	    this.get = this.get.bind(this);
	}

	// funcion encargada de los cambios del input
	handleOnChange(){
		if(document.getElementById('input_search').value.length >= 3){
			this.setState({ 
				canSend: false 
			})
		}else{
			this.setState({
				canSend: true
			})
		}
	}

	// funcion encargada del evento click del boton
	handleSearch(){
		let username = document.getElementById('input_search').value
		this.setState({
			username: username
		})

		this.getGithubUserInfo(username).then(([userInfo, reposInfo]) => {
		    console.log('Info del usuario')
		    console.log(userInfo)
		    console.log('Info de los repos')
		    console.log(reposInfo)
		}).catch(err => {
		    console.log(err)
		})
	}

	// funcion que hace la conexion ajax
	get(url){
		return new Promise(function(resolve, reject){
		    let ajaxCall = new XMLHttpRequest()
		    ajaxCall.open('GET', url)
		    ajaxCall.onload = () => {
		      if(ajaxCall.status === 200) return resolve(ajaxCall.response)
		      reject(new Error(ajaxCall.status))
		    }
		    ajaxCall.onerror = (err) => {
		      reject(err)
		    }
		    ajaxCall.send()
  		})
	}

	// funcion que retorna la promesa de la busqueda del usurname
	getUserInfo(username){
		return this.get(`https://api.github.com/users/${username}`)
	}

	// funcion que retorna la promse de la busqueda de los repos del usuario
	getRepos(repos_url){
		return this.get(repos_url)
	}

	// funcion encargada de obtener la informacion desde github
	getGithubUserInfo(username){
		let getUserPromise = this.getUserInfo(username)

		let getReposPromise = getUserPromise.then(response => {
			let responseJSON = JSON.parse(response)
		    return this.getRepos(responseJSON.repos_url)
		})

		return Promise.all([getUserPromise, getReposPromise])
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
									onChange={this.handleOnChange}
									id="input_search"
									type="text" 
									className="form-control"  
									placeholder="Ingresa el nombre del perfil de github a buscar..." />
							</div>
							<div style={styles.button} className="col-md-12">
								<button onClick={this.handleSearch} id="button_search" disabled={this.state.canSend} className="btn btn-primary btn-block">Buscar!</button>
							</div>
						</div>	
				</div>
			</div>
		)
	}
}