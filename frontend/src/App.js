import axios from 'axios';
import React from 'react';
import Main from './components/Main/Main'
import Header from './components/Header/Header'

class App extends React.Component{
  state = {details: [],}

  componentDidMount(){
    let data;
    axios.get('http://localhost:3000')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err =>{
      console.log(err);
    })
  }
  render(){
    return (
      <div>
        <Header/>
        <Main/>
      </div>
      
    )
  }
}

export default App;