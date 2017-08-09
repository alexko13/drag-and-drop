import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Drop extends Component {
  static __noop = () => {}

  static propTypes = {
    onEnter: PropTypes.func,
    onLeave: PropTypes.func,
    onHover: PropTypes.func,
    onDrop: PropTypes.func
  }

  static defaultProps = {
    onEnter: Drop.__noop,
    onLeave: Drop.__noop,
    onHover: Drop.__noop,
    onDrop: Drop.__noop,
  }

  constructor (props) {
    super(props)

    this.handleDragEnter = this.handleDragEnter.bind(this)
    this.handleDragLeave = this.handleDragLeave.bind(this)
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDragEnter (e) {
    this.props.onEnter(e)
  }

  handleDragLeave (e) {
    this.props.onLeave(e)
  }

  handleDragOver (e) {
    if (e.preventDefault) e.preventDefault() // needed to allow drop

    this.props.onHover(e)
  }

  handleDrop (e) {
    this.props.onDrop(e)
  }

  render () {
    const { children, style, className } = this.props

    return (
      <div
        style={ style }
        className={ className }
        onDragEnter={ this.handleDragEnter }
        onDragLeave={ this.handleDragLeave }
        onDragOver={ this.handleDragOver }
        onDrop={ this.handleDrop }>
        { children }
      </div>
    )
  }
}

export default Drop
