import React from 'react';

import './SubmitForm.scss';

function SubmitForm(props) {
  return (
    <div className='submit-container'>
      <input
        className='addItemInput'
        type='text'
        autoFocus={true}
        onChange={props.onInputChange}
        value={props.inputText}
        onKeyPress={props.handleInputEnter}
      />
      <button
        className='submitBtn'
        type='submit'
        onClick={props.handlerBtnSubmit}>
        <span className='addBtnText'>Add</span>
      </button>
    </div>
  );
}

export default SubmitForm;
