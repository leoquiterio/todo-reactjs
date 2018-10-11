import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.__addLista    = this.__addLista.bind(this);
    this.__removerItem = this.__removerItem.bind(this);

    this.state = {
      lista: [],
      valor: ''
    }
  }


  __addLista(event) {
    event.preventDefault();
    this.setState({
      valor: '',
      lista: [...this.state.lista, this.state.valor]
    })
  }

  __removerItem(index) {
    const todos = this.state.lista.filter( (item, i) => {
      return i !== index;
    })
    this.setState({ lista: todos });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.__addLista}>
          <h2>Digite a tarefa:</h2>
          <input onChange={ e => this.setState({ valor: e.target.value }) } value={ this.state.valor } type="text" />
          <input type="submit" value="Adicioniar" />
        </form>
        
        <ul>
          { this.state.lista.map( (item, i) =>
            <li key={ i }>{ item }
              <small onClick={ e => this.__removerItem(i) } style={{ marginLeft:'30px', cursor:'pointer' }}><b>[Remover]</b></small>
            </li>
           
          )}
        </ul>   

      </div>
    );
  }
}

export default App;