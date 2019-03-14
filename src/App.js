import React from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions';

import SubmitForm from './components/SubmitForm/SubmitForm';
import List from './components/List/List';
import DoneList from './components/DoneList/DoneList';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.handlerBtnSubmit = this.handlerBtnSubmit.bind(this);
  //   this.handleInputEnter = this.handleInputEnter.bind(this);
  // }

  componentDidMount() {
    // Get state from server
    this.props.updateInitialState();
  }

  handlerBtnSubmit = e => {
    e.preventDefault();
    // this prevents empty string to go to server, therefore we lose err message, but cut extra complexity on AC and server.
    if (this.props.text) {
      this.props.onAddToList(this.props.text);
    }
  };

  handleInputEnter = e => {
    if (e.key === 'Enter') {
      this.props.onAddToList(this.props.text);
    }
  };

  render() {
    return (
      <div className='container'>
        <SubmitForm
          click={this.handlerBtnSubmit}
          inputText={this.props.text}
          onInputChange={this.props.onInputChange}
          inputEnter={this.handleInputEnter}
        />
        <div className='listContainer'>
          <h3 className='listContainer__header listHeader'>ToDo:</h3>
          <List
            onDeleteFromList={this.props.onDeleteFromList}
            onAddToDone={this.props.onAddToDone}
            listArr={this.props.list}
          />
        </div>
        <div className='doneListContainer'>
          <h3 className='DoneListContainer__header listHeader'>Done:</h3>
          <DoneList
            doneArr={this.props.done}
            onDeleteFromDone={this.props.onDeleteFromDone}
          />
        </div>
      </div>
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
