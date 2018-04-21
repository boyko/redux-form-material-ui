// @flow

import type { FieldPropsType } from 'redux-form';

import * as React from 'react';
import metadata from 'libphonenumber-js/metadata.min.json';
import Input from 'react-phone-number-input/commonjs/Input';
// import InternationalIcon from 'react-phone-number-input/commonjs/InternationalIcon';
import RenderPhoneNumber from './Render';
// import CountrySelect from './CountrySelect';

class PhoneNumberInput extends React.Component {
  render() {
    return (
      <Input
        {...this.props}
        renderComponent={RenderPhoneNumber}
      />
    );
  }
}

type Props = {
  ...$Exact<FieldPropType>,
  defaultCountry: string,
}

class PhoneNumberInputWithMetadata extends React.Component<Props> {
  focus() {
    return this.input.focus();
  }

  render() {
    const { input, ...rest } = this.props;
    return (
      <PhoneNumberInput
        {...input}
        ref={ref => {
          this.input = ref;
        }}
        {...rest}
        metadata={metadata}
      />
    );
  }
}

export default PhoneNumberInputWithMetadata;
