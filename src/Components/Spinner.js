import React, { Component } from 'react'
import loading from './Spinner-1s-200px.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img style={{ width: "3rem" }} src={loading} alt="loading "/>
      </div>
    )
  }
}
