// @flow

import type { FieldPropsType } from "redux-form";

import * as React from "react";
import metadata from "libphonenumber-js/metadata.min.json";
// import Input from "react-phone-number-input/commonjs/Input";
import createComponent from "../createComponent";
import mapError from "../mapError";

import Input from "./PhoneNumberInputTest";

// class PhoneNumberInput extends React.Component {
//   render() {
//     return (
//       <Input
//         {...this.props}
//       />
//     );
//   }
// }
//
// type Props = {
//   ...$Exact<FieldPropType>,
//   defaultCountry: string,
// }

class PhoneNumberInputWithMetadata extends React.Component<Props> {
  focus() {
    return this.input.focus();
  }

  render() {
    const { input, ...rest } = this.props;
    return (
      <Input
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


export default createComponent(PhoneNumberInputWithMetadata, ({
                                                                defaultValue,
                                                                ...props
                                                              }) => ({
  ...mapError(props)
}));

