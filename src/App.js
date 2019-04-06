import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import * as actions from './store/actions';

import Navigation from './components/Navigation/Navigation';
import SubmitForm from './components/SubmitForm/SubmitForm';
import List from './components/List/List';
import DoneList from './components/DoneList/DoneList';

class App extends React.Component {
  componentDidMount() {
    // Get state from server
    this.props.updateInitialState();
  }

  handlerBtnSubmit = e => {
    e.preventDefault();
    // this prevents empty string to go to server, therefore we lose err message, but cut extra complexity on AC and server.
    if (this.props.text) {
      this.props.onAddToList(this.props.text);
      // this.props.updateInitialState();
    }
  };

  handleInputEnter = e => {
    if (e.key === 'Enter') {
      this.props.onAddToList(this.props.text);
      // this.props.updateInitialState();
    }
  };

  render() {
    return (
      <Router>
        <Navigation />

        <div className='container'>
          <SubmitForm
            handlerBtnSubmit={this.handlerBtnSubmit}
            inputText={this.props.text}
            onInputChange={this.props.onInputChange}
            handleInputEnter={this.handleInputEnter}
          />
          <div className='todoListContainer listContainer'>
            <h3 className='ltodoListContainer__header listHeader'>ToDo:</h3>
            <List
              updateInitialState={this.props.updateInitialState}
              onDeleteFromList={this.props.onDeleteFromList}
              onAddToDone={this.props.onAddToDone}
              listArr={this.props.list}
            />
          </div>
          <div className='doneListContainer listContainer'>
            <h3 className='doneListContainer__header listHeader'>Done:</h3>
            <DoneList
              doneArr={this.props.done}
              onDeleteFromDone={this.props.onDeleteFromDone}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.app.text,
    list: state.app.list,
    done: state.app.done,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateInitialState: () => dispatch(actions.updateInitialState()),
    onInputChange: text => dispatch(actions.inputChange(text)),
    onAddToList: newItem => dispatch(actions.addToList(newItem)),
    onDeleteFromList: item => dispatch(actions.deleteFromList(item)),
    onAddToDone: doneItem => dispatch(actions.addToDone(doneItem)),
    onDeleteFromDone: item => dispatch(actions.deleteFromDone(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
