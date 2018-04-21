/* eslint-disable react/prop-types */

import React from 'react';
import TextField from 'material-ui/TextField';
import Select from 'react-select';

class ReactSelectAutocompleteBasic extends React.Component {
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
      ...rest
    } = this.props;

    return (
      <TextField
        fullWidth
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={{
          inputComponent: Select,
          inputProps: {
            classes,
            optionComponent,
            valueComponent,
            clearRenderer,
            arrowRenderer,
            noResultsText,
            name: 'react-select-single',
            instanceId: 'react-select-single',
            simpleValue: true,
            multi,
            joinValues: true, // Due to bug with react-select refs
            options,
          },
        }}
        {...rest}
      />
    );
  }
}

export default ReactSelectAutocompleteBasic;
