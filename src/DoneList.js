import React from 'react';

function DoneList(props) {
    let doneListMapped = props.doneArr.map(listItem => {
        return (
            <li 
                className="listItem"
                key={Math.random()}>
                    <span className="listItemName">{listItem}</span>
                    <a className="listDeleteLink listsBtns" href="#" ><span className="listItemDelete" onClick={() => props.deleteItem(listItem)}>Delete</span></a>
            </li>
        )
    });

    return(
        <ul>
            {doneListMapped}
        </ul>
    ) 

    
}






export default DoneList;
