import React, { Fragment } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import BlogSections from '../components/BlogSections';

export default function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <BlogSections></BlogSections>
      </div>
    </div>
  );
}

const DarkBody = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
