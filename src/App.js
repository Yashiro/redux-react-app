import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun } from './index.redux'

@connect(
    state => ({num:state}),
    {addGun, removeGun}
)
class App extends Component {
  
  render() {
    return (
      <div>
        <h1>Now Have Gun {this.props.num}</h1>
        <button onClick={this.props.addGun}>Apply Gun</button>
        <button onClick={this.props.removeGun}>Return Gun</button>
      </div>
    )
  }
}
export default App