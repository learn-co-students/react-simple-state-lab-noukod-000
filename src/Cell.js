import React, { component } from 'react';
import Matrix from './Matrix'

export default class Cell extends React.Component {

    constructor(props){
        super(props)
        this.state = { color: this.props.value }
    }

    handleClick = () =>{
        this.setState(
            { color: "#000" }
        )
    }

    render (){
        return(
            <div className="cell"
            onClick={this.handleClick}
             >
            </div>
        )
    }
}