import React from "react"
import { Link } from "react-router"

export default class App extends React.Component {

	render() {
		return(
			<div>
				<h1>Hello React</h1>
				<Link to="/">Home</Link>&nbsp;
				<Link to="storetest">Store Test</Link>
				{this.props.children}
			</div>
		)
	}

}