import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <h2>Digite a tarefa:</h2>
                    <input type="text" />
                    <input type="submit" value="Adicioniar" />
                </form>
            </div>
        );
    }
}
export default Form;