// @flow

import type { FieldPropsType } from 'redux-form';

import * as React from 'react';
import { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import {
  FormControl,
  // FormHelperText,
} from 'material-ui/Form';
import MaterialUiReactSelect from './MuiReactSelectAutocomplete';
import styles from './styles';

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
  source: Array<SourceObject>,
  required?: boolean,
  multiple?: boolean,
  placeholder?: string,
  classes?: CssClasses,
}

// TODO: remove style attribute from formcontrol

const ReactSelectInput = (props: Props) => {
  const { input, label, meta, required, ...rest } = props;
  return (
    <FormControl
      style={{ width: '50%' }}
      required
      error={!!meta.error}
    >
      <InputLabel>{label}</InputLabel>
      <MaterialUiReactSelect
        {...input}
        onBlur={null}
        {...rest}
      />
    </FormControl>
  );
};

ReactSelectInput.defaultProps = {
  multiple: false,
  required: false,
  placeholder: '',
  classes: {},
};

export default withStyles(styles)(ReactSelectInput);
