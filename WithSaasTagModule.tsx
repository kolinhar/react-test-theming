import React = require('react');
import { useTheme } from '@mui/material/styles';

import styles from './WithSaasTagModule.module.scss';

const SaasTag = () => {
  const theme = useTheme();

  return (
    <article
      className={
        theme.palette.mode === 'light'
          ? styles.MySTagMLight
          : styles.MySTagMDark
      }
    >
      <h1>WithSaasTag</h1>
      <p>works with dynamic class names</p>
      Imports like this:&nbsp;
      <code>import styles from './WithSaasTagModule.scss'</code>
      <br />
      <em>not sure it always works</em>
    </article>
  );
};

export default SaasTag;
