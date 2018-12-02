import React from 'react';


function List(props) {
    let listMapped = props.listArr.map(item => {
       
        return (
             item ? <li 
            className="listItem"
            key={Math.random()}>
                <span className="listItemName">{item}</span>
                <a href="#" ><span className="listItemDelete" onClick={() => props.deleteItem(item)}>Delete</span></a>
            </li> : null
        ) 
    });
    

    

    return (
        <ul>
            {listMapped}
        </ul>
    )
}


export default List;