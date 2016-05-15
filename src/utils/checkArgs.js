export function checkArgs(scope, args, mandatory){
	const missingArgs = mandatory.filter(x => args.indexOf(x) == -1)
	if (missingArgs.length > 0){
		throw `${scope}: Missing arguments: ${missingArgs.join(", ")}`
	}
}