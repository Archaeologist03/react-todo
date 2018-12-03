import React from 'react';

function SubmitForm(props) {


    return (
        <div className="submit">
            <input 
                className="addItemInput"
                type="text" 
                autoFocus={true}
                onChange={props.typing} 
                value={props.inputVal}
                onKeyPress={props.inputEnter}
                />
            <button 
                className="submitBtn" 
                type="submit" 
                onClick={props.click}>
                    <span className="addBtnText">Add</span>
            </button>
        </div>
    )
}

export default SubmitForm;