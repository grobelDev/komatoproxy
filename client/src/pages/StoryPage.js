import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ReactMarkdown from 'react-markdown';
import '../css/github-markdown.css';

const input = '# This is a header\n\nAnd this is a paragraph';

export default function StoryPage() {
  return (
    <div>
      <Navbar></Navbar>
      <ReactMarkdown source={input} className='markdown-body' />
      <div>StoryPage</div>
    </div>
  );
}
