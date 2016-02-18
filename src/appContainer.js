const appContainer = (componentHtml, initialState) => {
return `<!DOCTYPE HTML>
<html>
	<head>
		<title>Title goes here...</title>
		<meta charset="UTF-8" />
		<script>
			window.__INITIAL_STATE__ = ${initialState}
		</script>
	</head>
	<body>	
		<div id="root">${componentHtml}</div>
		<script src="bundle.js"></script>
	</body>
</html>`	
}

export default appContainer