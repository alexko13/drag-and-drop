import React, { Component } from 'react'
import Draggable from '../Draggable/Draggable'
import DropZone from '../DropZone/DropZone'

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
        <Draggable />
        <DropZone />
      </div>
    )
  }
}

export default App
