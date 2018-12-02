import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import SubmitForm from './SubmitForm';
import List from './List';


// const App = () => {
//     return <div>Hi there!</div>
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            input: '',
        }
        this.handlerBtnSubmit = this.handlerBtnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handlerBtnSubmit(e) {
        e.preventDefault();
        let newItems = [...this.state.list, this.state.input];
        this.setState({
            list: newItems,
            input: '',
        });
        console.log(this.state.list);
    }

    handleChange(e) {
        let typed = e.target.value;
        this.setState({
            input: typed,
        })
    }

    handleDelete(item) {
        let newList = this.state.list.filter(listItem => listItem !== item);
        this.setState({
            list: newList,
        })
    }



    render() {

        return (
            <div className="container">
                <SubmitForm 
                    click={this.handlerBtnSubmit} 
                    inputVal={this.state.input}
                    typing={this.handleChange}>
                </SubmitForm>
                <div className="listContainer">
                    <h3 className="listContainer__header">ToDo:</h3>
                    <List
                        deleteItem={this.handleDelete}
                        listArr={this.state.list}>
                    </List>
                </div>
            </div>
        )
    }

}



ReactDOM.render(
    <App />,
    document.querySelector("#root")
)