/* eslint-disable react/prop-types */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import styles from './styles';

import MuiReactSelectAutocomplete from './MuiReactSelectAutocomplete';
import ValueComponent from './ValueComponent';
import OptionComponent from './OptionComponent';
import ArrowRenderer from './ArrowRenderer';

const ClearRenderer = () => <ClearIcon/>;
// const NoResultsText = () => <Typography>{'No results found'}</Typography>;

const MaterialUiReactSelect = props => (<MuiReactSelectAutocomplete {...props} />);

MaterialUiReactSelect.defaultProps = {
    optionComponent: OptionComponent,
    valueComponent: ValueComponent,
    clearRenderer: ClearRenderer,
    arrowRenderer: ArrowRenderer,
    noResultsText: 'No results found',
};

export default withStyles(styles)(MaterialUiReactSelect);
