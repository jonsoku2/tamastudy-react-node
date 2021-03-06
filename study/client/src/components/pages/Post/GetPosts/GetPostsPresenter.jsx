import React from 'react';
import PostItem from '../../../organisms/PostItem';
import styled from '@emotion/styled';

const GetPostsPresenter = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostItem key={post._id} {...post} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: 300px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default GetPostsPresenter;
