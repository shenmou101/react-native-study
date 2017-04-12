// console.log(1)
// import {createStore} from "redux";
// console.log(2)

// const initialState = {}
// const hello = (state = initialState, action) => {
// 	console.log(3);
// 	return state 
// };

// console.log(4)
// const store = createStore(hello);

// console.log(5)
// store.subscribe( () => {
// 	console.log(6)
// 	console.log(store.getState())
// });

// console.log(7)
// store.dispatch({
// 	type:"HELLO"
// })
// console.log(8)

/*jquery & redux*/
// import {createStore} from "redux";
// import $ from "jquery";
// const initialState = {number:0}
// $(document.body).append(`
// <div>
// 	<input id='ipt' value=0 type='text' />
// 	<button id='add'>+</button>
// 	<button id='sub'>-</button>
// </div>
// `)

// const calc = (state=initialState,action) => {
// 	console.log(action)
// 	switch(action.type){
// 		case "ADD":
// 			return {number:state.number + 1}
// 		case "SUB":
// 			return {number:state.number - 1}
// 	}
// 	return state
// }

// const store = createStore(calc)

// $("#add").on("click",function(){
// 	store.dispatch({type:'ADD'})
// });

// $("#sub").on("click",function(){
// 	store.dispatch({type:'SUB'})
// });

// store.subscribe(() => {
// 	$("#ipt").val(store.getState().number)
// })

/*react & redux*/
import {createStore} from "redux";
import ReactDOM from "react-dom";
import React, {Component} from "react";
const calc = (state=initialState,action) => {
	console.log(action)
	switch(action.type){
		case "ADD":
			return {number:state.number + 1}
		case "SUB":
			return {number:state.number - 1}
	}
	return state
}

const store = createStore(calc)

class Counter extends Component{
	render(){
		return <div>
			<input id='ipt' value=0 type='text' />
			<button id='add'>+</button>
			<button id='sub'>-</button>
		</div>
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'))