import React from 'react';

function List(props) {

  let listMapped = props.listArr.map(item => {
    
    return item ? (
      <li className="listItem" key={Math.random()}>
        <span className="listItemName">{item}</span>
        <a className="listDeleteLink listsBtns" href="#">
          <span
            className="listItemDelete"
            onClick={() => props.onDeleteFromList(item)}>
            Delete
          </span>
        </a>
        <a className="listDoneLink listsBtns" href="#">
          <span className="listItemDone" onClick={() => props.onAddToDone(item)}>
            Done
          </span>
        </a>
      </li>
    ) : null;
  });

  return <ul>{listMapped}</ul>;
}

export default List;
