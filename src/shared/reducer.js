import { fromJS } from "immutable"
// Redux combineReducers treats state object as a plain JavaScript object.
// combineReducers created using redux-immutable uses Immutable.js API to iterate the state.
import { combineReducers } from "redux-immutable"
import { 
	NEVER_CALLED,
} from "./action_creators"

const reducer = (	state = fromJS({ text: "Hello from Redux store" }),
					action
				) => {
	switch(action.type) {
		case NEVER_CALLED:					
			return state.set(text, "never called")
		default:
			return state			
	}
}

/*
const lightSwitch = (state = "OFF", action) => {
	switch(action.type) {
		case USE_LIGHT_SWITCH:
			return state === "OFF" ? "ON": "OFF"
		default:
			return state
	}
}

const todos = (state = fromJS([
							{
								text: "Make bed"
							},
							{
								text: "Buy groceries"
							}
						]), action) => {
	switch(action.type) {
		default:
			return state
	}
}

const reducer = combineReducers({
	lightSwitch,
	todos
})
*/

export default reducer