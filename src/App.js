import React, { Component } from 'react';
import Input from './Components/Input';
import List from './Components/List';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Todo List</h3>
            <Input />
            <List/>
          </div>
        </div>
      </div>
      
        
    
    );
  }
}

export default App;
