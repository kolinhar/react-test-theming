import React = require('react');
import { useTheme } from '@mui/material/styles';
import main from './index.module.css';

import './MyTag.css';

const MyTag = () => {
  const theme = useTheme();

  return (
    <article
      className={theme.palette.mode === 'light' ? 'MyTagLight' : 'MyTagDark'}
    >
      <h1>SimpleTag</h1>
      <p>works with hard-coded class name</p>
      Imports like this:&nbsp;
      <code>import './MyTag.css'</code>
      <p className={main.blueFont}>Write a short text in blue color</p>
    </article>
  );
};

export default MyTag;
