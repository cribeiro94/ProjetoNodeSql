import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/users');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(response);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem-vindo ao ReactJS.</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;