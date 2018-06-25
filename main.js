import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

function counter(state = 0, action){
    if(action.type=='+'){
        //console.log(state)
        return  state+1
    }
    else{
        return state
    }
}

var centralState = combineReducers({
    counter
})

var store = createStore(centralState, applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store}>    
    <App />
</Provider>    
    , document.getElementById('app')

)