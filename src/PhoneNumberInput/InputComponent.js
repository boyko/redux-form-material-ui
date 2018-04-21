import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import ReactInput from 'input-format/commonjs/ReactInput';
import ReactSelectInput from '../ReactSelectAutocomplete/MuiReactSelectAutocomplete';
import selectStyles from '../ReactSelectAutocomplete/styles';

const renderCountryChoice = (props) => {
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

const styles = theme => ({
  ...selectStyles,
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
  '@global': {
    '.Select-multi-value-wrapper': {
      height: '1rem',
    },
  },
  // withoutLabel: {
  //   marginTop: theme.spacing.unit * 3,
  // },
});

const PhoneNumberInput = props => {
  const {
    classes,
    saveOnIcons,
    showCountrySelect,
    nativeExpanded,
    disabled,
    autoComplete,
    selectTabIndex,
    selectMaxItems,
    selectAriaLabel,
    selectCloseAriaLabel,
    inputTabIndex,
    style,
    selectStyle,
    inputStyle,
    className,
    inputClassName,

    error,
    indicateInvalid,

    selectComponent: SelectComponent,
    inputComponent: InputComponent,

    // Extract `input_props` via "object rest spread":
    dictionary,
    countries,
    country,
    onCountryChange,
    flags,
    flagComponent,
    flagsPath,
    international,
    internationalIcon,
    convertToNational,
    metadata,

    country_select_is_shown,
    label,
    store_input_instance,
    store_select_instance,
    select_options,
    set_country,
    country_select_toggled,
    on_country_select_tab_out,
    parse_character,
    format,
    country_code,
    can_change_country,
    ...input_props
  } = props;

  const inputProps = {
    ...input_props,
    parse: parse_character,
    format,
  };
  return (
    <div className={classes.root}>
      <FormControl
        error={indicateInvalid}
        className={classes.formControl}
      >
        <InputLabel>{label}</InputLabel>
        <Input
          inputProps={inputProps}
          inputComponent={ReactInput}
          type="tel"
          ref={store_input_instance}
          disabled={disabled}
          style={inputStyle}
        />
        <FormHelperText>{indicateInvalid ? error : ''}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(PhoneNumberInput);
// export default PhoneNumberRender;