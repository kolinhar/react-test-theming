import React = require('react');
import { useTheme } from '@mui/material/styles';

import './WithSaasTag.scss';

const SaasTag = () => {
  const theme = useTheme();

  return (
    <article
      className={
        theme.palette.mode === 'light' ? 'MySaasTagLight' : 'MySaasTagDark'
      }
    >
      <h1>WithSaasTag</h1>
      <p>works with hard-coded class name</p>
      Imports like this:&nbsp;
      <code>import './WithSaasTag.scss'</code>
    </article>
  );
};

export default SaasTag;
