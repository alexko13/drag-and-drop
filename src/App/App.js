import React, { Component } from 'react'
import Drag from '../Drag/Drag'
import Drop from '../Drop/Drop'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <Drag>
          <h2>I am Draggable!</h2>
          <span>(this too!)</span>
        </Drag>
        <Drop>
          I am a Drop Target
        </Drop>
      </div>
    )
  }
}

export default App
