/* eslint-disable react/prop-types */

import React from 'react';
import TextField from '@material-ui/core/TextField';
import AsyncSelect from 'react-select/lib/Async';

class MuiReactSelectAutocomplete extends React.Component {
  render() {
    const {
      classes,
      value,
      onChange,
      optionComponent,
      valueComponent,
      clearRenderer,
      arrowRenderer,
      options,
      placeholder,
      multi,
      clearable,
      noResultsText,
      textFieldProps,
      onBlur,
      ...rest
    } = this.props;

    return (
        <TextField
            classes={classes}
            onChange={onChange}
            placeholder={placeholder}
            InputProps={{
              inputComponent: AsyncSelect,
              inputProps: {
                classes,
                value,
                optionComponent,
                valueComponent,
                clearRenderer,
                arrowRenderer,
                noResultsText,
                // onBlur: event => onBlur(event, event.target.value),
                name: 'react-select-single',
                instanceId: 'react-select-single',
                simpleValue: true,
                multi,
                clearable,
                joinValues: true, // Due to bug with react-select refs
                options,
                ...rest,
              },
            }}
            {...textFieldProps}
        />
    );
  }
}

export default MuiReactSelectAutocomplete;
