import React from 'react';

import '../../scss/listItems/listItem.scss';

function List(props) {
  let listMapped = props.listArr.map(item => {
    return item.name ? (
      <li className='listItem' key={Math.random()}>
        <span className='listItemName'>{item.name}</span>
        <a
          onClick={e => e.preventDefault()}
          className='listDeleteLink listsBtns'
          href='delete'>
          <span
            className='listItemDelete'
            onClick={() => props.onDeleteFromList(item)}>
            Delete
          </span>
        </a>
        <a
          onClick={e => e.preventDefault()}
          className='listDoneLink listsBtns'
          href='done'>
          <span
            className='listItemDone'
            onClick={() => props.onAddToDone(item.name)}>
            Done
          </span>
        </a>
      </li>
    ) : null;
  });

  return <ul className="todoList-container">{listMapped}</ul>;
}

export default List;
