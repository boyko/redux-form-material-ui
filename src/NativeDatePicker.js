// @flow

import type { FieldPropsType } from 'redux-form';

import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { DateTime } from 'luxon';

// TODO: NB! Remove dependency on react-toolbox!
// import NextIcon from 'react-material-icons/lib/arrow_back.svg.react';
// import PrevIcon from 'react-material-icons/lib/arrow_forward.svg.react';

type classesType = {
  wrapper?: string,
  input?: string,
}

type Props = {
  ...$Exact<FieldPropsType>,
  min?: string | null,
  max?: string | null,
  classes?: classesType,
}

const defaultProps = {
  classes: {},
  min: null,
  max: null,
};

const NativeDatePickerInput = (props: Props) => {
  const { input, classes, meta, helpText, min, max, ...rest } = props;

  // TODO: add error messages!
  let value;
  if (input.value && typeof input.value === 'string') {
    value = input.value;
  }
  else {
    value = DateTime.fromJSDate(input.value).toSQLDate();
  }

  const onChange = event => {
    const { value } = event.target;
    console.log(value);
    const [year, month, day] = value.split('-');
    const date = DateTime.fromObject({
      hour: 0,
      minute: 0,
      year: parseInt(year, 10),
      month: parseInt(month, 10),
      day: parseInt(day, 10),
    });
    const nextValue = date.toJSDate();
    input.onChange(nextValue);
  };

  return (
    <TextField
      type="date"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min,
        max,
      }}
      value={value}
      onChange={onChange}
      error={!!meta.error}
      helperText={meta.error ? meta.error : helpText}
      {...rest}
    />
  );
};

NativeDatePickerInput.defaultProps = defaultProps;


export default NativeDatePickerInput;
