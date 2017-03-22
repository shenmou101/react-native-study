console.log(1)
import {createStore} from "redux";
console.log(2)

const initialState = {}
const hello = (state = initialState, action) => {
	console.log(3);
	return state 
};

console.log(4)
const store = createStore(hello);

console.log(5)
store.subscribe( () => {
	console.log(6)
	console.log(store.getState())
});

console.log(7)
store.dispatch({
	type:"HELLO"
})
console.log(8)