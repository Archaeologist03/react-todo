import React from 'react';
import { connect } from 'react-redux';

import { deleteFromDone } from '../../store/actions/doneActions';

import '../../scss/listItems/listItem.scss';

function DoneList(props) {
  let doneListMapped = props.doneArr.map(listItem => {
    return listItem.name ? (
      <li className='listItem' key={listItem.id || Math.random()}>
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

const mapStateToProps = state => {
  return {
    doneArr: state.app.done,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteFromDone: item => dispatch(deleteFromDone(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoneList);
