// @flow

// import type { FieldPropsType } from 'redux-form';

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// type Props = {
//   ...FieldPropsType,
//   children?: any,
//   options?: Array<Object>,
// }
const defaultProps = {
  options: [],
  children: null,
};

const styles = theme => ({
  root: {
    display: 'flex',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const RadioGroupInput = ({ input, options, ...props }) => {
  const { classes, label, required } = props;
  return (
    <FormControl
      component="fieldset"
      className={classes.formControl}
      required={required}
    >
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        className={classes.group}
        {...input}
      >
        {
          options.map((opt, idx) => (
            <FormControlLabel
              control={<Radio />}
              key={idx}
              value={opt.value}
              label={opt.label}
            />
          ))
        }
      </RadioGroup>
    </FormControl>
  );
};

RadioGroupInput.defaultProps = defaultProps;

export default withStyles(styles)(RadioGroupInput);
