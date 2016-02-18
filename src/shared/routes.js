import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import App from "./components/App"
import Default from "./components/Default"
import StoreTestContainer from "./components/StoreTestContainer"

export const routes = 
<Router>
	<Route path="/" component={App}>
		<IndexRoute component={Default} />
		<Route path="storetest" component={StoreTestContainer} />
	</Route>
</Router>;
