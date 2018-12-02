import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import SubmitForm from './SubmitForm';
import List from './List';
import DoneList from './DoneList';


// const App = () => {
//     return <div>Hi there!</div>
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            done: [],
            input: '',
        }
        this.handlerBtnSubmit = this.handlerBtnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleDoneDelete = this.handleDoneDelete.bind(this);

    }

    handlerBtnSubmit(e) {
        e.preventDefault();
        let newItems = [...this.state.list, this.state.input];
        this.setState({
            list: newItems,
            input: '',
        });
        // console.log(this.state.list);
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

    handleDone(item) {
        let doneList = this.state.list.filter(listItem => listItem === item);
        let newList = this.state.list.filter(listItem => listItem !== item);
        this.setState({
            list: newList,
            done: [...this.state.done, ...doneList],
        });
        console.log(this.state);
    }

    handleDoneDelete(item) {
        let newDoneList = this.state.done.filter(listItem => listItem !== item);
        this.setState({
            done: newDoneList,
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
                    <h3 className="listContainer__header listHeader">ToDo:</h3>
                    <List
                        deleteItem={this.handleDelete}
                        doneItem={this.handleDone}
                        listArr={this.state.list}>
                    </List>
                </div>
                <div className="doneListContainer">
                    <h3 className="DoneListContainer__header listHeader">Done:</h3>
                    <DoneList
                        doneArr={this.state.done}
                        deleteItem={this.handleDoneDelete}>    
                    </DoneList>
                </div>
            </div>
        )
    }

}



ReactDOM.render(
    <App />,
    document.querySelector("#root")
)