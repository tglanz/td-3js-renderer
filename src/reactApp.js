import React from 'react'
import ReactDom from 'react-dom'
import AppComponent from './components/AppComponent'

import { createLogger } from './utils/Logger'

const _logger = createLogger('reactApp')

export default function render(target) {

	_logger.info('rendering - start')

	ReactDom.render(
		<AppComponent />, target || document.getElementById('react-application')
	)

	_logger.info('rendering - done')
}