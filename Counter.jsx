import React from 'react'

export default class Counter extends React.Component{
    constructor(){
        super()
        this.state = {v: 0}
    }

    componentWillReceiveProps(props){
        console.log(props)
        this.setState({v: props.value})
    }


    render(){
        return(
            <div>
                <div>{this.state.v}</div>
                <button onClick={this.props.increase}>+</button>           
            </div>
        )
    }
}