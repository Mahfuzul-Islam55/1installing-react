import React, { Component } from 'react';
import { Fragment } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    onCounterClick=()=>{
        this.setState({count:this.state.count+1});
        
    }

    render() {
        return (
           <Fragment>
               <button onClick={this.onCounterClick}> Counter : {this.state.count}</button>
           </Fragment>
        );
    }
}

export default ClassCounter;