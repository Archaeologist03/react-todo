import React from 'react';
import { connect } from 'react-redux';

import { deleteFromList } from '../../store/actions/listActions';
import { addToDone } from '../../store/actions/doneActions';

import '../../scss/listItems/listItem.scss';

export function List(props) {
  let listMapped = props.listArr.map(item => {
    return item.name ? (
      <li className='listItem' key={item.id || Math.random()}>
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

  return <ul className='todoList-container'>{listMapped}</ul>;
}

const mapStateToProps = state => {
  return {
    listArr: state.app.list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteFromList: item => dispatch(deleteFromList(item)),
    onAddToDone: doneItem => dispatch(addToDone(doneItem)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
