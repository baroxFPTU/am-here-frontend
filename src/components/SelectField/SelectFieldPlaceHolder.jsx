import { makeStyles } from '@mui/styles';
import React from 'react';

const usePlaceholderStyles = makeStyles((theme) => ({
  placeholder: {
    color: '#aaa',
  },
}));

const SelectFieldPlaceHolder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};

export default SelectFieldPlaceHolder;
