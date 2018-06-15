import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import createComponent from './createComponent'

const ReduxFormCheckBox = ({label, ...props}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox {...props} />
      }
      label={label || null}
    />
  )
}

export default createComponent(ReduxFormCheckBox, ({
  input: { onChange, value, ...inputProps },
  meta,
  onChange: ignoredOnChange,
  defaultChecked,
  ...props
}) => ({
  ...inputProps,
  ...props,
  checked: value ? true : false,
  onChange: (event, isInputChecked) => {
    onChange(isInputChecked)
  }
}))
