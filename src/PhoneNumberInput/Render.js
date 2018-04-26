import * as React from "react";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import ReactInput from "input-format/commonjs/ReactInput";
import MuiReactSelectAutocomplete from "../ReactSelectAutocomplete/MuiReactSelectAutocomplete";
import selectStyles from "../ReactSelectAutocomplete/styles";

const renderCountryChoice = (props) => {
  const { value } = props;
  const { iconUrl } = value;
  return (
    <img
      style={{ width: "1rem", height: "1rem" }}
      alt=""
      className="react-phone-number-input__icon"
      src={iconUrl}
    />
  );
};

const styles = theme => ({
  ...selectStyles,
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    display: "flex",
    flexWrap: "nowrap",
    flexFlow: "row"
  },
  "@global": {
    ".Select-multi-value-wrapper": {
      height: "1rem"
    }
  }
  // withoutLabel: {
  //   marginTop: theme.spacing.unit * 3,
  // },
});

class RenderPhoneNumberField extends React.Component {
  render() {
    const {
      classes,
      saveOnIcons,
      showCountrySelect,
      nativeExpanded,
      nativeCountrySelect,
      displayInitialValueAsLocalNumber,
      countrySelectComponent,
      onTabOut,
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
      country,
      flags,
      flagComponent,
      flagsPath,
      international,
      internationalIcon,
      convertToNational,
      metadata,

      country_select_is_shown,
      label,
      inputRef,
      selectRef,
      store_input_instance,
      store_select_instance,
      country_select_options,
      onCountryChange,
      selectDisabled,
      country_select_toggled,
      on_country_select_tab_out,
      parse_character,
      format,
      parse,
      country_code,
      can_change_country,
      value,
      ...input_props
    } = this.props;

    const inputProps = {
      ...input_props,
      parse,
      format
    };
    return (
      <FormControl
        error={indicateInvalid}
        className={classes.formControl}
      >
        <InputLabel>{label}</InputLabel>
        <Input
          inputProps={inputProps}
          inputComponent={({ inputRef, ...props }) => <ReactInput ref={inputRef} {...props}/>}
          type="tel"
          value={value}
          inputRef={inputRef}
          disabled={disabled}
          style={inputStyle}
          ref={inputRef}
          startAdornment={
            <InputAdornment position="start">
              <MuiReactSelectAutocomplete
                ref={selectRef}
                value={country}
                options={country_select_options}
                onChange={onCountryChange}
                disabled={selectDisabled}
                onToggle={country_select_toggled}
                onTabOut={on_country_select_tab_out}
                valueComponent={renderCountryChoice}
                clearable={false}
                tabIndex={selectTabIndex}
                focusUponSelection={false}
                saveOnIcons={saveOnIcons}
                name={input_props.name ? `${input_props.name}__country` : undefined}
                ariaLabel={selectAriaLabel}
                closeAriaLabel={selectCloseAriaLabel}
                style={selectStyle}
                // className={css.fullWithMenu}
                inputClassName={inputClassName}
              />
            </InputAdornment>
          }
        />
        <FormHelperText>{indicateInvalid ? error : ""}</FormHelperText>
      </FormControl>
    );
  };
}

export default withStyles(styles)(RenderPhoneNumberField);
// export default PhoneNumberRender;
