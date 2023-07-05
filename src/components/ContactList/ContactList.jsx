import { useEffect } from 'react';
import { List } from './ContactList.styled';
import { ListElements } from 'components/ListElements/ListElements';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () =>
    items.filter(({ id, name, phone }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <List>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items?.length > 0 && getFilteredContacts().map(({ id, name, phone }) => (
        <ListElements key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
};




