import React from 'react';

import { Select as AntSelect } from 'components/AntFormik';
import CRUDService from '../api/CRUDService';

const MemoSelect = () => {
  const [dropdown, getDropdown] = React.useState([]);
  const children = [];

  React.useEffect(() => {
    const loadList = async () => {
      try {
        const response = await CRUDService.userList();

        getDropdown([...response]);
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadList();
  }, []);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dropdown.length; i++) {
    children.push(
      <AntSelect.Option key={dropdown[i].id}>
        {dropdown[i].name}
      </AntSelect.Option>
    );
  }

  return (
    <AntSelect showSearch name="userId" label="Fruits Select">
      {children}
    </AntSelect>
  );
};

const UserSelect = React.memo(MemoSelect);

export default UserSelect;
