// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import CloseIcon from 'react-icons/lib/md/close';
import DeleteIcon from 'react-icons/lib/md/delete';
import SubmitButton from './SubmitButton';

// type Props = {
//   error: any,
//   pristine: boolean,
//   submitting: boolean,
//   valid: boolean,
//   handleSubmit: any => any, // TODO: flowtype
//   submitSucceeded: boolean,
//   submitFailed: boolean,
//   handleClose: any => any, // TODO: flowtype
//   handleDelete: any => any, // TODO: flowtype
// };
const defaultProps = {
  handleDelete: null,
  error: null,
  handleClose: null,
};

const FormControls = (props) => {
  const {
    error,
    pristine,
    submitting,
    valid,
    handleSubmit,
    submitSucceeded,
    submitFailed,
    handleDelete,
    handleClose,
  } = props;

  return (
    <div>
      {error &&
      <div style={{ color: 'red' }}>
        {error}
      </div>}
      <div>
        <SubmitButton
          submitting={submitting}
          active={!pristine && valid}
          handleSubmit={handleSubmit}
          submitSucceeded={submitSucceeded}
          submitFailed={submitFailed}
        />
        {handleClose &&
        <Button onClick={handleClose}>
          <CloseIcon /> Close
        </Button>}
        {handleDelete &&
        <Button onClick={handleDelete}>
          <DeleteIcon /> Delete
        </Button>}
      </div>
    </div>
  );
};

FormControls.defaultProps = defaultProps;

export default FormControls;
