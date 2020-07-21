import React from 'react';

import styled from 'styled-components';

const PropsHeader = styled.section`
  padding: 1em 0;
  text-align: center;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin: auto;

    @media (min-width: 700px) {
      width: 70%;
      font-size: 2.5rem;
    }
  }

  span {
    background-color: #1f232e;
    border-radius: 5px;
    display: inline-block;
    font-size: 0.9rem;
    font-weight: bold;
    margin: 1em;
    padding: 7px 15px;
  }
`;

const PostHeader = ({ category, timeToRead, title }) => (
  <PropsHeader>
    <span>{category}</span>
    <span>Leitura: {timeToRead}min</span>
    <h1>{title}</h1>
  </PropsHeader>
);

export default PostHeader;
