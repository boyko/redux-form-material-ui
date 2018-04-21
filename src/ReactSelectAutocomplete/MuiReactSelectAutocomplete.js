import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from 'material-ui/Chip';
import Select from 'react-select';
import selectStyles from './styles';

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

const ValueComponent = props => {
  const { value, children, onRemove } = props;

  const onDelete = event => {
    event.preventDefault();
    event.stopPropagation();
    onRemove(value);
  };

  if (onRemove) {
    return (
      <Chip
        tabIndex={-1}
        label={children}
        // className={classes.chip}
        deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
        onDelete={onDelete}
      />
    );
  }
  return <div className="Select-value">{children}</div>;
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
      valueComponent={ValueComponent}
      {...other}
    />
  );
}

class IntegrationReactSelect extends React.Component {
  render() {
    const { classes, value, onChange, label, multi, options, name, placeholder } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          fullWidth
          onChange={onChange}
          placeholder={placeholder}
          name="react-select-chip-label"
          label="With label"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputComponent: SelectWrapped,
            inputProps: {
              value,
              classes,
              multi,
              simpleValue: true,
              options,
              joinValues: true,
            },
          }}
        />
      </div>
    );
  }
}

export default withStyles(selectStyles)(IntegrationReactSelect);
