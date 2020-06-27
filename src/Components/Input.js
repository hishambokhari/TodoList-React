import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input 
            type="text" 
            className="form-control text-capitalize"
            placeholder="Add a todo item"></input>
          </div>
          <button 
          type="submit"
          className="btn btn-block btn-primary mt-3">Add Item</button>
        </form>
      </div>
    )
  }
}
