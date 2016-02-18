import { connect } from "react-redux"
import store from "../store"
import * as actionCreators from "../action_creators"
import StoreTest from "./StoreTest"

const mapStateToProps = (state) => {	
	return {		
		text: state.get("text")
	}
}

const StoreTestContainer = connect(
	mapStateToProps,
	actionCreators
)(StoreTest)
export default StoreTestContainer

