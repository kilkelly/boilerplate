const appContainer = (content) => {
return `<!doctype html>
<html>
  <head>
    <title>Title goes here</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="dist/bundle.js"></script>
  </body>
</html>`	
}

export default appContainer