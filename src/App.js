import React, { Component } from 'react';
import Form from './Componentes/Form';
import Lista from './Componentes/Lista';

class App extends Component {
  render() {
    return (
        <div>
            <Form />
            <Lista />    
        </div>
    );
  }
}

export default App;
