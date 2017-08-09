import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Drag extends Component {
  static __noop = () => {}

  static propTypes = {
    onStart: PropTypes.func,
    onEnd: PropTypes.func,
    onDrag: PropTypes.func
  }

  static defaultProps = {
    onStart: Drag.__noop,
    onEnd: Drag.__noop,
    onDrag: Drag.__noop
  }

  constructor (props) {
    super(props)

    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDragEnd = this.handleDragEnd.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDragStart (e) {
    this.props.onStart(e)
  }

  handleDragEnd (e) {
    this.props.onEnd(e)
  }

  handleDrag (e) {
    this.props.onDrag(e)
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
