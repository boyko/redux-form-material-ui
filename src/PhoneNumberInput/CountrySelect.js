// @flow

import * as React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { ReactInput } from 'input-format';

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


type Props = {
  classes?: Object,
}

class PhoneNumberRender extends React.Component<Props> {
  static defaultProps = {
    classes: {},
  };

  render() {
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
    } = this.props;

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
            startAdornment={
              <InputAdornment position="start">
                <SelectComponent
                  ref={store_select_instance}
                  value={country_code}
                  options={select_options}
                  onChange={set_country}
                  disabled={disabled}
                  onToggle={country_select_toggled}
                  onTabOut={on_country_select_tab_out}
                  nativeExpanded={nativeExpanded}
                  autocomplete
                  autocompleteShowAll
                  maxItems={selectMaxItems}
                  concise
                  tabIndex={selectTabIndex}
                  focusUponSelection={false}
                  saveOnIcons={saveOnIcons}
                  name={input_props.name ? `${input_props.name}__country` : undefined}
                  ariaLabel={selectAriaLabel}
                  closeAriaLabel={selectCloseAriaLabel}
                  style={selectStyle}
                  className={classNames('react-phone-number-input__country',
                    {
                      'react-phone-number-input__country--native-expanded': nativeExpanded,
                    })}
                  inputClassName={inputClassName}
                />
              </InputAdornment>
            }
          />
          <FormHelperText>{indicateInvalid ? error : ''}</FormHelperText>
        </FormControl>
      </div>
    );
  }
}


export default withStyles(styles)(PhoneNumberRender);
// export default PhoneNumberRender;
