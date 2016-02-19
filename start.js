console.log("process.env.NODE_ENV", process.env.NODE_ENV)
console.log("process.env.MIN_EXT", process.env.MIN_EXT)

if (process.env.NODE_ENV === "development") {
	require('babel-register');
	require('./src/server/server');
}
else if (process.env.NODE_ENV === "production") {
	require('./lib/server/server');	
}
else {
	console.error("Unrecognised Node environment variable (NODE_ENV = " + process.env.NODE_ENV + ")")
}
