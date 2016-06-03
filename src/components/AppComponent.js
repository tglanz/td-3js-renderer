import React from 'react'
import LevelsListComponent from './levels/LevelsListComponent'

export default class AppComponent extends React.Component {
	
	constructor(props){
		super(props)

		this.state = { }
	}

	render(){
		return (
			<LevelsListComponent />
		)
	}
}