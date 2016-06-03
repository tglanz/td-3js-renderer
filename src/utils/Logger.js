import { checkArg } from './argumentsValidator'

let _levels = ['debug', 'info', 'warn', 'error', 'trace']

function ifHasLevel(level, body) {
	if (_levels.indexOf(level)) {
		body()
	}
}

export const createLogger = (scope) => new Logger(scope)

export class Logger {
	includeLevel(level){
		checkArg('logger')

		level = level.toLowerCase()
		if (_levels.indexOf(level) == -1){
			_levels.push(level)
		}
	}

	excludeLevel(level){
		level = level.toLowerCase()
		_levels.splice(_levels.indexOf(level))
	}

	constructor(scope){
		this._scope = scope
	}

	_scoped(message) {
		return `@${this._scope}: ${message}`
	}

	debug(message){
		ifHasLevel('debug', () => console.debug(this._scoped(message)))
	}

	info(message){
		ifHasLevel('info', () => console.info(this._scoped(message)))
	}

	warn(message){
		ifHasLevel('warn', () => console.warn(this._scoped(message)))
	}

	error(message){
		ifHasLevel('error', () => console.error(this._scoped(message)))
	}

	trace(item) {
		ifHasLevel('trace', () => console.trace(item, this._scope))
	}
}