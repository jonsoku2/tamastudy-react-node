import React, { useContext } from 'react';
import PostPresenter from './PostPresenter';
import { AuthContext } from '../../hooks/useAuth';

const PostContainer = () => {
  const value = useContext(AuthContext);
  console.log(value);
  return (
    <div>
      <PostPresenter />
    </div>
  );
};

export default PostContainer;
