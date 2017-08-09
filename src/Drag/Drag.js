import React, { Component } from 'react'

class Drag extends Component {
  constructor (props) {
    super(props)

    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
    this.handleDragEnd = this.handleDragEnd.bind(this)
  }

  handleDragStart (e) {
    console.log('Drag.handleDragStart', e)
  }

  handleDrag (e) {
    console.log('Drag.handleDrag', e)
  }

  handleDragEnd (e) {
    console.log('Drag.handleDragEnd', e)
  }

  render () {
    const { children, style, className } = this.props
    return (
      <div
        draggable
        style={ style }
        className={ className }
        onDragStart={ this.handleDragStart}
        onDrag={ this.handleDrag }
        onDragEnd={ this.handleDragEnd }>
        { children }
      </div>
    )
  }
}

export default Drag
