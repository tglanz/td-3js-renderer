import React from 'react'
import LevelListItemComponent from './LevelListItemComponent'

export default class LevelsListComponent extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			levels: [1, 2, 3, 4, 5, 6, 7]
		}
	}

	render(){
		return (
			<div> {
				this.state.levels.map(level => <LevelListItemComponent key={ level } levelId={ level } />)
			} </div>
		)
	}
}