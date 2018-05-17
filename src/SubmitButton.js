// @flow

import * as React from 'react';
import cn from 'classnames';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import CheckIcon from 'react-icons/lib/md/check';
import SaveIcon from 'react-icons/lib/md/save';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

// type cssType = {
//   root: string;
//   wrapper: string,
//   buttonSuccess: string,
//   buttonError: string,
//   fabProgress: string,
//   buttonProggress: string,
// }

// type Props = {
//   active: boolean,
//   submitting: boolean,
//   submitSucceeded: boolean,
//   submitFailed: boolean,
//   classes: cssType,
//   handleSubmit: any => Promise<any>, // TODO: flow type
// }

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonError: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

const SubmitButton = (props: Props) => {
  const {
    classes,
    handleSubmit,
    submitSucceeded,
    submitFailed,
    submitting,
  } = props;
  const buttonClassname = cn({
    [classes.buttonSuccess]: submitSucceeded,
    [classes.buttonError]: submitFailed,
  });

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="raised"
          color="primary"
          className={buttonClassname}
          disabled={submitting}
          onClick={handleSubmit}
        >
          {submitSucceeded ? <CheckIcon /> : <SaveIcon />} Запази
        </Button>
        {submitting && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
};

export default withStyles(styles)(SubmitButton);
