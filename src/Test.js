import React from 'react';
import Input from 'material-ui/Input';
import { ReactInput } from 'input-format';

const parse = value => value;
const format = parse;


const TestInputComponent = ({ inputRef, ...props }) => {
  // ref={inputRef}
  return (
    <ReactInput
      ref={inputRef}
      parse={parse}
      format={format}
      {...props}
    />
  );
};

const Test = props => {
  return (
    <Input
      inputComponent={TestInputComponent}
      inputProps={{
        value: 'testValue',
      }}
    />
  );
};

export default Test;
