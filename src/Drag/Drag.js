import React, { Component } from 'react'

class Drag extends Component {
  constructor (props) {
    super(props)

    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDragEnd = this.handleDragEnd.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDragStart (e) {
    // console.log('Drag.handleDragStart', e)
  }

  handleDragEnd (e) {
    // console.log('Drag.handleDragEnd', e)
  }

  handleDrag (e) {
    // console.log('Drag.handleDrag', e)
  }

  render () {
    const { children, style, className } = this.props
    return (
      <div
        draggable
        style={ style }
        className={ className }
        onDragStart={ this.handleDragStart}
        onDragEnd={ this.handleDragEnd }
        onDrag={ this.handleDrag }>
        { children }
      </div>
    )
  }
}

export default Drag
