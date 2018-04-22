import * as React from "react";

const CountryValue = props => {
  const { classes, value, children, onRemove } = props;
  const flagCode = value.value ? value.value.toLowerCase() : "international";

  return (
    <div style={{ maxWidth: "100%" }}>
      <img src={`https://lipis.github.io/flag-icon-css/flags/4x3/${flagCode}.svg`}/>
    </div>
  );
};

export default CountryValue;
