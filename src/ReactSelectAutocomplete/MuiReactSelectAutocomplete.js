// @flow

import type { FieldPropsType } from 'redux-form';

import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ClearIcon from 'material-ui-icons/Clear';
import Chip from 'material-ui/Chip';
import Select from 'react-select';
import styles from './styles';

class Option extends React.Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

const valueRenderer = (valueProps, classes) => {
  const { value, children, onRemove } = valueProps;

  if (onRemove) {
    return (
      <Chip
        tabIndex={-1}
        label={children}
        className={classes.chip}
        onDelete={event => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        }}
      />
    );
  }
  return (<div className="Select-value">{children}</div>);
};

function SelectWrapped(props) {
  const { classes, ...other } = props;
  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>{'No results found'}</Typography>}
      arrowRenderer={arrowProps => {
        return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
      }}
      clearRenderer={() => <ClearIcon />}
      valueComponent={valueProps => valueRenderer(valueProps, classes)}
      {...other}
    />
  );
}

type SourceObject = {
  label: string,
  value: any,
}

type CssClasses = {
  wrapper?: string,
  input?: string,
}

type Props = {
  ...$Exact<FieldPropsType>,
  multiple?: boolean,
  placeholder?: string,
  source: Array<SourceObject>,
  classes?: CssClasses,
}

const MaterialUiReactSelect = (props: Props) => {
  const { onChange, value, classes, source, multiple, placeholder, ...rest } = props;

  let normalisedSource = source;
  if (source.length > 0 && (typeof source[0] === 'string' || typeof source[0] === 'number')) {
    normalisedSource = source.map(item => ({ value: item, label: item }));
  }
  return (
    <Input
      inputComponent={SelectWrapped}
      value={value}
      inputProps={{
        value,
        onChange,
        classes,
        multi: multiple,
        placeholder,
        instanceId: 'react-select-single',
        id: 'react-select-single',
        name: 'react-select-single',
        simpleValue: true,
        options: normalisedSource,
        ...rest,
      }}
    />
  );
};

MaterialUiReactSelect.defaultProps = {
  multiple: false,
  placeholder: '',
  classes: {},
};

export default withStyles(styles)(MaterialUiReactSelect);
