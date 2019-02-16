import React from 'react';

function DoneList(props) {
  let doneListMapped = props.doneArr.map(listItem => {
    return (
      <li className="listItem" key={Math.random()}>
        <span className="listItemName">{listItem}</span>
        <a className="listDeleteLink listsBtns" >
          <span
            className="listItemDelete"
            onClick={() => props.onDeleteFromDone(listItem)}>
            Delete
          </span>
        </a>
      </li>
    );
  });

  return <ul>{doneListMapped}</ul>;
}

export default DoneList;
