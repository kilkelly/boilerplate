import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import createBrowserHistory from "history/lib/createBrowserHistory"
import createMemoryHistory from "history/lib/createMemoryHistory"
import isNode from "detect-node"
import App from "./components/App"
import Default from "./components/Default"
import StoreTestContainer from "./components/StoreTestContainer"

let history = isNode 
					? createMemoryHistory()
					: createBrowserHistory()

export const routes = 
<Router history={history}>
	<Route path="/" component={App}>
		<IndexRoute component={Default} />
		<Route path="storetest" component={StoreTestContainer} />
	</Route>
</Router>;
