import { useDispatch } from 'react-redux';

import { deleteItem } from 'redux/operations'; 

export const ListElements = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteElement = id => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <li>
        {name}
        <span>{number}</span>
        <button type="button" onClick={() => deleteElement(id)}>
          Delete
        </button>
      </li>
    </>
  );
};
