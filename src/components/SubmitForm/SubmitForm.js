import React from 'react';
import { connect } from 'react-redux';

import { inputChange, updateInitialState } from '../../store/actions/app';
import { addToList } from '../../store/actions/listActions';

import './SubmitForm.scss';

function SubmitForm(props) {
  const handleInputEnter = e => {
    if (e.key === 'Enter') {
      props.onAddToList(props.text);
    }
  };

  const handlerBtnSubmit = e => {
    e.preventDefault();
    // this prevents empty string to go to server, therefore we lose err message, but cut extra complexity on AC and server.
    if (props.text) {
      props.onAddToList(props.text);
    }
  };

  return (
    <div className='submit-container'>
      <input
        className='addItemInput'
        type='text'
        autoFocus={true}
        onChange={props.onInputChange}
        value={props.text}
        onKeyPress={handleInputEnter}
        placeholder='Add task'
      />
      <button className='submitBtn' type='submit' onClick={handlerBtnSubmit}>
        <span className='addBtnText'>Add</span>
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text: state.app.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateInitialState: () => dispatch(updateInitialState()),
    onInputChange: text => dispatch(inputChange(text)),
    onAddToList: newItem => dispatch(addToList(newItem)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubmitForm);
