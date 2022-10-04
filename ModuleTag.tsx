import React = require('react');
import { useTheme } from '@mui/material/styles';

import styles from './ModuleTag.module.css';

const ModuleTag = () => {
  const theme = useTheme();

  return (
    <article
      className={
        theme.palette.mode === 'light'
          ? styles.ModuleTagLight
          : styles.ModuleTagDark
      }
    >
      <h1>ModuleTag</h1>
      <p>works with dynamic class names</p>
      Imports like this:
      <br />
      <code>import styles from './ModuleTag.module.css'</code>
      <br />
      <em>not sure it always works</em>
    </article>
  );
};

export default ModuleTag;
