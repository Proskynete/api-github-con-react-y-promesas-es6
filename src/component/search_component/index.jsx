/*
| Imports
*/
import React, { Component } from 'react'
import '../../index.css'
import logo from '../../logo.svg'
import UserInfo from '../content_user_component/userInfo'
import Repositories from '../content_user_component/repositories'

/*
| Styles
*/
const styles = {
	marginTop:{
		marginTop: '30px'
	},
	button:{
		marginTop: '5px'
	},
	containterImg:{
		textAlign: 'center',
		marginTop: '50px'
	}
}

/*
| Create Component
|*/
export default class Content extends Component{
	// Constructor
	constructor(props) {
	    super(props)

	    this.state = {
	    	canSend: true,
				userInfoName: '',
				userInfoLogin: '',
				userInfoAvatarUrl: '',
				userInfoBio: '',
				userInfoBlog: '',
				userInfoCompany: '',
				userInfoHtmlUrl: '',
				userInfoLocation: '',
				reposInfo: []
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
		if(document.getElementById('input_search').value.length >= 1){
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
		let img = document.getElementById('imageLoader')
		let containerInfoGithub = document.getElementById('containerInfoGithub')

		img.classList.remove('hidden')
		containerInfoGithub.classList.add('hidden')

		this.getGithubUserInfo(username).then(([userInfo, reposInfo]) => {
			let userInfoJSON = JSON.parse(userInfo)
			let reposInfoJSON = JSON.parse(reposInfo)
			this.setState({
				userInfoName: userInfoJSON.name,
				userInfoLogin: userInfoJSON.login,
				userInfoAvatarUrl: userInfoJSON.avatar_url,
				userInfoBio: userInfoJSON.bio,
				userInfoBlog: userInfoJSON.blog,
				userInfoCompany: userInfoJSON.company,
				userInfoHtmlUrl: userInfoJSON.html_url,
				userInfoLocation: userInfoJSON.location,
				reposInfo: reposInfoJSON
			})
			img.classList.add('hidden')
			containerInfoGithub.classList.remove('hidden')
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
			<div className="container-fluid">
				<div className="col-md-12">
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

					<div id="imageLoader" className="hidden" style={styles.containterImg}>
						<img src={logo} className="reactLogo" alt="logo" />
					</div>

					<div id="containerInfoGithub" className="row hidden" style={styles.marginTop}>
						<UserInfo
							name={this.state.userInfoName}
							login={this.state.userInfoLogin}
							avatar_url={this.state.userInfoAvatarUrl}
							bio={this.state.userInfoBio}
							blog={this.state.userInfoBlog}
							company={this.state.userInfoCompany}
							html_url={this.state.userInfoHtmlUrl}
							location={this.state.userInfoLocation} />

						<Repositories reposInfo={this.state.reposInfo}/>
					</div>
				</div>
			</div>
		)
	}
}
