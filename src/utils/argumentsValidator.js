export function checkArg(scope, name, arg) {
	if (arg == null || typeof arg === "undefined") {
		throw `${scope}: Missing argument: ${name}`
	}
}

export function checkArgs(scope, args, mandatory){
	const missingArgs = mandatory.filter(x => args.indexOf(x) == -1)
	if (missingArgs.length > 0){
		throw `${scope}: Missing arguments: ${missingArgs.join(", ")}`
	}
}