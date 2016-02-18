console.log("process.env.NODE_ENV", process.env.NODE_ENV)

if (process.env.NODE_ENV === "development") {
	require('babel-register');
	require('./src/server');
}
else if (process.env.NODE_ENV === "production") {
	require('./lib/server');	
}
else {
	console.error("Unrecognised Node environment variable (NODE_ENV = " + process.env.NODE_ENV + ")")
}
