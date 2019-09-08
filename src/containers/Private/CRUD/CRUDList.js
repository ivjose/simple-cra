import * as React from 'react';
import { Link } from 'react-router-dom';

import CRUDService from './api/CRUDService';

import CustomList from './components/CustomList';

const CRUDList = () => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    const loadList = async () => {
      try {
        const response = await CRUDService.postsList();
        setList([...response]);
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadList();
  }, []);
  return (
    <div>
      <h1>CRUDList</h1>
      <Link to="/crud/add">Create</Link>
      {list.length !== 0 && <CustomList list={list} />}
    </div>
  );
};

export default CRUDList;
