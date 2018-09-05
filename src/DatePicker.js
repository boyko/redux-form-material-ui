import React from 'react';
import DateUtils from 'material-ui-pickers/utils/date-fns-utils';
// import DateUtils from 'material-ui-pickers/utils/luxon-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';

const DatePickerInput = ({ input, ...props }) => {
  return (
    <MuiPickersUtilsProvider utils={DateUtils}>
      <DatePicker
        {...props}
        {...input}
        onBlur={input.onBlur(input.value)}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerInput;
