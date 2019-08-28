import React from 'react';
import { List } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomList = ({ list, match }) => {
  return (
    <div style={{ padding: 20 }}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        rowKey="id"
        renderItem={item => (
          <List.Item
            actions={[
              // eslint-disable-next-line react/jsx-key
              <Link to={`${match.path}/view/${item.id}`}>view</Link>,
              // eslint-disable-next-line react/jsx-key
              <Link to={`${match.path}/edit/${item.id}`}>edit</Link>,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.body} />
          </List.Item>
        )}
      />
    </div>
  );
};

CustomList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default withRouter(CustomList);
