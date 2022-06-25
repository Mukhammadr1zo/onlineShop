import path from 'path'
import fs from 'fs'

const read = (fileName) => {
	try{
	let data = fs.readFileSync( path.join( process.cwd(),  'src', 'database', fileName + '.json' ), 'UTF-8' )
	data = data ? JSON.parse(data) : []
	return data
	}catch(err){
		console.log(err);
	}
}

const write = (fileName, data) => {
	fs.writeFileSync( path.join( process.cwd(), 'src', 'database', fileName + '.json' ), JSON.stringify(data, null, 4) )
	return true
}

export {
	read,
	write
}