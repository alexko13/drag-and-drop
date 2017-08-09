import React, { Component } from 'react'

class Drop extends Component {
  constructor (props) {
    super(props)

    this.handleDragEnter = this.handleDragEnter.bind(this)
    this.handleDragLeave = this.handleDragLeave.bind(this)
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDragEnter (e) {
    // console.log('Drop.handleDragEnter', e)
  }

  handleDragLeave (e) {
    // console.log('Drop.handleDragLeave', e)
  }

  handleDragOver (e) {
    if (e.preventDefault) e.preventDefault() // needed to allow drop
    // console.log('Drop.handleDragOver', e)
  }

  handleDrop (e) {
    // console.log('Drop.handleDrop', e)
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
