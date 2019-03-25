import React from 'react';

function DoneList(props) {
  let doneListMapped = props.doneArr.map(listItem => {
    return listItem.name ? (
      <li className='listItem' key={Math.random()}>
        <span className='listItemName'>{listItem.name}</span>
        <a
          onClick={e => e.preventDefault()}
          className='listDeleteLink listsBtns'
          href='delete'>
          <span
            className='listItemDelete'
            onClick={() => props.onDeleteFromDone(listItem)}>
            Delete
          </span>
        </a>
      </li>
    ) : null;
  });

  return <ul>{doneListMapped}</ul>;
}

export default DoneList;
