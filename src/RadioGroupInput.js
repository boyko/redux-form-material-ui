// @flow

// import type { FieldPropsType } from 'redux-form';

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import mapError from './mapError';
// type Props = {
//   ...FieldPropsType,
//   children?: any,
//   options?: Array<Object>,
// }
const defaultProps = {
  options: [],
  children: null,
  formControlComponent: 'fieldset',
  disabled: false,
};

const styles = theme => ({
  root: {
    display: 'flex',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const RadioGroupInput = props => {
  const {
    input,
    options,
    formControlComponent,
    disabled,
    classes,
    label,
    required,
    meta: {
      error,
      touched,
      warning,
    },
    ...rest
  } = props;
  // const onChange = value => {
  //   if (onFieldChange) {
  //     onFieldChange(value);
  //     return handleChange(value);
  //   }
  // };
  const hasErrorOrWarning = Boolean(touched && (error || warning));
  return (
      <FormControl
          component={formControlComponent}
          className={classes.formControl}
          required={required}
          error={hasErrorOrWarning}
      >
        <FormLabel component="legend">{label}</FormLabel>
        <FormHelperText>{hasErrorOrWarning && error || warning}</FormHelperText>
        <RadioGroup
            aria-label={label}
            className={classes.group}
            disabled={disabled}
            {...input}
        >
          {
            options.map((opt, idx) => (
                <FormControlLabel
                    control={<Radio />}
                    key={idx}
                    {...opt}
                />
            ))
          }
        </RadioGroup>
      </FormControl>
  );
};

RadioGroupInput.defaultProps = defaultProps;

export default withStyles(styles)(RadioGroupInput);
