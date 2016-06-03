/*
	DEBUG API

	Use for development
*/

import * as config from '../config'
import { checkArgs } from '../utils/argumentsValidator'
import { create } from 'axios'

const instance = create({
	baseURL: config.server.baseUrl
})

instance.interceptors.response.use(res => {
	console.log(res)
})

export async function getMap(args){
	checkArgs("debugApi.getMap", args, "mapId")

	return await instance.get(`maps/${args.mapId}`)
}

console.log("Whatsup from debugApi")