import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super(props)
        this.state = {
         color: this.props.value   
        }
    }

    
  handleClick = () => {
        const handleClick = '#333'
        this.setState({
          color: handleClick
        })
      }

    render() {
        return (
          <div
           className="cell"
           style={{backgroundColor: this.state.color}}
           onClick={this.handleClick}>
          </div>
     
        )
            
      }
     }