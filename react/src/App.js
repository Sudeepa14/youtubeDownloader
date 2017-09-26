import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      url:''
    }
    this.handleChanges=this.handleChanges.bind(this);
    this.post=this.post.bind(this);
  }
//onSubmit={this.handleChanges}
  handleChanges(event){
      this.setState({
        url:event.target.value
      });
  }
  post(event){ 
     console.log("fdfdd"); 
      axios.post('/download', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">        
          <div className="form-group"  > 
             <form onSubmit={this.post}> 
               <input
                className="video"
                id="vid"
                type="text"
                placeholder="Enter The URL"
                onChange={this.handleChanges}
               />
               <input className="mirror"
                 type="text"
                 value={this.state.url}
               />
               <button className="btn btn-primary" type="submit">Upload</button>
              </form> 
          </div>    
      </div>
    );
  }
}

export default App;
