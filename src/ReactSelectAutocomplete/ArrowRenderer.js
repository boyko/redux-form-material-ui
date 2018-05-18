import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const ArrowRenderer = props => (props.isOpen ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>);

export default ArrowRenderer;

