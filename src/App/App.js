import React, { Component } from 'react'
import Drag from '../Drag/Drag'
import Drop from '../Drop/Drop'

class App extends Component {
  constructor (props) {
    super(props)

    this.test = this.test.bind(this)
  }

  test (e) {
    // console.trace()
  }

  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <Drag
          onStart={ this.test }
          onEnd={ this.test }
          onDrag={ this.test }>
          <h2>I am Draggable!</h2>
          <span>(this too!)</span>
        </Drag>
        <Drop
          onEnter={ this.test }
          onLeave={ this.test }
          onHover={ this.test }
          onDrop={ this.test }>
          <span>I am a Drop Target</span>
        </Drop>
      </div>
    )
  }
}

export default App
