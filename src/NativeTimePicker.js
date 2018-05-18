// @flow

import type { FieldPropsType } from 'redux-form';

import * as React from 'react';
import { DateTime } from 'luxon';
import TextField from '@material-ui/core/TextField';

type Props = {
  ...$Exact<fieldProps>,
  step?: number,
  min?: string | null,
  max?: string | null,
}


// TODO: handle invalid times in client!
const NativeTimePicker = ({ input, meta, step, min, max, ...props }: Props) => {
  // const { value, onChange } = input;
  // TODO: this relies on initial values
  let value;
  if (input.value && typeof input.value === 'string') {
    value = input.value;
  }
  else {
    value = DateTime.fromISO(input.value.toISOString())
      .toLocaleString(DateTime.TIME_24_SIMPLE);
  }

  const onChange = event => {
    const value = event.target.value;
    console.log(value);
    const [timeH, timeM] = value.split(':');
    const date = DateTime.fromObject({
      hour: parseInt(timeH, 10),
      minute: parseInt(timeM, 10),
    });
    // const nextValue = new Date(date.toISO());
    const nextValue = date.toJSDate();
    input.onChange(nextValue);
  };

  return (
    <TextField
      type="time"
      value={value}
      onChange={onChange}
      {...props}
      inputProps={{
        step,
        min,
        max,
      }}
    />
  );
};

NativeTimePicker.defaultProps = {
  step: 300,
  min: null,
  max: null,
};

export default NativeTimePicker;
