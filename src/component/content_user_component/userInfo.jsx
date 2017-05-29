/*
| Imports
*/
import React, { Component } from 'react'

/*
| Styles
*/
const styles = {
	images:{
		width: '100%'
	},
	name:{
		fontSize: '26px',
    lineHeight: '30px',
		marginBottom: '0px'
	},
	login:{
		fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '24px',
    color: '#666',
		marginTop: '0px'
	},
	bio:{
		marginBottom: '12px',
    overflow: 'hidden',
    fontSize: '14px',
    color: '#6a737d'
	},
	noMarginBottom:{
		marginBottom: '0px'
	},
	noDecoration:{
		textDecoration: 'none'
	}
}

/*
| Create Component
|*/
export default class UserInfo extends Component{
	render(){
		return(
			<div className="col-md-3 col-md-offset-1">
				<h4 className="text-center">Información del usuario</h4>
				<figure id="contentInfoUser">
					<img src={this.props.avatar_url} alt={this.props.login} style={styles.images}/>
					<figcaption>
						<h2 style={styles.name}>{this.props.name}</h2>
						<h4 style={styles.login}>{this.props.login}</h4>
						<p style={styles.bio}>{this.props.bio}</p>
						<p style={styles.noMarginBottom}>{this.props.company}</p>
						<p style={styles.noMarginBottom}>{this.props.location}</p>
						<p style={styles.noMarginBottom}><a style={styles.noDecoration} href={this.props.html_url} target="_blank" rel="noopener noreferrer">{this.props.html_url}</a></p>
						<p style={styles.noMarginBottom}><a style={styles.noDecoration} href={this.props.blog} target="_blank" rel="noopener noreferrer">{this.props.blog}</a></p>
					</figcaption>
				</figure>
			</div>
		)
	}
}
