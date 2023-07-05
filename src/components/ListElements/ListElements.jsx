import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations'; 

export const ListElements = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteElement = id => {
    dispatch(deleteContact(id));
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
