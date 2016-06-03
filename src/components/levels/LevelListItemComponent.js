import React from 'react'

export default class LevelListItemComponent extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>{ this.props.levelId }</div>
		)
	}
}