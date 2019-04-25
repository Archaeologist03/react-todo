import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router,  } from 'react-router-dom';

import './App.scss';

import { updateInitialState } from './store/actions/app';

import Navigation from './components/Navigation/Navigation';
import SubmitForm from './components/SubmitForm/SubmitForm';
import List from './components/List/List';
import DoneList from './components/DoneList/DoneList';

class App extends React.Component {
  componentDidMount() {
    // Get state from server
    this.props.updateInitialState();
  }

  render() {
    return (
      <div className='app-container'>
        <div className='navigation'>
          <Router>
            <Navigation />
          </Router>
        </div>
        <div className='todo-box-container'>
          <SubmitForm />
          <div className='todoListContainer listContainer'>
            <h3 className='ltodoListContainer__header listHeader'>ToDo:</h3>
            <List updateInitialState={this.props.updateInitialState} />
          </div>
          <div className='doneListContainer listContainer'>
            <h3 className='doneListContainer__header listHeader'>Done:</h3>
            <DoneList />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateInitialState: () => dispatch(updateInitialState()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
