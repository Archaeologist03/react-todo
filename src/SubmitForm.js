import React from 'react';

function SubmitForm(props) {


    return (
        <div className="submit">
            <input 
                type="text" 
                onChange={props.typing} 
                value={props.inputVal}/>
            <button 
                className="submitBtn" 
                type="submit" 
                onClick={props.click}>
                    Add
            </button>
        </div>
    )
}

export default SubmitForm;