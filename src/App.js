import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import { updateInitialState } from './store/actions/app';
import { loadUser } from './store/actions/authActions';

import Navigation from './components/Navigation/Navigation';
import SubmitForm from './components/SubmitForm/SubmitForm';
import List from './components/List/List';
import DoneList from './components/DoneList/DoneList';

class App extends React.Component {
  componentDidMount() {
    // Get state from server
    this.props.updateInitialState();
    // Load user initially(on refresh) if there is ID and TOKEN in localStorage
    this.props.loadUser();
  }

  render() {
    return (
      <div className='app-container'>
        <div className='navigation'>
          <Router basename={process.env.PUBLIC_URL}>
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateInitialState: () => dispatch(updateInitialState()),
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
