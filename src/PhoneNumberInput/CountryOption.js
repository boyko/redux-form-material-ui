import * as React from "react";
import { MenuItem } from "material-ui/Menu";

class CountryOption extends React.Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { option, isFocused, isSelected, onFocus } = this.props;
    {/*<img src={`https://lipis.github.io/flag-icon-css/flags/4x3/${value.value}`}/>*/
    }
    const flagCode = option.value ? option.value.toLowerCase() : "international";
    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        <div style={{ maxWidth: "100%" }}>
          <img src={`https://lipis.github.io/flag-icon-css/flags/4x3/${flagCode}.svg`}/>
        </div>
      </MenuItem>
    );
  }
}

export default CountryOption;
