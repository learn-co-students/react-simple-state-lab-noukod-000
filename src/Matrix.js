import React, { Component } from 'react';
import { dafaultPattern } from './data';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    // vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    vals.map((val, index) => <Cell key={index} value={val}/>)

  )
  
  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div key={index} className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: dafaultPattern
}
