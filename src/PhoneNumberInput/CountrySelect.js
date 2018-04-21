// @flow

import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import ReactSelectInput from '../ReactSelectAutocomplete/MuiReactSelectAutocomplete';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    display: 'flex',
    flexWrap: 'nowrap',
    flexFlow: 'row',
  },
  // withoutLabel: {
  //   marginTop: theme.spacing.unit * 3,
  // },
});


const renderCountryChoice = props => {
  const { value } = props;
  const { iconUrl } = value;
  return (
    <img
      style={{ width: '1rem', height: '1rem' }}
      alt=""
      className="react-phone-number-input__icon"
      src={iconUrl}
    />
  );
};

class CountrySelect extends React.Component {
  render() {
    const {
      options,
      ...props
    } = this.props;

    return (
      <ReactSelectInput
        {...props}
        source={options}
        valueComponent={renderCountryChoice}
        clearable={false}
      />
    );
  }
}

export default withStyles(styles)(CountrySelect);
