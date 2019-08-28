import React from 'react';
import PropTypes from 'prop-types';

import CRUDService from './api/CRUDService';

import { postsInitialData } from './constants';

const CURDView = ({ match }) => {
  const [post, getPost] = React.useState({ ...postsInitialData });

  React.useEffect(() => {
    const loadData = async id => {
      try {
        const response = await CRUDService.getPost(id);
        getPost({ ...response });
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadData(match.params.id);
  }, [match.params.id]);

  console.log(post, 'WOOOOOT1');

  return (
    <div style={{ padding: 10 }}>
      <h1>
        <b>Title:</b>
        {post.title}
      </h1>
      <h2>
        <b>Info:</b>
        {post.body}
      </h2>
    </div>
  );
};

CURDView.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default CURDView;
