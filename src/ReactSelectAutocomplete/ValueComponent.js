import * as React from "react";
import Chip from "material-ui/Chip";
import CancelIcon from "@material-ui/icons/Cancel";

const ValueComponent = props => {
  const { classes, value, children, onRemove } = props;

  const onDelete = event => {
    event.preventDefault();
    event.stopPropagation();
    onRemove(value);
  };

  if (onRemove) {
    return (
      <Chip
        tabIndex={-1}
        label={children}
        className={classes.chip}
        deleteIcon={<CancelIcon onTouchEnd={onDelete}/>}
        onDelete={onDelete}
      />
    );
  }

  return <div className="Select-value">{children}</div>;
};

export default ValueComponent;
